//crear una funcion
function mostrarMensaje(){
    //variable
    const numero_1 = 10;
    var numero_2 = 5;
    let mensaje = "hola mundo";
    //impresiones en consola
    console.log(mensaje);
    if(numero_2 < numero_1){
        console.log("numero 2 es menor a numero 1");
    }else{
        console.log("numero 1 es menor a numero 2")
    }
    
    //ciclos
    for(let i =0; i < 10; i++){
        console.log(i);
    }
    //Console
    console.error("Esto es un console.error");
    console.table({"clave_1": "valor_1", "clave_2": "valor_2"});
    console.warn("esto es una advertencia");
    
    //Alerta
    //alert("Hola mundo");
    sumar(5, 10);
}

function sumar(numero1, numero2){
    let resp = numero1+numero2;
    alert(resp);
}

function eliminar(){
    alert("leiminar");
}

function cambiarPersonaje(){
     //acceder al DOM
     let alt = document.getElementById("imgFuturama").alt;
    if(alt == "imagen1"){
        document.getElementById("imgFuturama").src = "https://vignette.wikia.nocookie.net/en.futurama/images/7/74/Abner_Doubledeal.jpg/revision/latest/scale-to-width-down/350?cb=20090723100227";
        document.getElementById("imgFuturama").alt = "imagen2";
    }else{
        document.getElementById("imgFuturama").src = "https://vignette.wikia.nocookie.net/en.futurama/images/0/0d/Hermes.png/revision/latest?cb=20170719011119";
        document.getElementById("imgFuturama").alt = "imagen1";
    }
}

//conectar a la API
async function cargarPersonajes(){
    //realizar la peticion http a la api
    const peticion = await fetch("https://futuramaapi.herokuapp.com/api/v2/characters");
    //Obtener los datos en formato Json
    const data = await peticion.json();

    console.log("-----Petición-----");
    console.log(peticion);
    console.log("-------------");
    console.log("-----Data-----");
    console.log(data);
    console.log("-------------");

    //iterar los personajes
    data.forEach(element => {
        console.log(element.Name);

        let tarjeta = "<div class='card' style='width: 18rem;'>";
        tarjeta += "<img id='imgFuturama' src='"+element.PicUrl+"'";
        tarjeta += "class='card-img-top imgPersonaje' alt='imagen1'>";
        tarjeta += "<div class='card-body'>";
        tarjeta += "<h5 class='card-title'>Hermes Conrad</h5>"    
        tarjeta += "<label>Profesión: --</label><br>";
        tarjeta += "<label>Especie: --</label><br>";
        tarjeta += "<label>Planeta: --</label><br>";
        tarjeta += "<div style='text-align: center; width: 100%;'>";
        tarjeta += "<button type='button' class='btn btn-outline-danger' onclick='eliminar()'>Eliminar</button>";
        tarjeta += "<button type='button' class='btn btn-outline-primary'>Actualizar</button>";
        tarjeta += "</div></div></div>";       
        
        document.getElementById("cuerpo").innerHTML += tarjeta

    });
}
