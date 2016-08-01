"use strict";

function fileHandler() {
    // called when user wants to find out size of a file
    this.getFileSize = function(req, res) {
        if (req.file == undefined) {
            res.end("File could not be read.");
        } else {
            var file = req.file;
            res.end(JSON.stringify({"file-size": String(file.size)}));
        }
    };
};

module.exports = fileHandler;
