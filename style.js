// Auto calculate age from DOB
document.getElementById("dob").addEventListener("change", function () {
    let dob = new Date(this.value);
    let today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    let m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById("age").value = age;
});


// Password validation
document.getElementById("registerForm").addEventListener("submit", function (e) {
    let pass = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirmPassword").value;

    if (pass !== confirmPass) {
        alert("Passwords do not match!");
        e.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});
// 🔥 Real-time password strength checker
document.getElementById("password").addEventListener("input", function () {
    let val = this.value;
    let strength = "";

    if (val.length < 6) {
        strength = "Weak";
        this.style.borderColor = "red";
    } else if (val.match(/[A-Z]/) && val.match(/[0-9]/)) {
        strength = "Strong";
        this.style.borderColor = "green";
    } else {
        strength = "Medium";
        this.style.borderColor = "orange";
    }

    this.setAttribute("title", "Password Strength: " + strength);
});


document.querySelector("input[type='email']").addEventListener("input", function () {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (this.value.match(pattern)) {
        this.style.borderColor = "green";
    } else {
        this.style.borderColor = "red";
    }
});

document.querySelector("input[type='tel']").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');

    if (this.value.length === 10) {
        this.style.borderColor = "green";
    } else {
        this.style.borderColor = "red";
    }
});


document.querySelectorAll("input, select").forEach(field => {
    field.addEventListener("focus", () => {
        field.parentElement.style.transform = "scale(1.02)";
    });

    field.addEventListener("blur", () => {
        field.parentElement.style.transform = "scale(1)";
    });
});
const passwordField = document.getElementById("password");
const message = document.getElementById("passwordMessage");

passwordField.addEventListener("input", function () {
    let val = passwordField.value;

    if (val.length < 6) {
        message.textContent = "Password is weak, make it strong!";
        message.style.color = "red";
    } 
    else if (val.match(/[A-Z]/) && val.match(/[0-9]/) && val.length >= 8) {
        message.textContent = "Good, you have created a strong password!";
        message.style.color = "green";
    } 
    else {
        message.textContent = "Medium password, try adding numbers & uppercase letters";
        message.style.color = "orange";
    }
});