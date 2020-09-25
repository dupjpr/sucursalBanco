const header = document.getElementById('header');

// Crea HTML del header

crearElementos()

function crearElementos(){
    const image = document.createElement('img');
    setImage(image);
    const title = document.createElement('h1');
    setTitle(title);
    const dateHTML = document.createElement('div');
    setDate(dateHTML);

};

function setImage (image){
    image.src = "/images/Logo Banco mod.jpg";
    image.alt = "logo banco";
    header.appendChild(image);
}

function setTitle(title){
    title.textContent = "Banco en línea";
    header.appendChild(title);
};

function setDate(dateHTML){
    dateHTML.textContent = "fecha";
    dateHTML.setAttribute('id', 'date');    
    header.appendChild(dateHTML);
    const dateSucursal = document.getElementById('date');
    fecha(dateSucursal);
}

function fecha (dateSucursal){
    const dateS = new Date();
    dateSucursal.textContent = dateS;
}

// console.log(dateSucursal)



