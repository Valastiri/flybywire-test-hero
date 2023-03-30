const container = document.querySelector('.left-section-bg');

window.addEventListener('scroll', () => {
    const scrollWidth = window.scrollY / 15; // adjust the division factor as needed
    const maxScrollWidth = Math.min(scrollWidth, 60);
    let viewWidth = 40;
    container.style.width = `${viewWidth + maxScrollWidth}vw`;
});