// variables

function users(){
    return [
        { saldo: 5000, accountNumber: 12345678, nombre: "Juan", sex: 'M', password: 2523 },
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
let usuario;


function registro(){
    const password = parseInt(pass.value);
    const objeUser = base.findIndex(usuario => usuario.password === password);
    usuario = base[objeUser];
    base.some( usuario => {return usuario.password === password}) ? inside(usuario) : msnError(); 
} 

function msnError(){
    pass.value = '';
    const msnE = "Clave incorrecta intente nuevamente";
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
    const saldoActual = formatNum(saldoc)
    saldo.textContent = `Tu saldo es: $${saldoActual}` ;   
    divInfo.appendChild(saldo);
}


// se configura la sección de operaciones


let subTotal = 0;

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

    
    subTotal = usuario.saldo;
 
    opcion();
}

function opcion(){
    const nav = document.querySelector('.navTran');
    nav.addEventListener('click', selec);
}


function selec (e) {
    
    if(e.target.classList.contains('opt1')){
        const obj = {titulo: 'Consignación', mensaje: 'Digite el valor a consignar:', value: 'Consignar'};
        agregaEspacio(obj);
        const btnValor = document.getElementById('enviar');
        btnValor.addEventListener('click', consignacion);
        return
    } else if(e.target.classList.contains('opt2')){
        const obj = {titulo: 'Retiro', mensaje: 'Digite el valor a retirar:', value: 'Retirar'};
        agregaEspacio(obj);
        const btnValor = document.getElementById('enviar');
        btnValor.addEventListener('click', retiro);
        return
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
    const {titulo, mensaje, value} = obj;
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
        inputS.setAttribute('value', value);
        contenedor.appendChild(inputS);
}

function limpiarHTML(contG){
    while (contG.firstChild) {
        contG.removeChild(contG.firstChild);
    }
}


// Calculos transacciones

function consignacion(){
    
    const monto = document.getElementById('valor').value;
    const valid = validaMonto(monto, 'abono');

    if (valid === 'ok'){
        subTotal = subTotal + parseInt(monto);
        const newSaldo = document.getElementById('saldo');
        const subTotalFormat = formatNum(subTotal)
        newSaldo.textContent = `Tu saldo es: $${subTotalFormat}`;
        document.getElementById('valor').value = '';
    }
    
}

function validaMonto(monto, tran){

    if(tran === 'abono'){

        if (monto === ''){
            const msn = 'El campo no puede estar vacio';
            mensajeHTML(msn, 'warning');
            return        
        } else if (monto <= 0){
            const msn = 'El monto debe ser mayor a cero';
            document.getElementById('valor').value = '';
            mensajeHTML(msn, 'warning');
            return
        } else {
            const msn = 'Transacción exitosa';
            mensajeHTML(msn, 'success');
            return 'ok'
        }

    } else if(tran === 'retiro'){

        if (monto === ''){
            const msn = 'El campo no puede estar vacio';
            mensajeHTML(msn, 'warning');
            return        
        } else if (monto <= 0){
            const msn = 'El monto debe ser mayor a cero';
            document.getElementById('valor').value = '';
            mensajeHTML(msn, 'warning');
            return
        } else if(monto > subTotal){
            const msn = 'Fondos insuficientes';
            document.getElementById('valor').value = '';
            mensajeHTML(msn, 'danger');
            return
        } else {
            const msn = 'Transacción exitosa';
            mensajeHTML(msn, 'success');
            return 'ok'
        }
    }

}

function mensajeHTML(msn, classN){
    const msnCont = document.createElement('div');
    const btn = document.querySelector('.transac');
    msnCont.setAttribute('class',classN);
    msnCont.textContent = msn;
    btn.after(msnCont);
    setTimeout(() => {
        document.querySelector(`.${classN}`).remove();
    }, 3000);
}

function retiro(){
    const monto = document.getElementById('valor').value;
    
    const valid = validaMonto(monto, 'retiro');

    if (valid === 'ok'){
        
        subTotal = subTotal - parseInt(monto);
        const newSaldo = document.getElementById('saldo');
        const subTotalFormat = formatNum(subTotal)
        newSaldo.textContent = `Tu saldo es: $${subTotalFormat}`;
        document.getElementById('valor').value = '';
    }
    
}

function formatNum(num){
  return new Intl.NumberFormat().format(num)
}