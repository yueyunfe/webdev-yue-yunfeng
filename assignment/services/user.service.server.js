module.exports = function (app) {
    app.post("/api/user", createUser);
    app.get("/api/user", findUser);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);

    var userModel = require("../model/user/user.model.server");

    // var users = [
    //     { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland" },
    //     { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
    //     { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
    //     { _id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
    // ];

    function createUser(req, res) {
        var user = req.body;
        userModel.createUser(user).then(
            function (user) {
                if (user) {
                    res.json(user);
                } else {
                    res.sendStatus(400).send("Something went wrong");
                }
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    };

    function findUser(req, res) {
        if (req.query["password"]) {
            findUserByCredentials(req, res);
        } else {
            findUserByUsername(req, res);
        }
    }

    function findUserByUsername(req, res) {
        var username = req.query["username"];
        userModel.findUserByUsername(username).then(
            function (user) {
                if (user) {
                    res.json(user);
                } else {
                    res.sendStatus(400).send("Cannot find user with the username");
                }
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    };

    function findUserByCredentials(req, res) {
        var username = req.query["username"];
        var password = req.query["password"];
        userModel.findUserByCredentials(username, password).then(
            function (user) {
                if (user) {
                    res.json(user);
                } else {
                    res.sendStatus(400).send("Cannot find user with the username and password");
                }
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    }

    function findUserById(req, res) {
        var userId = req.params["userId"];
        userModel.findUserById(userId).then(
            function (user) {
                if (user) {
                    res.json(user);
                } else {
                    res.sendStatus(400).send("Cannot find user with the ID");
                }
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    };

    function updateUser(req, res) {
        var userId = req.params["userId"];
        var updatedUser = req.body;
        userModel.updateUser(userId, updatedUser).then(
            function (user) {
                if (user) {
                    res.json(user);
                } else {
                    res.sendStatus(400).send("Cannot find user")
                }
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    };

    function deleteUser(req, res) {
        var userId = req.params["userId"];
        userModel.deleteUser(userId).then(
            function (stats) {
                res.json(stats);
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    };
}