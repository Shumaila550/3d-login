const card = document.getElementById("card");

document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 20;
    let y = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Login Successful!");
});
