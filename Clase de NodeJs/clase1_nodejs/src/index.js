//importar express y guardarlo en una variable
const express = require('express');
//Importar rutas
const userRouter = require('./routers/userRouter');
const CarroRouter = require('./routers/carroRouter');
//importar mongoose
const mongoose = require('mongoose');
//importar el  modulo que contiene la BD
const database = require('./database/db');
//importar cors
const cors = require('cors')


class Server{
    //constructor
    constructor(){
        //llamar al metodo de conexion de BD
        this.conectarBD();
        
        //Crea una aplicación express
        this.app = express();
        //Configurar el puerto por el que correrá el servidor
        this.app.set('port', process.env.PORT || 3000);
        //Indicar que se manejarán solicitudes con información JSON
        this.app.use(express.json());
        this.app.use(cors());
        //Rutas
        const router = express.Router();
        router.get('/', (req, res)=>{
            console.log("Conexión exitosa..");
            res.status(200).json({message: "Conexión exitosa"});
        });
        //Agregar las rutas de users
        const userR = new userRouter.default();
        this.app.use(userR.router);

        //Agregar las rutas de carro
        const carroRouter = new CarroRouter();
        this.app.use(carroRouter.router);

        //agregar la ruta a la app express
        this.app.use(router);
        //Levantar el servidor web
        this.app.listen( this.app.get('port'), ()=>{
            console.log("Servidor corriendo por el puerto => ", this.app.get('port'));
        } );
    }

    conectarBD(){
        mongoose.connect(database.db).then(()=>{
            console.log("Conexion exitosa a la BD")
        }).catch(error=>{
            console.log("error");
        })
    }
}

const objServer = new Server();
