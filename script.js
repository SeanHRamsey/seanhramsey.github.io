/*
This function checks to make sure that the email section for the contact form
contains an @ denoting a valid email address acting as form validation.
*/
function validateForm() {
  let x = document.forms["emailForm"]["mail"].value;
  emailpos = x.indexOf("@");
  if(emailpos==-1){
    alert("Please enter a valid email");
    return false;
  }
  return true;
}
////////////////////////////////////////////////////
/*
This function when called, toggles the body css class to a "dark_body" css class and back
to normal when toggled again to act as dark/light mode
*/
function toggleDark(){
  var body = document.body;
  body.classList.toggle("dark_body");
}
///////////////////////////////////////////////////
/*
These functions are each individually called for each "learn more" button is clicked each 
modifying its own div tag holding info on the project. It will toggle between being shown 
and being hidden
*/
function code1(){
  var x = document.getElementById("project1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function code2(){
  var x = document.getElementById("project2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function code3(){
  var x = document.getElementById("project3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function code4(){
  var x = document.getElementById("project4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
///////////////////////////////////////////////////
function scrollToTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}