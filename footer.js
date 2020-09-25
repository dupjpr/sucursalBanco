const footer = document.querySelector('footer');

// console.log(footer);

crearElementos();

function crearElementos(){
    const info = document.createElement('span'); 
    setSpan(info);
    const image = document.createElement('img'); 
    setImage(image);
};

function setSpan(info){
    info.textContent = "© 2020 banco en linea";
    footer.appendChild(info)
}

function setImage(image){
    image.setAttribute('class', 'logo');
    image.src = "http://drive.google.com/uc?export=view&id=1kZHxdAmlPoDnx8gXrE2WswRwOh6p3XZG";
    footer.appendChild(image);
}