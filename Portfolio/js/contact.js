
    function validateContactForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name === '') {
        alert('Name cannot be empty.');
        return false;
      }
      if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address.');
        return false;
      }
      if (message.length < 20) {
        alert('Message must be at least 20 characters long.');
        return false;
      }

      return true;
    }

    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      if (validateContactForm()) {
        alert('Form submitted successfully!');
        this.reset();
      }
    });
