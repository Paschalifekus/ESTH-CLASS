*DigiShops - A simple Javascript Shopping Cart*

*Description*
  This ia a Basic shopping cart application where foodstuffs are sold built with Javascript. It allows users to browse through a list of products, add them to cart with specific quantities,and display the cart with total prices

*Features*
  1. Product list display with ID, name, and price
  2. Add items to cart with quantity selection
  3. View cart contents and total price
  4. User-friendly prompts and messages

*Requirement*
  1. Node.js and npm installed on your system
  2. Basic understanding of Javascript

*Installation*
  1. Clone this repository or download the code files.
  2. Open a terminal in the project directory.
  3. Run npm install (or yarn install) to install the required dependency (prompt-sync).

*Usage*
  1. Run the application using node ecommerce.js.
  2. The application will greet you and display the available products.
  3. You can enter the product ID (a number) to add it to the cart and specify the quantity.
  4. Type "checkout" when finished shopping to view your cart and the total price.

*Code Structure*
1. The code uses an array (ecommerceProduct) to store product information (ID, name, quantity, price).
2. Another array (cart) holds the selected items with their quantity.
3. Functions were defined for:
  - displayProducts: Lists all available products in the console.
  - addToCart: Adds a chosen product with quantity to the cart (checks for valid product ID and sufficient stock).
  - displayCart: Shows the items in the cart along with the total price .
  - startShopping: Main function that manages user interaction, displaying products, adding items, and checking out.

*License*
  This process is licensed under the MIT license

*Credits*
  1. This project was created by ESTH JS MODULE TEAM
