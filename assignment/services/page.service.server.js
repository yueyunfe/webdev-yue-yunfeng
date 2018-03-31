module.exports = function (app) {
    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    var pageModel = require("../model/page/page.model.server");

    // pages = [
    //     { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
    //     { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
    //     { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
    // ];

    function createPage(req, res) {
        var websiteId = req.params.websiteId;
        var page = req.body;
        pageModel.createPage(websiteId, page).then(
            function (page) {
                if (page) {
                    res.json(page);
                } else {
                    res.sendStatus(400).send("Something went wrong");
                }
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    }

    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.websiteId;
        pageModel.findAllPagesForWebsite(websiteId).then(
            function (page) {
                res.json(page);
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    }

    function findPageById(req, res) {
        var pageId = req.params.pageId;
        pageModel.findPageById(pageId).then(
            function (page) {
                if (page) {
                    res.json(page);
                } else {
                    res.sendStatus(400).send("Cannot find page with corresponding Id");
                }
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    }

    function updatePage(req, res) {
        var pageId = req.params.pageId;
        var updatedPage = req.body;
        pageModel.updatePage(pageId, updatedPage).then(
            function (page) {
                if (page) {
                    res.json(page);
                } else {
                    res.sendStatus(400).send("Cannot find page with corresponding Id");
                }
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    }

    function deletePage(req, res) {
        var pageId = req.params.pageId;
        pageModel.deletePage(pageId).then(
            function (page) {
                res.json(page);
            },
            function (err) {
                res.sendStatus(400).send(err);
            }
        );
    }
}