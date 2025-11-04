document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('contact-form');
	if (form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const name = document.getElementById('name').value.trim();
			const email = document.getElementById('email').value.trim();
			const message = document.getElementById('message').value.trim();
			if (!name || !email || !message) {
				alert('Please fill all fields.');
				return;
			}
			// Simulate success
			const success = document.getElementById('contact-success');
			if (success) {
				success.classList.remove('hidden');
				form.reset();
			}
		});
	}
});
