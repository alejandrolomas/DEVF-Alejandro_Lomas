//* EN NUESTRO MAIN.JS 
//* VAMOS A MANIPULAR NUESTROS ELEMENTOS HTML UTILIZANDO JAVASCRIPT (DOM)


//*function entrar(){

var cuentas = [
    {usuario: 'Alejandro Lomas', mail: 'alejandro@lomas.mx', password: '1234', saldo: '$15,895 Pesos'}
    {usuario: 'David Maya', mail: 'david@devf.com', password: '1234', saldo: '$25,895,220 Pesos'}
]

const login = document.getElementById('entrar'); 

 function validar (mail, password){
    for (let i = 0; i <= cuentas.length; i++){

        if (mail === cuentas[i].mail && password === cuentas[i].password){
            console.log('Bienvenido ', cuentas[i].mail)
            alert('Bienvenido' + cuentas[i].mail)
        }
        else if (mail != cuentas[i].mail){
            alert('Usuario Inválido')
        }
        else if (password != cuentas[i].password){
            alert('Password Inválido')
        }
        else {
            alert('Por favor contacte ayuda en alguna sucursal')
        }
    }
}
login.addEventListener('click',(evento) => {
    evento.preventDefault()
    let mail = document.getElementById('mail').value 
    let password = document.getElementById('password').value
    validar(mail, password)
})
  


   //* if(document.querySelector("#entrar").onclick){
   //*     window.location.href = "index.html";
   //*     background.style.background = "#000000"
   //*     title.style.color = "white"
   //* }
//*}


function saldo(){
    if(document.querySelector("#saldo").checked){
        window.location.href = "saldo.html";
        background.style.background = "#FFFFFF";
        title.style.color = "white"
    }
}

function deposito(){
    if(document.querySelector("#deposito").checked){
        window.location.href = "deposito.html";
        background.style.background = "#FFFFFF"
        title.style.color = "white"
    }
}

function retiro(){
    if(document.querySelector("#retiro").checked){
        window.location.href = "retirar.html";
        background.style.background = "#E8E8E8"
        title.style.color = "white"
        
    }
}

function regresar(){
    if(document.querySelector("#regresar").checked){
        window.location.href = "index.html";
        background.style.background = "#000000"
        title.style.color = "white"
    }
}

function salir(){
    if(document.querySelector("#salir").checked){
        window.location.href = "login.html";
        background.style.background = "#000000"
        title.style.color = "white"
    }
}

//* BOTONES
// CREAR UN DELAY COMO ESTILO

function quinientos(){
    setTimeout(function(){
        alert("Seleccionaste $500 Pesos");
        background.style.background = "#FFFFFF"
        title.style.color = "black"
    },50)
}

function mil(){
    setTimeout(function(){
        alert("Seleccionaste $1,000 Pesos");
        background.style.background = "#D0EAFF"
        title.style.color = "black"
    },50)
}

function dosmil(){
    setTimeout(function(){
        alert("Seleccionaste $2,000 Pesos");
        background.style.background = "#C0E2FF"
        title.style.color = "black"
    },50)
}

function tresmil(){
    setTimeout(function(){
        alert("Seleccionaste $3,000 Pesos");
        background.style.background = "#B6DEFF"
        title.style.color = "black"
    },50)
}

function cincomil(){
    setTimeout(function(){
        alert("Seleccionaste $5,000 Pesos");
        background.style.background = "#9CD1FD"
        title.style.color = "black"
    },50)
}

function otra(){
    let otra =[];
    let userInput;
    setTimeout(function(){
      
        userInput = prompt("Escribe la cantidad correcta de dinero");
        otra.push(userInput);
       
        background.style.background = "#7FC5FF"
        title.style.color = "black"
    },50)
    console.log("La cantidad que depositaste es: " +otra);
}

//* LOGIN


//* function salir (mail){
//*    var mail = window.prompt("Introduce tu e-mail");
//*    if(mail == ""){
//*        console.log("Bienvenido " mail);
//*    }else if (edad >= 18){
//*        console.log("Eres mayor de edad");
//*    } else {
//*        console.log("Edad NO VÁLIDA");
//*    }
//* }
//*    mayorEdad();


