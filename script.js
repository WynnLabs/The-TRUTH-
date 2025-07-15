function toggleSection(id) {
    const content = document.querySelector(`#${id} .content`);
    content.classList.toggle('hidden');
}

window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('backToTop');
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
