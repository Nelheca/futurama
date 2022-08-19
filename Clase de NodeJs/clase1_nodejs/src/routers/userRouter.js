const express = require('express');
const userController = require('../controllers/userController');

class UserRouter {

    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {
        const userC = new userController.default();
        this.router.get('/users', userC.getAllUsers);
        this.router.get('/users/:id', userC.getUserById);
        this.router.post('/users', userC.register);
        this.router.delete('/users', userC.deleteUser);
        this.router.put('/users', userC.update);
    }
}
exports.default = UserRouter;

