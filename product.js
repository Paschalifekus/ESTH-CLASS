//define an array to store the products
let products =[];

//Function to generate a random ID 
function generateProductId(){
    console.log(Math.floor(Math.random() * 1000) + 1);
}

//function to generate a random product name
function generateProductname(){
    let names = ['Apple', 'Banana', 'Orange','Grapes','Pineapple','Water melon','Strawberry','Mango','Peach','Kiwi'];
    return names[Math.floor(Math.random() * names.length)];
}

//Function to generate a random product price
function generateProductPrice(){
    console.log(Math.random() * 100);
}

//Function to generate a random product quantity
function generateProductQuantity(){
    console.log(Math.floor(Math.random() * 10) + 1);
}

//Create 15 objects with distinct product details
for(let i=0; i<15; i++){
    let product = {
        id: generateProductId(),
        name: generateProductname(),
        Price: generateProductPrice(),
        Quantity: generateProductQuantity()
    };
    products.push(product);
}

//iterate over all products and their details using a for loop
for(let i=0; i < products.length; i++){
    console.log('Product ID: ${products[i].id}, Name: ${products[i].name}, Price: $${product[i].price}, Quantity: ${products[i].quantity}');
}