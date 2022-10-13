window.onload = ()=>{
    const form = document.getElementById("feedback");
    const captchaWarning = document.getElementById("captcha-warning");

    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        captchaWarning.classList.add("d-none");

        const formData = new FormData(event.target);
        const data = JSON.stringify(Object.fromEntries(formData));
        const url = event.target.action;

        const req = new XMLHttpRequest();

        req.onreadystatechange = function() {
            if (req.readyState == XMLHttpRequest.DONE && req.status == 200) {
                window.location.href = "/"
            } else if (req.status == 400) {
                captchaWarning.classList.remove("d-none")
            }
        }

        req.open("POST", url);
        req.send(data);
    })
}
