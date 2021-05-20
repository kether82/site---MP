$(document).ready(function () {
   
});

function confirm_del() {

  if(confirm("Are you sure you want to delete the item?")){
      alert("Deleting item.");
      return true;
  }else{
      return false;
  }


}