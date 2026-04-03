const formTitle = document.getElementById("formTitle");
const nameGroup = document.getElementById("nameGroup");
const submitBtn = document.getElementById("submitBtn");
const toggleLink = document.getElementById("toggleLink");
const toggleText = document.getElementById("toggleText");

const form = document.getElementById("authForm");
const successMessage = document.getElementById("successMessage");

let isSignup = false;

/* ---------TOGGLE FORM--------- */
function toggleForm() {
    isSignup = !isSignup;

    if (isSignup) {
        formTitle.textContent = "Sign Up";
        nameGroup.style.display = "block";
        submitBtn.textContent = "Sign Up";
        toggleText.textContent = "Already have an account?";
        toggleLink.textContent = "Login";
    }

    else {
        formTitle.textContent = "Login";
        nameGroup.style.display = "none";
        submitBtn.textContent = "Login";
        toggleText.textContent = "Don't have an account?";
        toggleLink.textContent = "Sign Up";
    }

    clearError();
    successMessage.style.display = "none";
    form.reset();
}

/* ---------SHOW/HIDE PASSWORD--------- */
function togglePassword(){
    const password = document.getElementById("password");
    password.type = password.type === "password" ? "text" : "password";
}


/* ----------CLEAR ERROR--------- */
function clearError() {
    document.querySelectorAll(".error").forEach(error => {
        error.style.display = "none";
    });
}
/* ---------FORM SUBMIT--------- */
form.addEventListener("submit",function(e){
    e.preventDefault();
    clearError();


    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;

    if (isSignup && name === "") {
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    }

    if (!email.includes("@")||!email.includes(".")|| email ==="") {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    }

    if(!isValid) return;

    /* ---------SIGNUP LOGIC-------- */
    if (isSignup) {
        const user = {name, email, password};
        localStorage.setItem("user", JSON.stringify(user));
        successMessage.textContent = "Signup successful! You can now login.";
        successMessage.style.display = "block";

        toggleForm();
        return;
    }

    /* ---------LOGIN LOGIC-------- */
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if(!savedUser){
        alert("No user found. Please sign up first.");
        return;
    }

    if (email === savedUser.email && password === savedUser.password) {
        successMessage.style.display
        successMessage.innerText = `Welcome back, ${savedUser.name}!`;
        form.reset();
    }
    else{
        alert("Invalid email or password.");
    }


});

