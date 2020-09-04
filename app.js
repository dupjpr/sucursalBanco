function users(){
    return [
        { saldo: 5000, accountNumber: 12345678, nombre: "Juan", id: 1018407125, password: 2504 },
        { saldo: 10000, accountNumber: 12345676, nombre: "Camilo", id: 44445555, password: 1234 },
        { saldo: 0, accountNumber: 12345679, nombre: "Estefanía", id: 1018443125, password: 2003 }
    ]
}

// front del programa

function inicio(){
    console.log("Bienvenido al Banco PCB");
    return prompt("clave");
}

const pass = inicio();

function password(pass){
    const num = users().some( user => {return user.password == pass;} )
    // console.log(num);
    return num ? pass : password(prompt("nuevamente"));
}

let id = password(pass);

function cliente(id){
    let clien = users().find( clt => clt.password == id);
    return clien;    
}

let cltLog = cliente(id);

function userAccount(cltLog){
    console.log(`Bienvenido ${cltLog.nombre}`);
    console.log(`Tu número de cuenta es: ${cltLog.accountNumber}`)
    console.log(`Su saldo es: ${cltLog.saldo}`)
}

userAccount(cltLog);

// Operaciones

let saldo = cltLog.saldo;


function retiro(retiro){
    return saldo -= retiro;
}

let saldo1 = retiro(100);

function consignacion(monto){
    return saldo += monto;
}

let saldo2 = consignacion(0);











