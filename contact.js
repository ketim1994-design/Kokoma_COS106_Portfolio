
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("contact-feedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("visitor-name").value.trim();
    const email = document.getElementById("visitor-email").value.trim();
    const subject = document.getElementById("visitor-subject").value.trim();
    const message = document.getElementById("visitor-message").value.trim();

    if (!name || !email || !subject || !message) {
        feedback.textContent = "Please complete all fields before continuing.";
        feedback.style.color = "#b91c1c";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "#b91c1c";
        return;
    }

    feedback.textContent =
        "Form validated successfully! This is a demonstration; your message has not been sent.";
    feedback.style.color = "#6b21a8";

    contactForm.reset();
});
