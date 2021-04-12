$(document).ready(function () {
   
});

function checkform()
{
     var user = $("#username");
     var desc = $("#description");

     console.log(user);
     console.log(description);
    
     if(user.val()==="" && desc.val()==="")
     {
         alert("Invalid input, please try again");
        return false;
     }
    
     else
     {
           
           alert("profile details successfully change");
     }

    return true;
}
