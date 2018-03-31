module.exports = function (app) {
    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);

    var websiteModel = require("../model/website/website.model.server");

    // websites = [
    //     { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
    //     { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
    //     { _id: "456", name: "Gizmodo", developerId: "456", description: "Lorem" },
    //     { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
    //     { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
    //     { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
    //     { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
    // ];

    function createWebsite(req, res) {
        var userId = req.params.userId;
        var website = req.body;
        websiteModel.createWebsiteForUser(userId, website).then(
            function (website) {
                if (website) {
                    res.json(website);
                } else {
                    res.sendStatus(400).send("Something went wrong");
                }
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    }

    function findAllWebsitesForUser(req, res) {
        var userId = req.params.userId;
        websiteModel.findAllWebsitesForUser(userId).then(
            function (website) {
                res.json(website);
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    }

    function findWebsiteById(req, res) {
        var websiteId = req.params.websiteId;
        websiteModel.findWebsiteById(websiteId).then(
            function (website) {
                if (website) {
                    res.json(website);
                } else {
                    res.sendStatus(400).send("Cannot find website with corresponding Id");
                }
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    }

    function updateWebsite(req, res) {
        var websiteId = req.params.websiteId;
        var updatedWebsite = req.body;

        websiteModel.updateWebsite(websiteId, updatedWebsite).then(
            function (website) {
                if (website) {
                    res.json(website);
                } else {
                    res.sendStatus(400).send("Cannot find website with corresponding Id");
                }
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    }

    function deleteWebsite(req, res) {
        var websiteId = req.params.websiteId;
        websiteModel.deleteWebsite(websiteId).then(
            function (website) {
                res.json(website);
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    }
}