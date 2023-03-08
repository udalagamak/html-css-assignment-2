// Form Validation
$(function() {
  $("form[name='contact']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      }
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      phone: {
        required: "Please provide a phone number",
        maxlength: "Your phone number must be 10 characters long"
      },
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
      alert("Form sucessfully submitted!")
    }
  });
});

// Side Navigation bar
let menuBtn = document.querySelector(".navigation .hamburger");
let closeBtn = document.querySelector(".sidebar .close");
let header = document.querySelector("header");
let body = document.querySelector("body");
menuBtn.addEventListener("click", function(e){
  header.classList.add("open");
  body.classList.add("menu-opened");
});

closeBtn.addEventListener("click", function(e){
  header.classList.remove("open");
  body.classList.remove("menu-opened");
});