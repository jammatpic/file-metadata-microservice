"use strict";

(function() {

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
