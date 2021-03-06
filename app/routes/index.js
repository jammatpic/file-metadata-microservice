"use strict";
var multer = require("multer");
var upload = multer();
var FileHandler = require(process.cwd() + "/app/controllers/fileHandler.js");

module.exports = function(app) {
    var fileHandler = new FileHandler();

    // serves index page
    app.route("/")
        .get(function(req, res) {
            res.sendFile(process.cwd() + "/public/index.html");
        })
        // uses multer to handle file
        .post(upload.single("theFile"), fileHandler.getFileSize);
};
