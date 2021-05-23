$(document).ready(function () {

});

$("#login").click(function (e) {
  var username = $('#username').val();
  var pw = $('#password').val();
  var check = $('#rememberMe').is(":checked");
  console.log(username);
  console.log(pw);
  console.log(check);

  // prob function to check if username and pw is in db

  if (username === "" || pw === "") {
    alert('Invalid credentials. Username or Password is incorrect.')

    return false;
  } else {
    alert("Something");
  }

});
