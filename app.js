inicio();


function inicio(){
    console.log("Welcome to the cash machine");
    password(prompt("clave"));
}




function users(){
    return [
        { saldo: 5000, accountNumber: 12345678, nombre: "Juan", id: 1018407125, password: 2504 },
        { saldo: 10000, accountNumber: 12345676, nombre: "Camilo", id: 44445555, password: 1234 },
        { saldo: 0, accountNumber: 12345679, nombre: "Estefanía", id: 1018443125, password: 2003 }
    ]
}

function userInformation(pass){
    let userInfo;
    users().forEach((user) =>{ user.password == pass ? userInfo = user : null; })
    return userInfo;
}

function password(pass){
    const num = users().some( user => {return user.password == pass;} )
    num ? infoFormat(userInformation(pass)) : password(prompt("nuevamente"));
}

function infoFormat(userInfo) {

    console.log(`Welcome to the bank GMLO ${userInfo.nombre}`);
    console.log(`Your banck account is: ${userInfo.accountNumber}`);
    console.log(`------------------`);
    console.log(`Tu saldo actual es: ${userInfo.saldo}`);  
    console.log(`Si quiere retirar marque 1\nSi desea consignar marque 2 \nSi desea transferir marque 3`);  
    

}





