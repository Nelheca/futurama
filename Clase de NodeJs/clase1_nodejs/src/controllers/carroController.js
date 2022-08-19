const carro = require('../models/carro');


class CarroController {

    constructor() {

    }

    //registrar
    resgitrar(req, res) {
        carro.create(req.body, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(201).json(data);
            }
        });
    }

    //consultar
    getCarro(req, res) {
        carro.find((error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }

    //actualizar
    setCarro(req, res) {
        let { id, placa, marca, modelo, color, id_persona } = req.body;
        let obj = {
            placa, marca, modelo, color, id_persona
        };
        carro.findByIdAndUpdate(id, { $set: obj }, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }

    //eliminar
    delete(req, res) {
        let { id } = req.body;
        carro.findByIdAndRemove(id, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }
}

module.exports = CarroController;
