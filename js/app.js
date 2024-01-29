let btnEncriptar = document.querySelector('.btn-encriptar');
let btnDesencriptar = document.querySelector('.btn-desencriptar');
let mensajeDesalida = document.querySelector('.mensaje-salida');
let mensajeEncriptado = document.querySelector('.mensaje-encriptado');
let cajaTemopral = document.querySelector('.temporal');
let botonCopiar = document.querySelector('.copiar');

function inicio(){

    btnEncriptar.addEventListener('click',encriptarMensaje);
    btnDesencriptar.addEventListener('click', desencriptarMensaje)
    botonCopiar.addEventListener('click',copiar);
}

function encriptarMensaje(){
    let mensaje = document.querySelector('#mensaje').value;
    minusculas = mensaje.toLowerCase();

    if(minusculas != ''){
        let textoCifrado = minusculas.replace(/i/g,'imes').replace(/e/g,'enter').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
        minusculas = textoCifrado
        
        mensajeDesalida.textContent = minusculas
        cajaTemopral.style.display = 'none'
        mensajeEncriptado.style.display = 'flex'
    }else{
        let alerta= document.querySelector('.error')
        if(!alerta){
            let mensajeError = document.createElement('P');
            mensajeError.textContent = 'El campo no debe estar vacío.';
            mensajeError.classList.add('error');
            let cajaError = document.querySelector('.principal');
    
            cajaError.appendChild(mensajeError)
            setTimeout(() => {
                mensajeError.remove()
            }, 2500);
        }
       
    }
}   


function desencriptarMensaje(){
    let mensaje = document.querySelector('#mensaje').value;
    minusculas = mensaje.toLowerCase();
    if(minusculas != ''){
        let textoCifrado = minusculas.replace(/ai/gi,'a').replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ober/gi,'o').replace(/ufat/gi,'u');
        minusculas = textoCifrado
        
        mensajeDesalida.textContent = minusculas
        cajaTemopral.style.display = 'none'
        mensajeEncriptado.style.display = 'flex'
    }else{
        let alerta= document.querySelector('.error')
        if(!alerta){
            let mensajeError = document.createElement('P');
            mensajeError.textContent = 'El campo no debe estar vacío.';
            mensajeError.classList.add('error');
            let cajaError = document.querySelector('.principal');
    
            cajaError.appendChild(mensajeError)
            setTimeout(() => {
                mensajeError.remove()
            }, 2500);
        }
       
    }
}

function copiar(){
    navigator.clipboard.writeText(mensajeDesalida.textContent)
}

inicio()