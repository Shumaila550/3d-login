const form = document.getElementById("loginForm");
const button = document.getElementById("loginBtn");
const loginBox = document.getElementById("loginBox");
const successBox = document.getElementById("successBox");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {

        button.classList.add("loading");
        button.textContent = "Logging in";

        setTimeout(() => {
            loginBox.classList.add("fade-out");

            setTimeout(() => {
                successBox.classList.add("show");
            }, 500);

        }, 1500);

        // Optional redirect
        // setTimeout(() => {
        //     window.location.href = "calculator.html";
        // }, 3000);

    } else {
        alert("Invalid credentials");
    }
});
