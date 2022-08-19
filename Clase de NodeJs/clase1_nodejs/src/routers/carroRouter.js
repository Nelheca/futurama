const express = require('express');
const CarroController = require('../controllers/carroController');

class CarroRouter {

    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {
        const objCarroC = new CarroController();
        this.router.post("/carro", objCarroC.resgitrar);
        this.router.get("/carro", objCarroC.getCarro);
        this.router.put("/carro", objCarroC.setCarro);
        this.router.delete("/carro", objCarroC.delete);
    }

}

module.exports = CarroRouter;
