function createMenu() {
    const content = document.querySelector('#content');
    
    const title = document.createElement('h2');
    title.innerHTML = 'Menu';
    
    const menu = document.createElement('div');

    // add drinks + header to menu
    const drinksTitle = document.createElement('h3');
    drinksTitle.innerHTML = 'Drinks';
    menu.appendChild(drinksTitle);

    const drinksList = document.createElement('ul');
    drinksList.innerHTML = "";
    drinksList.innerHTML += `
    <li>Espresso: $5.00</li>
    <li>Latte: $5.00</li>
    <li>Cappuccino: $10.00</li>
    <li>Hot Chocolate: $5.00</li>
    <li>Lemon Tea: $5.00</li>
    <li>Green Tea: $10.00</li>
    `;
    menu.appendChild(drinksList);


    // add desserts + title to menu
    const dessertsTitle = document.createElement('h3');
    dessertsTitle.innerHTML = 'Desserts'
    menu.appendChild(dessertsTitle);    

    const dessertsList = document.createElement('ul');
    dessertsList.innerHTML = "";
    dessertsList.innerHTML += `
    <li>Brownies: $5.00</li>
    <li>Cinnamon Roll: $5.00</li>
    <li>Croissant: $5.00</li>
    <li>Lemon Pie: $5.00</li>
    <li>Blueberry Muffin: $10.00</li>
    <li>Chocolate Muffin: $10.00</li>
    `;
    menu.appendChild(dessertsList);

    content.appendChild(menu);

};


export default createMenu;