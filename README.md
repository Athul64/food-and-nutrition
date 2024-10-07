# Food and Nutrition Data Management API

This project is a RESTful API developed using Express.js, MongoDB, HTML, CSS, and JavaScript to manage food and nutrition data. The API allows users to perform CRUD operations (Create, Read, Update, Delete) on food items, making managing detailed nutritional information and related attributes easy.

# Features:

- Comprehensive Data Model:
  - Food Item Name, Food Group, Description
  - Nutritional Information (Calories, Macronutrients, Micronutrients, etc.)
  - Serving Size, Allergens, Ingredients, and more.
- CRUD Operations:
  - Add, update, view, and delete food items.
  - Retrieve specific food items by ID.
- Technologies Used:
- **Backend**: Express.js with MongoDB for data storage.
- **Frontend**: HTML, CSS, and JavaScript.
- **Testing**: Postman for API testing.
# API Endpoints:
 - Add a new food item
``` HTTP
   POST /api/foods
```
 - Retrieve all food items
 ```HTTP
   GET /
```
- Retrieve a specific food item by ID
```HTTP
   GET /api/foods/:id
```
- Update a food item by ID
```HTTP
    PUT /api/foods/:id
```
- Delete a food item by ID
```HTTP
    DELETE /api/foods/:id
```


# Setup Instructions:
- Clone the repository.
- Install dependencies: npm install.
- Configure MongoDB connection.
- Start the server: npm start.
- Use Postman to test API endpoints.
  
# Deployed Version:
  Deployed Link: [Food and Nutrition](https://athul64.github.io/food-and-nutrition/)
