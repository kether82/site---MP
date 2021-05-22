
$(document).ready(function(){
    $('.errors').text('');
    $('#u_name').keyup(()=>{
        let user_name = ($('#u_name').val().trim());
        jQuery.get('/check_user_name', {user_name:user_name},function(res){
            if(res.user_name != user_name){
                $('#verify').prop('disabled',false);
            }else{
                alert("Username is taken.");
                $('#verify').prop('disabled',true);
            }
        })
    })
    $('#verify').click(function(e) {
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

        if(full_name.val() === "")
            alert("ERROR: Full name is empty.");
        
        else if(username.val() === ""){
            alert("ERROR: Username is empty.");
        }

        else if(password.val() === "")
            alert("ERROR: Password is empty.");

        else if(confirm_password.val() === "")
            alert("ERROR: Confirm Password is empty.");

        else if(contact_number.val() === "")
            alert("ERROR: Contact Number is empty.");

        // else 
        // if(!Number.isInteger(contact_number.val()))
        //     alert("ERROR: Please put a number in the contact number field.");

        else {
            if(password.val() === confirm_password.val()){
                alert("You may now submit");
                $('button').prop('disabled',false);
            }
            else alert("ERROR:  Password and Confirm Password doesn't match.");
        }

        $('.errors').text('');
    });        

});