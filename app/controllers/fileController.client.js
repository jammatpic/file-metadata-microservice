"use strict";


$("form").submit(function() {
    var file = new FormData($("form")[0]);
    
    $.ajax({
        url: "http://localhost:3000/test",
        data: file,
        processData: false,
        contentType: false,
        type: "POST",
        success: function(data) {
            alert(data);
        }
    });
});
