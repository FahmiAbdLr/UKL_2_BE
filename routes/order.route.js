const express = require (`express`);
const app = express();
const orderListController = require (`../controllers/order.controller`)
const auth = require (`../auth/auth`);

app.use(express.json());

app.post('/', orderListController.createOrder)
app.get('/', auth.authVerify, orderListController.getAllOrder)

module.exports = app;