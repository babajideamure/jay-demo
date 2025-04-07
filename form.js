  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        successMessage.style.display = 'block';
      } else {
        alert('Oops! Something went wrong. Try again later.');
      }
    } catch (error) {
      alert('Message sent successfully.');
    }
  });
