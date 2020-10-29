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
        { saldo: 5000, accountNumber: 12345678, nombre: "Juan", sex: 'M', password: 2504 },
        { saldo: 10000, accountNumber: 12345676, nombre: "Camilo", sex: 'M', password: 1234 },
        { saldo: 0, accountNumber: 12345679, nombre: "Estefanía", sex: 'F', password: 2003 }
    ]
}

let base = users();

const main = document.querySelector('main');
const landing = document.querySelector('.landing');
const pass = document.querySelector('#pass');
const msn = document.querySelector('.msnPass');
const btn = document.querySelector('#btn');
const dateHTML = document.querySelector('#date');


// password listener

btn.addEventListener('click', registro);

// ingreso y validación de usuario


function registro(){
    const password = parseInt(pass.value);
    const objeUser = base.findIndex(usuario => usuario.password === password);
    const usuario = base[objeUser];
    base.some( usuario => {return usuario.password === password}) ? inside(usuario) : msnError(); 
} 

function msnError(){
    pass.value = '';
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

function inside(userObj){
    landing.remove();
    createHTML(userObj);
}

function createHTML(usuario){
    const sec = document.createElement('section');
    const divInfo = document.createElement('div');
    const divTran = document.createElement('div');
    sec.setAttribute('class', 'home');
    divInfo.setAttribute('class', 'info');
    divTran.setAttribute('class', 'tran');
    main.appendChild(sec);
    sec.appendChild(divInfo);
    sec.appendChild(divTran);
    setDivInfo(usuario);
    setDivTran();
}


// se configura la sección de información

function setDivInfo (usuario){
    const divInfo = document.querySelector('.info');
    const contenedor = document.createElement('div');
    contenedor.setAttribute('class','contInfo');
    divInfo.appendChild(contenedor);

    const {nombre, accountNumber, saldo, sex} = usuario;
    createTitulo(nombre, sex);
    muestraNumCuenta(accountNumber);
    muestraSaldo(saldo);  
}

function createTitulo(nombre, sex) {
    const contenedor = document.querySelector('.contInfo');
    const titulo = document.createElement('h1');

    sex === 'M' ?  titulo.textContent = `Bienvenido ${nombre}`:  titulo.textContent = `Bienvenida ${nombre}`;
    
    contenedor.appendChild(titulo);
}

function muestraNumCuenta(accountNumber){
    const contenedor = document.querySelector('.contInfo');
    const cuenta = document.createElement('div');
    cuenta.textContent = `Número de cuenta: ${accountNumber}` ;   
    contenedor.appendChild(cuenta);
}

function muestraSaldo(saldoc){
    const divInfo = document.querySelector('.info');
    const saldo = document.createElement('div');
    saldo.setAttribute('id', 'saldo');
    saldo.textContent = `Tu saldo es: $${saldoc}` ;   
    divInfo.appendChild(saldo);
}


// se configura la sección de operaciones

function setDivTran(){
    const divTran = document.querySelector('.tran');
    const nav = document.createElement('nav');
    const opt1 = document.createElement('button');
    const opt2 = document.createElement('button');
    const contG = document.createElement('div');
    nav.setAttribute('class','navTran');
    opt1.setAttribute('class','opt1');
    opt2.setAttribute('class','opt2');
    contG.setAttribute('class','contG');
    divTran.appendChild(nav);
    divTran.appendChild(contG);
    nav.appendChild(opt1);
    nav.appendChild(opt2);
    document.querySelector('.opt1').textContent = 'Consignaciones';
    document.querySelector('.opt2').textContent = 'Retiros';  

    opcion();
    // opcion2();
}


function opcion(){
    const nav = document.querySelector('.navTran');
    nav.addEventListener('click', selec);
}

function selec (e) {

    if(e.target.classList.contains('opt1')){
        const obj = {titulo: 'Consignación', mensaje: 'Digite el valor a consignar:'};
        agregaEspacio(obj);
    } else if(e.target.classList.contains('opt2')){
        const obj = {titulo: 'Retiro', mensaje: 'Digite el valor a retirar:'};
        agregaEspacio(obj);
    } 
}

function agregaEspacio(obj){
    const contG = document.querySelector('.contG');
    limpiarHTML(contG);
    const contenedor = document.createElement('div');
    contenedor.setAttribute('class', 'transac');
    contG.appendChild(contenedor);
    setTransaccion(obj);
}

function setTransaccion(obj){
    const {titulo, mensaje} = obj;
    const contenedor = document.querySelector('.transac');
    const tituloT = document.createElement('h2');
    tituloT.textContent = titulo;
    contenedor.appendChild(tituloT);
    const conteDatos = document.createElement('div');
        conteDatos.setAttribute('id', 'contD'); 
        contenedor.appendChild(conteDatos);
    const inerCon = document.querySelector('#contD');
    const divTex = document.createElement('div');
        inerCon.textContent = mensaje;
        contenedor.appendChild(divTex);
    const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('id', 'valor');
        inerCon.appendChild(input);
    const inputS = document.createElement('input');
        inputS.setAttribute('type', 'submit');
        inputS.setAttribute('id', 'enviar');
        contenedor.appendChild(inputS);
}

function limpiarHTML(contG){
    while (contG.firstChild) {
        contG.removeChild(contG.firstChild);
    }
}

