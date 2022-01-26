
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


const texto = document.getElementById("input-texto");

texto.addEventListener("input", function(){

    event.preventDefault();
    texto.value = texto.value.toLowerCase();
});


function encriptar(){

    var textoMinusculas = texto.value;
    
    for(j = 0; j < textoMinusculas.length; j++){

        if(( textoMinusculas.charCodeAt(j) >= 97 ) && ( textoMinusculas.charCodeAt(j) <= 122 )){

            var textoEncriptado = textoMinusculas.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
            document.getElementById("msg").value = textoEncriptado;
            document.getElementById("input-texto").value = "";
            break;
        }else{
            alert("El mensaje tiene algún caracter especial. Por favor, verificar.");
            document.getElementById("input-texto").value = "";
            break;

        }
    } 
}

function desencriptar(){

    const encriptarTexto = document.getElementById("input-texto").value;

    const textoDesencriptado = encriptarTexto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("msg").value = textoDesencriptado;
    document.getElementById("input-texto").value = " ";
}

function botonCopiar(){
    const copiar = document.getElementById("msg").value;
    navigator.clipboard.writeText(copiar);
    alert ("Texto copiado!");
    document.getElementById("msg").value = " ";
}

function botonLimpiar(){

    document.getElementById("msg").value = " ";
}

