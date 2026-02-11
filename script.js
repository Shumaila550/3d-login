const form = document.getElementById("loginForm");
const button = document.getElementById("loginBtn");
const container = document.querySelector(".login-container");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple demo login
    if (username === "admin" && password === "1234") {

        // Loading effect
        button.textContent = "Logging in...";
        button.classList.add("loading");

        setTimeout(() => {
            container.classList.add("success");
            message.textContent = "Login Successful ✓";

            button.textContent = "Success";
            button.style.background = "#00c853";

            // Redirect example
            // window.location.href = "calculator.html";

        }, 1500);

    } else {
        message.style.color = "red";
        message.textContent = "Invalid Username or Password!";
    }
});
