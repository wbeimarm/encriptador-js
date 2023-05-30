var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");

var muneco = document.querySelector(".contenedor-muneco");
var munecoEn = document.querySelector(".contenedor-muneco-en");
var copiar = document.querySelector(".contenedor-copiar");
var h3 = document.querySelector(".ajustes-h3");
var divh3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var contentResultado = document.querySelector(".contenedor-resultado");

function encriptar(){
    ocultarTodo()
    var area = recuperarTexto();
    resultado.innerHTML = encriptarTexto(area);
}

function desencriptar(){
    desocultarTodo();
    var area = recuperarTexto();
    h3.innerHTML = desencriptarTexto(area);

}

//El texto del .area lo recuperamos para luego encriptar o desencriptar
function recuperarTexto(){
    var area = document.querySelector(".area");
    
    return area.value;
}

//Ocultar imagen, h3 y parrafo al momento de encriptar o desencriptar algún texto

function ocultarTodo(){
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");

    munecoEn.classList.remove("ocultar");
    copiar.classList.remove("ocultar");
    contentResultado.classList.remove("ocultar");


}

function desocultarTodo(){
    muneco.classList.remove("ocultar");
    h3.classList.remove("ocultar");
    parrafo.classList.remove("ocultar");

    munecoEn.classList.add("ocultar");
    copiar.classList.add("ocultar");
    contentResultado.classList.add("ocultar");
}

//Copiar texto y salida de alerta al momento de copiarlo

function copyToClickBoard(){
    var content = document.getElementById('textoResultado').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
            swal("Muy bien!", "El texto ha sido copiado!", "success");
    })
        .catch(error => {
            swal("Opps!", "El texto no ha sido copiado!", "error");
    })
 
}


//Encriptar Texto reemplazando las vocales

function encriptarTexto(mensaje){

    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){

        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

//Desencriptar Texto

function desencriptarTexto(mensaje){
        mensaje.replace("enter","e")
        mensaje.replace("imes","i")
        mensaje.replace("ai","a")
        mensaje.replace("ober","o")
        mensaje.replace("ufat","u")
    return mensaje;
}
//Botones que al hacer click hacen función de encriptar y desencriptar

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
