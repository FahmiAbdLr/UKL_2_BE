const express = require (`express`);
const app = express();
const foodController = require(`../controllers/food.controller`)
const auth = require (`../auth/auth`);

app.use(express.json());

// Admin
app.post('/', auth.authVerify, foodController.addFood)
app.put('/:id', auth.authVerify, foodController.updateFood)
app.delete('/:id', auth.authVerify, foodController.deleteFood)

app.get('/', foodController.getAllFood)
app.get('/:search', foodController.searchFood)

module.exports = app;