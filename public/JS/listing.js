$(document).ready(function () {

    $("#edit-info").on('click', function () {

        $(".edit-container").show();
        $(".page-darken").show();
        $("#iName").val("");
        $("#iDescription").val("");
    });

    $("#exit-edit").on('click', function () {

        $(".edit-container").hide();
        $(".page-darken").hide();
        $("#edit-error-msg").hide();
    });

    function validateEdit(name, description, files) {

        if (name !== "" || description !== "" || files.length !== 0) {
            return true;
        }

        else return false;
    }
    function readFile(file, cb) {
        let myReader = new FileReader();
        myReader.onloadend = function (e) {
            cb(myReader.result);
        };
        myReader.readAsDataURL(file);
    };

    $("#confirm-edit").on('click', function () {

        var name = $("#iName").val();
        var description = $("#iDescription").val();
        var parser = document.createElement("a");
        var url = $(location).attr('href');
        parser.href = url;
        var listing_id = parser.pathname.split("/listing/")[1];
        // alert(listing_id)


        var files = document.getElementById("itemPic").files;
        var file = files[0];

        if (validateEdit(name, description, files)) {

            $(".edit-container").hide();
            $(".page-darken").hide();
            if (files.length === 0) {
                jQuery.post('/listing/editListing', { name: name, description: description, listing_id: listing_id }, function () {
                    $('body').load('');
                })
            } else {
                readFile(file, (b64) => {
                    jQuery.post('/listing/editListing', { name: name, description: description, listing_id: listing_id, image: b64 }, function () {
                        $('body').load('');
                    })
                })
            }

        }

        else $("#edit-error-msg").show();
    });

    $("#del-listing").on('click', function () {

        $(".delete-container").show();
        $(".page-darken").show();
    });

    $("#cancel-delete").on('click', function () {

        $(".page-darken").hide();
        $(".delete-container").hide();

    });

    $("#confirm-delete").on('click', function () {

        $(".page-darken").hide();
        $(".delete-container").hide();


    });

    //COMMENTS CODE
    $('#send').attr('disabled', true);
    $('#comment').keyup(function () {
        if ($(this).val().length != 0)
            $('#send').attr('disabled', false);
        else
            $('#send').attr('disabled', true);
    });

    $("#send").on('click', function () {

        var comment = $('#comment').val();
        // alert(comment);
        // get the listing_id
        var parser = document.createElement("a");
        var url = $(location).attr('href');
        parser.href = url;
        var listing_id = parser.pathname.split("/listing/")[1];


        if (validateComment(comment)) {
            jQuery.post('/listing/addComment', {comment : comment, listing_id : listing_id }, function () {
                $('body').load('');
            })
        }
    });

    function validateComment(comment) {
        if (comment === "")
            return false;
        else return true;
    }

    $("#edit-comment").on('click', function () {

        $("#new-comment").val("");
        $(".edit-comment-container").show();
        $(".page-darken").show();
    });

    $("#exit-comment-edit").on('click', function () {

        $(".edit-comment-container").hide();
        $(".page-darken").hide();
    });

    $('#confirm-edit-comment').attr('disabled', true);

    $('#new-comment').keyup(function () {
        if ($(this).val().length != 0)
            $('#confirm-edit-comment').attr('disabled', false);
        else
            $('#confirm-edit-comment').attr('disabled', true);
    });

    $("#confirm-edit-comment").on('click', function () {

        $(".edit-comment-container").hide();
        $(".page-darken").hide();
    });

    $("#delete-comment").on('click', function () {

        $(".del-comment-container").show();
        $(".page-darken").show();

        //DELETE COMMENT CODE
    });

    $("#cancel-comment-del").on('click', function () {

        $(".del-comment-container").hide();
        $(".page-darken").hide();
    });
});