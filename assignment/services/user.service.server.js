module.exports = function (app) {
    app.post("/api/user", createUser);
    app.get("/api/user", findUser);
    // app.get("/api/user?username=username", findUserByUsername);
    // app.get("/api/user?username=username&password=password", findUserByCredentials);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);

    var users = [
        { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland" },
        { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
        { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
        { _id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
    ];

    function createUser(req, res) {
        var user = req.body;
        for (var x = 0; x < users.length; x++) {
            if (users[x].username === user["username"]) {
                res.status(404).send("This username is already exist.");
                return;
            }
        }

        user._id = Math.random().toString();
        users.push(user);
        res.json(user);
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
        for (var i = 0; i < users.length; i++) {
            if (users[i].username === username) {
                res.json(users[i]);
                return;
            }
        }
        res.status(404).send("Cannot find user with username: " + username);
    };

    function findUserByCredentials(req, res) {
        var username = req.query["username"];
        var password = req.query["password"];
        for (var i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password) {
                res.json(users[i]);
                return;
            }
        }
        res.status(404).send("Username and password did not match.");
    }

    function findUserById(req, res) {
        var userId = req.params["userId"];
        for (var i = 0; i < users.length; i++) {
            if (users[i]._id === userId) {
                res.json(users[i]);
                return;
            }
        }
        res.status(404).send("Cannot find user with user ID: " + userId);
    };

    function updateUser(req, res) {
        var userId = req.params["userId"];
        var updatedUser = req.body;

        console.log("update user: " + userId + " " + updatedUser["firstName"] + " " + updatedUser["lastName"]);
        for (var i = 0; i < users.length; i++) {
            if (users[i]._id === userId) {
                users[i].firstName = updatedUser["firstName"];
                users[i].lastName = updatedUser["lastName"];

                res.json(updatedUser);
                return;
            }
        }
        res.status(404).send("User not found!");
    };

    function deleteUser(req, res) {
        var userId = req.params["userId"];
        for (let x = 0; x < users.length; x++) {
            if (users[x]._id === userId) {
                res.json(users[x]);
                users.splice(x, 1);
                return;
            }
        }
        res.status(404).send("User cannot be found!");
    };
}