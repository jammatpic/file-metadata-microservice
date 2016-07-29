"use strict";

function fileHandler(db) {
    var files = db.collection("files");

    // called when user wants to find out size of a file
    this.getFileSize = function(req, res) {
        var file = req.file;
        res.send(String(file.size));
    };
};

module.exports = fileHandler;
