const form = document.getElementById('form');
const idpelicula = document.getElementById('idpelicula');
const nombrepelicula = document.getElementById('nombrepelicula');
const director = document.getElementById('director');
const reparto = document.getElementById('reparto');

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const idpeliculaValue = idpelicula.value.trim();
    const nombrepeliculavalue = nombrepelicula.value.trim();
    const directorvalue = director.value.trim();
    const repartovalue = reparto.value.trim();

    if(idpelicula ===''){
        setErrorfor(idpelicula,'No se encontro el id indicado.');
    }else{
        setsuccessfor(idpelicula);
    }
}
function setErrorfor(input,message){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.className='form-control error';
    small.innerText = message;
}

function setsuccessfor(input){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';

}
function isidpelicula(idpelicula){
    return /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/.test(email);
}
