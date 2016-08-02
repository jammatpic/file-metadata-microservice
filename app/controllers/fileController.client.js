"use strict";

(function() {

    $('input[type=file]').bootstrapFileInput();
    $('.file-inputs').bootstrapFileInput();

    $("form").submit(function() {
        var file = new FormData($("form")[0]);
        $.ajax({
            url: "./",
            data: file,
            processData: false,
            contentType: false,
            type: "POST"
        });
    });
})();
