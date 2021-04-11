$(document).ready(function(){

    $('button').click(function() {
        var full_name = $("#name");
        var username = $("#u_name");
        var password = $("#p_word");
        var confirm_password = $("#cp_word");
        var contact_number = $("#number");

        console.log(full_name.val());
        console.log(username.val());
        console.log(password.val());
        console.log(confirm_password.val());
        console.log(contact_number.val());

        if(password.val() === confirm_password.val())
            alert("Successfully registered as " + username.val() + ".");
          
        else
            alert("Invalid credentials. Password doesn't match.");
    });        
});