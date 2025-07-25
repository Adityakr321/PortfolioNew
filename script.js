const contactForm = document.getElementById("contact-form"),
      contactMessage = document.getElementById("contact-message");

const sendEmail = (e) =>{
    e.preventDefault();

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm("service_dmsiboe", "template_8xo6g6j", "#contact-form", "HjXTUZWwNmAvjnAff")
    .then(()=>{
        //show sent message
        contactMessage.textContent = "Message sent successfully ✅"
    }, ()=>{
        //show error message
        contactMessage.textContent = "Message not sent (service error) ❌"
    })

    // this.reset();
}
contactForm.addEventListener("submit", sendEmail);


// --------------- Clear session storage on page load
window.onload = function () {
    sessionStorage.clear(); // Clears stored form values
};

// --------------- Prevent autofill by listening to unload event
window.onbeforeunload = function () {
    document.getElementById("contact-form").reset();
};


// --------------- Disable Inspect Element
document.addEventListener('keydown', function (event) {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J"))) {
        event.preventDefault();
    }
});