# Storefront-CLI-App  📦
Takes in orders from customers and depletes stock from the store's inventory with the help of MySql and Inquirer

Displays Bamazon items from the bamazon database with the help of Mysql, then with the use of inquirer prompts the user to choose the item they would like to buy.  Finally, if the app checks if enough stock is available to process the order by referencing the stock quantity for the item selected in the database with the use of Mysql.

 If enough stock is available, the stock quantity in database is depleted and the order total is displayed. 
![](bamazonCustomer_processOrder.gif)

If there is not enough stock available, the customer is prompted that their order is not processed.
![](bamazonCustomer_quanityCheck.gif)
