function createMenu() {
    const content = document.querySelector('#content');

    const drinks = document.createElement('div');
    drinks.id = drinks;

    const drinksHeader = document.createElement('h3');
    drinksHeader.innerHTML = 'Drinks';

    drinks.appendChild(drinksHeader);

    const drinkList = document.createElement('ul');

    function createItem(item, price) {
        const item = document.createElement('li');
        item.innerHTML = `${item}: $${price}`;
    }

    const espresso = createItem('Espresso', 5.00);
    const latte = createItem('Latte', 5.00);
    const cappuccino = createItem('Cappuccino', 10.00);
    const hot_chocolate = createItem('Hot Chocolate', 5.00);
    const lemon_tea = createItem('Lemon Tea', 5.00);
    const green_tea = createItem('Green Tea', 10.00);

    drinkList.appendChild(espresso);
    drinkList.appendChild(latte);
    drinkList.appendChild(lemon_tea);
    drinkList.appendChild(hot_chocolate);
    drinkList.appendChild(cappuccino);
    drinkList.appendChild(green_tea);

    drinks.append(drinkList);

    const desserts = document.createElement('div');
    desserts.id = 'desserts';

    const dessertsHeader = document.createElement('h3');
    dessertsHeader.innerHTML = 'Desserts';

    desserts.appendChild(dessertsHeader);

    const dessertsList = document.createElement('ul');

    const brownies = createItem('Brownies', 5.00);
    const cinnamon_roll = createItem('Cinnamon Roll', 5.00);
    const croissant = createItem('Croissant', 5.00);
    const lemon_pie = createItem('Lemon Pie', 5.00);
    const blueberry_muffin = createItem('Blueberry Muffin', 10.00);
    const chocolate_muffin = createItem('Chocolate Muffin', 10.00);

    dessertsList.appendChild(brownies);
    dessertsList.appendChild(cinnamon_roll);
    dessertsList.appendChild(croissant);
    dessertsList.appendChild(lemon_pie);
    dessertsList.appendChild(blueberry_muffin);
    dessertsList.appendChild(chocolate_muffin);

    desserts.appendChild(dessertsList);

    content.appendChild(drinks);
    content.appendChild(desserts);

};

export default createMenu;