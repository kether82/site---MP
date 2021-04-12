$(document).ready(function () {
   
});

function confirm_edit() {
  var comment = $('#comment').val();
  console.log(comment);

  if(confirm("Are you sure you want to edit?")){
      alert("Editing comment.");
      return true;
  }else{
      return false;
  }


}