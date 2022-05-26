const logoutBtn = document.querySelector(".logoutBtn");

logoutBtn.addEventListener("click", () => {
    fetch("logout", {
        method: "GET"
    })
        .then(res => window.location.href = res.url);
});