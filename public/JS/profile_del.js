$(document).ready(function () {
   
});

function confirm_del() {

  if(confirm("Are you sure you want to delete the account?")){
      alert("Deleting account.");
      return true;
  }else{
      return false;
  }


}