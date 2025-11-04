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

// Customizer interactions
document.addEventListener('click', (e) => {
	const sw = e.target.closest('.swatch');
	if (sw) {
		const color = sw.dataset.color;
		const part = sw.dataset.part;
		// naive preview: set CSS variable on preview image container
		const preview = document.getElementById('preview-img');
		if (preview && part === 'base') {
			preview.style.filter = `hue-rotate(0deg)`; // placeholder
			preview.style.background = color;
		}
		if (preview && part === 'cap') {
			// draw a small ring effect using box-shadow to suggest cap color
			preview.style.boxShadow = `0 6px 18px ${color}33`;
		}
	}
});

const randomizeBtn = document.getElementById('randomize');
if (randomizeBtn) {
	randomizeBtn.addEventListener('click', () => {
		const swatches = Array.from(document.querySelectorAll('.swatch'));
		const baseChoices = swatches.filter(s => s.dataset.part === 'base');
		const capChoices = swatches.filter(s => s.dataset.part === 'cap');
		const base = baseChoices[Math.floor(Math.random() * baseChoices.length)];
		const cap = capChoices[Math.floor(Math.random() * capChoices.length)];
		if (base) base.click();
		if (cap) cap.click();
	});
}

const purchaseCTA = document.getElementById('purchase-cta');
if (purchaseCTA) {
	purchaseCTA.addEventListener('click', () => {
		// simple behavior: scroll to top of customizer
		const target = document.querySelector('.customizer');
		if (target) target.scrollIntoView({behavior: 'smooth', block: 'center'});
	});
}
