$(document).ready(function() {

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

    function validateEdit(name, description) {
        
        if(name !== "" || description !== ""){
            return true;
        }

        else return false;
    }

    $("#confirm-edit").on('click', function () {

        var item_name = $("#iName").val();
        var item_desc = $("#iDescription").val();

        if (validateEdit(item_name, item_desc)) {

            $(".edit-container").hide();
            $(".page-darken").hide(); 

            //EDIT ITEM INFO CODE DB
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

        //TO BE ADDED ONCE DATABASE BECOMES AVAILABLE
        //Delete account code

    });
});