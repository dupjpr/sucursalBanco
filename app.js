// function users(){
//     return [
//         { saldo: 5000, accountNumber: 12345678, nombre: "Juan", id: 1018407125, password: 2504 },
//         { saldo: 10000, accountNumber: 12345676, nombre: "Camilo", id: 44445555, password: 1234 },
//         { saldo: 0, accountNumber: 12345679, nombre: "Estefanía", id: 1018443125, password: 2003 }
//     ]
// }


// front del programa

// function inicio(){
//     console.log("Bienvenido al Banco PCB");
//     return prompt("clave");
    
// }

// const pass = inicio();

// function password(pass){
//     const num = users().some( user => {return user.password == pass;} )
//     return num ? pass : password(prompt("nuevamente"));
// }

// let id = password(pass);

// function cliente(id){
//     let clien = users().find( clt => clt.password == id);
//     return clien;    
// }

// let cltLog = cliente(id);
// let saldo = cltLog.saldo;

// function userAccount(cltLog){
//     console.log(`Bienvenido ${cltLog.nombre}`);
//     console.log(`Tu número de cuenta es: ${cltLog.accountNumber}`)
//     console.log(`Su saldo actual es: ${saldo}`)
//     console.log(`¿Qué operación quiere hacer?\nOpción 1 Retiros marque 1.\nOpción 2 Consignaciones marque cualquier tecla.  `)
//     prompt("Opción:") == 1 ? retiro(prompt("Escriba monto a retirar:")) : consignacion(prompt("Escriba monto a consignar:"));
//     console.log("_______________")
// }

// userAccount(cltLog);
// // Operaciones



// function retiro(retiro){
//     return saldo -= parseInt(retiro);
// }

// function consignacion(monto){
//     return saldo += parseInt(monto);
// }

// function final(){
//     console.log(`${cltLog.nombre} su nuevo saldo es ${saldo}`);
//     console.log("Marque 1 si desea hacer otra operación.")
//     console.log("_______________")
//     if(prompt("opción") == 1){
//         userAccount(cltLog)
//     }
//     final();
// }


// final();



// const pantalla = document.querySelector('.screean');
// pantalla.classList.add('nueva', 'segunda');
// pantalla.classList.remove('screean');


// console.log(pantalla.classList);
// console.log(pantalla.children[1].innerHTML);


// variables

function users(){
    return [
        { saldo: 5000, accountNumber: 12345678, nombre: "Juan", id: 1018407125, password: 2504 },
        { saldo: 10000, accountNumber: 12345676, nombre: "Camilo", id: 44445555, password: 1234 },
        { saldo: 0, accountNumber: 12345679, nombre: "Estefanía", id: 1018443125, password: 2003 }
    ]
}

let base = users();

const pass = document.querySelector('#pass');
const msn = document.querySelector('.msnPass');
const btn = document.querySelector('#btn');
const dateHTML = document.querySelector('#date');

// password listener

btn.addEventListener('click', registro);

// ingreso y validación de usuario

function registro(){
    const password = parseInt(pass.value);
    base.some( user => {return user.password === password}) ? inside() : msnError(); 
}

function msnError(){
    const msnE = "Clave incorrecta intente nuevamente!";
    msnPassHTML(msnE);
}

function msnPassHTML(mensaje){
    msn.textContent = mensaje;
    setTimeout(() => {
        msn.textContent = '';
    }, 3000);
}


// agrega fecha

fecha()

function fecha(){
    const date = new Date().toLocaleString();
    dateHTML.textContent = date;
}

// ingresa a la sucursal

function inside(){
    location.href = "inside.html"
    
}

