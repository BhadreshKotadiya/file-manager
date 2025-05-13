<script>

document.addEventListener('DOMContentLoaded', function () {
    initPasswordToggle();
});

function initPasswordToggle() {
    var passwordToggles = document.querySelectorAll(".form-password-toggle i");

    if (passwordToggles) {
        passwordToggles.forEach(function (toggle) {
            toggle.addEventListener('click', function (event) {
                event.preventDefault();
                
                var formToggle = toggle.closest(".form-password-toggle");
                var eyeIcon = formToggle.querySelector("i");
                var passwordInput = formToggle.querySelector("input");

                if (passwordInput.getAttribute("type") === "text") {
                    passwordInput.setAttribute("type", "password");
                    eyeIcon.classList.replace("ti-eye", "ti-eye-off");
                } else if (passwordInput.getAttribute("type") === "password") {
                    passwordInput.setAttribute("type", "text");
                    eyeIcon.classList.replace("ti-eye-off", "ti-eye");
                }
            });
        });
    }
}

</script>
