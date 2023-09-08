function sendForm() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const program = document.getElementById("program").value;
 
    // Compose the email message
    const message = `
       Full Name: ${fullName}
       Email: ${email}
       Phone Number: ${phoneNumber}
       Program of Interest: ${program}
    `;
 
    // Define the email parameters
    const emailParams = {
       name: fullName,
       email: "recipient@example.com", // Replace with your email address
       message: program,
    };
 
    // Send the email using Email.js
    emailjs.send("service_9aqpmxs", "template_hy8npe6", emailParams)
       .then(function(response) {
          alert("Form submitted successfully. Thank you!");
          document.getElementById("admissionForm").reset(); // Clear the form
       }, function(error) {
          console.error("Form submission failed:", error);
          alert("Form submission failed. Please try again.");
       });
 
    return false; // Prevent the default form submission
 }
 