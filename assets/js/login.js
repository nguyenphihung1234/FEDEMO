document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".sign-in form");
    const registerForm = document.querySelector(".sign-up form");

    // Xử lý đăng nhập
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = loginForm.querySelector("input[type='email']").value;
        const password = loginForm.querySelector("input[type='password']").value;

        try {
            const response = await fetch("http://localhost:5147/api/User/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                alert("Đăng nhập thành công!");
                localStorage.setItem("authToken", data.token); // Lưu token
                window.location.href = "/index.html"; // Chuyển trang
            } else {
                const error = await response.json();
                alert(error.message || "Đăng nhập thất bại!");
            }
        } catch (err) {
            console.error("Error:", err);
            alert("Có lỗi xảy ra. Vui lòng thử lại!");
        }
    });

    // Xử lý đăng ký
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = registerForm.querySelector("input[placeholder='Name']").value;
        const email = registerForm.querySelector("input[type='email']").value;
        const password = registerForm.querySelector("input[type='password']").value;

        try {
            const response = await fetch("http://localhost:5147/api/User/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                alert("Đăng ký thành công! Hãy đăng nhập.");
                document.getElementById("login").click();
            } else {
                const error = await response.json();
                alert(error.message || "Đăng ký thất bại!");
            }
        } catch (err) {
            console.error("Error:", err);
            alert("Có lỗi xảy ra. Vui lòng thử lại!");
        }
    });
});
