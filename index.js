const express = require('express');
const mongoose = require('mongoose');
const FoodItem = require('./models/FoodItems');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


// MongoDB connection
mongoose.connect('mongodb://localhost:27017/food-nutrition', {

});

// CRUD Routes
app.post('/api/food-items', async (req, res) => {
  try {
    const foodItem = new FoodItem(req.body);
    await foodItem.save();
    res.status(201).send(foodItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/food-items', async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.status(200).send(foodItems);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/api/food-items/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findById(req.params.id);
    if (!foodItem) return res.status(404).send();
    res.status(200).send(foodItem);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/api/food-items/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!foodItem) return res.status(404).send();
    res.status(200).send(foodItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete('/api/food-items/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findByIdAndDelete(req.params.id);
    if (!foodItem) return res.status(404).send();
    res.status(200).send(foodItem);
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
