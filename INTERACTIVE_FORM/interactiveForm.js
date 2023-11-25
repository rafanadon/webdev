
function isValidEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

document.getElementById("email").addEventListener("input", function() {
    let email = this.value;

    if(!isValidEmail(email)){
        this.setCustomValidity("Please enter a valid email address.");
  } else {
    this.setCustomValidity("");
  }

});


