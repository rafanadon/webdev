function submitForm() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;

    
    console.log("User Information:");
    console.log("Full Name: " + fullName);
    console.log("Email: " + email);
    console.log("Phone #: " + phone);
    console.log("Age: " + age);
    console.log("Address: " + address);

}
