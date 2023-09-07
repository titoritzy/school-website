// JavaScript code for form submission 

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    //  form validation 

    //  Sending form data to a server
     const formData = new FormData(this);
    fetch('your_server_endpoint', {
        method: 'POST',
         body: formData
     })
     .then(response => response.json())
     .then(data => {
         // Handle the response from the server
     })
     .catch(error => {
         console.error('Error:', error);
     });
});


