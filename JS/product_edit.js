$(document).ready(function () {
   
});

function confirm_edit() {
  var name = $('#item_name').val();
  var desc = $('#item_description').val();
  console.log(name);
  console.log(desc);

  if(confirm("Are you sure you want to edit?")){
      alert("Editing item.");
      return true;
  }else{
      return false;
  }


}