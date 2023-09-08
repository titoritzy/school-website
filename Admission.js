// Initialize EmailJS with your service ID
emailjs.init("lT5lDiZEdTktg2tjZ");

// Function to send the form data
function sendForm() {
    const form = document.getElementById("admissionForm");
    emailjs.sendForm("service_h7l3szx", "template_n3oh2xr", form)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            // You can add a success message or redirect the user to a thank you page here
        }, function(error) {
            console.error("Email send failed:", error);
            // You can add an error message or handle the error as needed
        });
}
