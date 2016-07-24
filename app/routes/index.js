"use strict";
var FileHandler = require(process.cwd() + "/app/controllers/fileHandler.js");

module.exports = function(app, db) {
    var fileHandler = new FileHandler(db);

    // serves index page
    app.route("/")
        .get(function(req, res) {
            res.sendFile(process.cwd() + "/public/index.html");
        });

    app.route("/test")
        .post(fileHandler.getFileSize);
};
