$(document).ready(function () {
   
});

function confirm_create() {
  var comment = $('#comment').val();
  console.log(comment);

  if(confirm("Are you sure you want to add?")){
      alert("Adding comment.");
      return true;
  }else{
      return false;
  }


}