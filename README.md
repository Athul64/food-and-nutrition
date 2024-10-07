# Food and Nutrition Data Management API

This project is a RESTful API developed using Express.js, MongoDB, HTML, CSS, and JavaScript to manage food and nutrition data. The API allows users to perform CRUD operations (Create, Read, Update, Delete) on food items, making managing detailed nutritional information and related attributes easy.

##  Features:

- **Comprehensive Data Model**:
  - Food Item Name, Food Group, Description
  - Nutritional Information (Calories, Macronutrients, Micronutrients, etc.)
  - Serving Size, Allergens, Ingredients, and more.
- **CRUD Operations**:
  - Add, update, view, and delete food items.
  - Retrieve specific food items by ID.
# Technologies Used:
- **Backend**: Express.js with MongoDB for data storage.
- **Frontend**: HTML, CSS, and JavaScript.
- **Testing**: Postman for API testing.
#  API Endpoints:


 *Add a new food item*
```bash
POST /api/foods
```
  *Retrieve all food items*
``` bash
 GET /
```
 *Retrieve a specific food item by ID*
```bash
GET /api/foods/:id
```
 *Update a food item by ID*
```bash
PUT /api/foods/:id
```
 *Delete a food item by ID*
```bash
DELETE /api/foods/:id
```


# Setup Instructions:
1. *Clone the repository*.
```bash
  git clone https://github.com/yourusername/food-and-nutrition
```
2. *Install dependencies: npm install*.
```bash
npm i
```
3. *Start the server: npm start*.
```bash
npm run dev
```
4. *Open your browser* and go to http://locathost:5173 to see the application in action

5. *Configure MongoDB connection*.

6. *Use Postman to test API endpoints*.
  
# Deployed Version:
  Deployed Link: [Food and Nutrition](https://athul64.github.io/food-and-nutrition/)
