const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {

        message.style.color = "#00c853";
        message.textContent = "Login Successful ✓";

        form.classList.remove("error");
        form.classList.add("success");

        // Optional redirect
        // setTimeout(() => {
        //     window.location.href = "calculator.html";
        // }, 2000);

    } else {

        message.style.color = "red";
        message.textContent = "Invalid Credentials";

        form.classList.remove("success");
        form.classList.add("error");

        setTimeout(() => {
            form.classList.remove("error");
        }, 300);
    }
});
