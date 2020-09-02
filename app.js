inicio();

function inicio(){
    
    console.log("Welcome to the cash machine");
   
    password(prompt("clave"));


}

function users(){
    return [
        { nombre: "Juan", id: 1018407125, password: 2504 },
        { nombre: "Camilo", id: 44445555, password: 1234 },
        { nombre: "Estefanía", id: 1018443125, password: 2003 }
    ]
}

function password(pass){
    
    const num = users().some( user =>{
        return user.password == pass;
    })

    num ? console.log("next") :  password(prompt("nuevamente"));
  }
