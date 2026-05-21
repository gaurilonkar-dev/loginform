


// to select form using id (loginForm) and store in variable (form)
// when form submitted function is run 
const form = document.getElementById("loginForm");

function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("errormsg");
    
    error.innerText = "";
  
    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
    if (email === "") {
        error.innerText = "*Email is required*";
        return;
    }

    if (!emailPattern.test(email)) {
        error.innerText = "*Enter a valid email*";
        return;
    }


    // Password validation
    if (password === "") {
        error.innerText = "*Password is required!!*";
        return;
    }

    if (!passwordPattern.test(password)) {
        error.innerText = "*Password must be contain characters,number, and symbol !!*";
        return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
    alert("Login successfully!");
}

form.addEventListener("submit", login);


//hide show password 
function togglePassword() {
    const password = document.getElementById("password");
    password.type = password.type === "password" ? "text" : "password";
}