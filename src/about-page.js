function aboutPage() {
    const content = document.querySelector('#content');

    const banner = document.createElement('div');
    const title = document.createElement('h3');
    const subheading = document.createElement('h5');
    const text = document.createElement('p');

    banner.classList.add('about-banner');

    title.textContent = 'About Sizzle & Surf';
    subheading.textContent = 'Our Philosophy';
    text.innerText = `At Sizzle & Surf, we believe that every meal should be an experience. Our philosophy revolves around three pillars:

    1. Quality Ingredients: We source the finest grass-fed beef and sustainable seafood. Our commitment to quality ensures that every bite is memorable.

    2. Craftsmanship: Our skilled chefs treat steak as an art form. From dry-aging techniques to precise grilling, we elevate each dish to perfection.

    3. Ambiance: Sizzle & Surf boasts an elegant, yet cozy ambiance. Dark wood accents, dimmed lighting and plush leather booths create an inviting space. Whether it’s a romantic dinner or a celebratory gathering, our restaurant sets the stage for memorable moments.
    `

    content.appendChild(banner);
    banner.appendChild(title);
    banner.appendChild(subheading);
    banner.appendChild(text);
}

export { aboutPage };