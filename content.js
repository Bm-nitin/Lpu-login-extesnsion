(function () {
    const USERNAME = "12345678";
    const PASSWORD = "Password123";

    function autoLogin() {
        const userField = document.querySelector("input[type='text']");
        const passField = document.querySelector("input[type='password']");
        const checkbox = document.getElementById("agreepolicy");

        // Try multiple ways to find login button
        const loginBtn =
            document.querySelector("button[type='submit']") ||
            document.querySelector("input[type='submit']") ||
            [...document.querySelectorAll("button")].find(btn =>
                btn.innerText.toLowerCase().includes("login")
            );

        if (userField && passField && checkbox && loginBtn) {
            userField.value = USERNAME;
            passField.value = PASSWORD;

            userField.dispatchEvent(new Event("input", { bubbles: true }));
            passField.dispatchEvent(new Event("input", { bubbles: true }));

            // 🔥 FIX: force real click on checkbox
            if (!checkbox.checked) {
                checkbox.click();
            }

            // 🔥 Some sites need delay before enabling login
            setTimeout(() => {
                loginBtn.click();
                
            }, 1);

        } else {
            setTimeout(autoLogin, 1);
        }
    }

    autoLogin();
})();