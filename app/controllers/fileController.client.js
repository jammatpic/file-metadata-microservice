"use strict";

(function() {

    $("form").submit(function() {
        var file = new FormData($("form")[0]);
        $.ajax({
            url: "./unique",
            data: file,
            processData: false,
            contentType: false,
            type: "POST",
            success: function(data) {
                alert("Your file is " + data + " bytes in size.");
            },
            error: function(error) {
                alert("File could not be read.");
            }
        });
    });

})();
