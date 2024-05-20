function homePage() {
    const content = document.querySelector('#content');

    const banner = document.createElement('div');
    const title = document.createElement('h1');
    const headline = document.createElement('h3');

    banner.classList.add('banner');

    title.textContent = 'Sizzle & Surf';
    headline.textContent = 'Steak & Seafood';

    content.appendChild(banner);
    banner.appendChild(title);
    banner.appendChild(headline);
}

export { homePage };