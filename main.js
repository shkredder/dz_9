const furniture = [
    {
        type: "desk",
        price: 27.87,
    },
    {
        type: "closet",
        price: 187.32,
    },
    {
        type: "chair",
        price: 79.29,
    },
    {
        type: "bed",
        price: 239.99,
    },
];

const devices = [
    {
        type: "desktop",
        price: [272, 769],
    },
    {
        type: "laptop",
        price: [499, 1800],
    },
    {
        type: "smartphone",
        price: [100, 800],
    },
    {
        type: "tablet",
        price: [185, 1000],
    },
    {
        type: "console",
        price: 889,
    },
];

const appliances = [
    {
        type: "oven",
        price: 780,
    },
    {
        type: "microwave",
        price: [50, 1400],
    },
    {
        type: "mixer",
        price: 215.17,
    },
];

const categories = { furniture, devices, appliances };

function Product(category, type, price) {
    this.category = category;
    this.type = type;

    if (Array.isArray(price) && price.length > 1) {
        this.price = `${price[0]} - ${price[1]}`;
    } else {
        this.price = price;
    }

    this.render = function () {
        return `<tr>
            <td><img src="./images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
            <td>${this.type}</td>
            <td><b>${this.price} USD</b></td>
        </tr>`;
    };
}

const tbody = document.querySelector("tbody");

function Category(products, category) {
    for (const index in products) {
        const { type, price } = products[index];
        const product = new Product(category, type, price);
        tbody.insertAdjacentHTML("beforeend", product.render());
    }
}

Object.keys(categories).forEach((categoryKey) => {
    new Category(categories[categoryKey], categoryKey);
});
