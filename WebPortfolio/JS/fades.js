/* about page */
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            currentSectionIndex = Array.from(entries).indexOf(entry);
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.remove('show');
            entry.target.classList.add('hidden');
        }
    });
});
sections.forEach(section => observer.observe(section));

const button = document.querySelector('.down-arrow');
let currentSectionIndex = 0;
button.addEventListener('click', () => {
    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
    sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    button.style.transform = currentSectionIndex == sections.length - 1 ? "rotate(90deg)" : "rotate(-90deg)" ;
});