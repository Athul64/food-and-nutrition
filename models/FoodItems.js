const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  foodGroup: { type: String, required: true },
  description: { type: String },
  nutritionalInfo: {
    calories: { type: Number },
    macronutrients: {
      protein: { type: Number },
      fat: { type: Number },
      carbs: { type: Number },
    },
    micronutrients: {
      vitamins: { type: Map, of: Number },
      minerals: { type: Map, of: Number },
    },
    fiber: { type: Number },
    sodium: { type: Number },
    cholesterol: { type: Number },
  },
  servingSize: { type: String },
  allergens: [String],
  ingredients: [String],
  preparationMethods: [String],
  certifications: [String],
  countryOfOrigin: { type: String },
  brandOrManufacturer: { type: String },
  dietaryRestrictions: [String],
  healthBenefits: [String],
  bestPractices: [String],
});

module.exports = mongoose.model('FoodItem', foodItemSchema);
