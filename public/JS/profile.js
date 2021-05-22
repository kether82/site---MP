$(document).ready(function() {

    $("#rate-acc").on('click', function () {

        $(".rate-container").show();
        $(".page-darken").show(); 
    });
    
    
    $("#rating").change(function () {

        //gets the value of the button
        var rating = $('#rating').find(":selected").text();
        console.log(rating);
    });

    $("#cancel-rate").on('click', function () {

        $(".rate-container").hide();
        $(".page-darken").hide();
    });

    $("#add-list").on('click', function() {

        $("#add-error-msg").hide();
        $(".addlist-container").show();
        $(".page-darken").show(); 
    });

    $("#cancel-addlist").on('click', function() {

        $(".addlist-container").hide();
        $(".page-darken").hide(); 
    });

    $("#confirm-addlist").on('click', function() {

        var name = $("#name").val();
        var description = $("#itemDesc").val();
        //get image

        console.log(name);
        console.log(description);

        if(validateAddList(name, description)) {
            $("#add-error-msg").hide();
            $(".addlist-container").hide();
            $(".page-darken").hide(); 
    
            //CODE ADD CONTENTS OF ADD LIST DB
            jQuery.post("/profile/",{name : name, description : description},function(val){
                // console.log(val.listing_id);
                // window.location.replace("/listing/"+val.listing_id);
                $('body').load('');
            });
        }

        else $("#add-error-msg").show();
    });

    //image to be added if ever
    function validateAddList(name, description) {

        if(name === "" || description === ""){
            return false;
        }

        else return true;
    }

    //EDIT ACCOUNT TO BE IMPROVED WHEN DATABASE IS AVAILABLE
    $("#edit-info").on('click', function () {
        
        $(".page-darken").show();
        $(".edit-container").show();

    });

    $("#exit-edit").on('click', function () {

        $(".edit-container").hide();
        $(".page-darken").hide();
        $("#edit-error-msg").hide();
    });

    $("#confirm-edit").on('click', function () {


        var name = $("#name").val();
        var number = $("#number").val();
        var description = $("#description").val();

        console.log(validateEdit(name, number, description));

        if(validateEdit(name, number, description)) {
            //change values
            $("#error-msg").hide();
            $(".page-darken").hide();
            $(".edit-container").hide();
        }

        else {
            $("#edit-error-msg").show();
        }
    });

    $("#del-acc").on('click', function () {

        $(".page-darken").show();
        $(".delete-container").show();

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

    function validateEdit(name, number, description) {
        
        if(name === "" || description === "" || number === ""){
            return false;
        }

        else return true;
    }
});