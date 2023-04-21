function verify() {
    const userEmail = document.getElementById("email-address").value;

    const regex = new RegExp(/[-.\w]+@([\w-]+\.)+[\w-]+/g);

    let emailVerification = regex.test(userEmail);

    if (emailVerification === false) {
        document.getElementById("error-message").innerHTML = "Please provide a valid email";
        document.getElementById("icon-error").style.display = "block";
    }
}