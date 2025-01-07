document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("authToken");
    const loginLink = document.getElementById("login-link");
    const accountLink = document.getElementById("account-link");

    if (token) {
        // Nếu đã đăng nhập, ẩn "Login" và hiển thị "My Account"
        loginLink.style.display = "none";
        accountLink.style.display = "block";
    } else {
        // Nếu chưa đăng nhập, hiển thị "Login" và ẩn "My Account"
        loginLink.style.display = "block";
        accountLink.style.display = "none";
    }
});
