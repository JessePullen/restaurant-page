function menuPage() {
    const content = document.querySelector('#content');

    const banner = document.createElement('div');
    const title = document.createElement('h3');

    banner.classList.add('menu-banner');

    title.textContent = 'Menu';

    content.appendChild(banner);
    banner.appendChild(title);

    displayMenuItems(banner);
}

function displayMenuItems(banner) {
    let menu = [
        {
            name: 'Surf n Turf',
            desc: 'Best of both worlds. Filet mignon cooked to your liking. Topped with garlic prawns'
        },
        {
            name: 'Lobster Tail',
            desc: 'Broiled lobster tail served with garlic lemon butter'
        },
        {
            name: 'Tomahawk Steak',
            desc: 'Dry-aged Tomahawk Steak. A delicious cut of prime Victorian Angus beef. Free range and grass-fed'
        },
        {
            name: 'Oven Roasted Salmon',
            desc: 'Perfectly seasoned fillet with brown sugar and spices'
        }
    ];
    
    for (let i = 0; i < menu.length; i++) {
        const menuItem = document.createElement('div');
        const menuItemPhoto = document.createElement('div');
        const menuItemName = document.createElement('h5');
        const menuItemDesc = document.createElement('p');

        menuItem.classList.add('menu-item');
        menuItem.classList.add('menu-item-' + i);
        menuItemPhoto.classList.add('menu-item-photo');

        menuItemName.textContent = menu[i].name;
        menuItemDesc.textContent = menu[i].desc;

        banner.appendChild(menuItem);
        menuItem.appendChild(menuItemPhoto);
        menuItem.appendChild(menuItemName);
        menuItem.appendChild(menuItemDesc);
    }
}

export { menuPage };