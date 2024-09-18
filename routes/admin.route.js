const express = require (`express`);
const app = express();
const adminController = require (`../controllers/admin.controller`);
const auth = require (`../auth/auth`);

app.use(express.json());

app.post('/', adminController.registerAdmin);
app.post('/login', adminController.loginAdmin);

// Admin
app.get('/', auth.authVerify, adminController.getAllAdmin)
app.put('/:id', auth.authVerify, adminController.updateAdmin)
app.delete('/:id', auth.authVerify, adminController.deleteAdmin)

module.exports = app;