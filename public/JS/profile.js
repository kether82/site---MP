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
    //EDIT ACCOUNT TO BE IMPROVED WHEN DATABASE IS AVAILABLE
    $("#edit-info").on('click', function () {

        $(".page-darken").show();
        $(".edit-container").show();

    });

    $("#exit-edit").on('click', function () {

        $(".edit-container").hide();
        $(".page-darken").hide();
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
            $("#error-msg").show();
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