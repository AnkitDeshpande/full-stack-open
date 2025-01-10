const fs = require('fs');
const { faker } = require('@faker-js/faker');

// Number of products to generate
const numberOfProducts = 10;

// Generate mock data for products
const generateProducts = (num) => {
    const products = [];
    for (let i = 0; i < num; i++) {
        const product = {
            id: i + 1,
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.commerce.price(),
            category: faker.commerce.department(),
            image: faker.image.url(),
            stock: faker.number.int({ min: 1, max: 100 })
        };
        products.push(product);
    }
    return products;
};

// Read the existing db.json data
fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading db.json file:', err);
        return;
    }

    const db = JSON.parse(data);

    // Generate new product data
    const newProducts = generateProducts(numberOfProducts);

    // Add new products to the products array in db.json
    db.products = [...db.products, ...newProducts];

    // Write the updated data back to db.json
    fs.writeFile('db.json', JSON.stringify(db, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Error writing to db.json file:', err);
        } else {
            console.log('Data pushed to db.json successfully!');
        }
    });
});
