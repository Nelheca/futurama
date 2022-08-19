const persona = require('../models/persona');

var users = [
    {id: 1, nombre: "Nelson", apellido: "Herrera"},
    {id: 2, nombre: "Ruben", apellido: "Conde"},
    {id: 3, nombre: "Lexly", apellido: "Sosa"},
    {id: 4, nombre: "Andres", apellido: "Quintero"}
];

class UserController{

    constructor(){

    }
    //obtener todos los usuarios
    getAllUsers(req, res){
        persona.find((error, data) =>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        })
    }
    /*
    getAllUsers(req, res){
        res.status(200).json(users);
    }
    */
    //obtener usuarios por id con momgodb
    getUserById(req, res){
        let id = req.params.id;
        persona.findById(id, (error, data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        })
    }
    /*
    getUserById(req, res){
        let id = req.params.id;
        let tempoUser = null;
        users.forEach(element => {
            if (id != element.id){
                tempoUser = element;
            }
        });

        if(tempoUser != null){
            res.status(200).json(tempoUser);
        }else{
            res.status(400).json({menssage: 'User no found'});
        }
    }
    */
    //Registrar usuarios con mongoDB
    register(req, res){
        persona.create(req.body, (error, data)=>{
            if(error){
                res.status(500).json(error);
            }else{
                res.status(201).json(data);
            }
        });

    }
    //registrar usuarios
    /*
    register(req, res){
        /*
        let {id, nombre, apellido} = req.body;
        console.table({id, nombre, apellido});
        /
        users.push(req.body);
        res.status(201).send();
    }
    */
    

    //Borrar usuarios
    deleteUser(req, res){
        let { id } = req.body;
        persona.findByIdAndRemove(id, (error, data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        })
    }
    /*
    deleteUser(req, res){
        let { id } = req.body;
        let tempoUsers = [];
        users.forEach(element => {
            if(id != element.id){
                tempoUsers.push(element);
            }
        });

        users = tempoUsers;
        res.status(200).send();
    }
    */
    //Actualizar
    update(req, res){
        let {id, nombre, apellido, email, telefono, edad} = req.body;
        let objPersona = {
            nombre,
            apellido,
            email,
            telefono,
            edad
        }
        persona.findByIdAndUpdate(id, {
            $set: objPersona
        }, (error, data)=>{
                if(error){
                    res.status(500).send();
                }else{
                    res.status(200).json(data);
                }
        });
    }

}

exports.default = UserController;
