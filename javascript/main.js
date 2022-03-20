const btnMenu1 = document.querySelector('.btn-menu1');
const firstMenu = document.querySelector('.first-menu');

btnMenu1.addEventListener('click', (e)=>{
    e.preventDefault();
    firstMenu.classList.toggle("show");
});

// Desplegar mas informacion

const btnVerMas = document.querySelector('#btn-vermas');
const infoExtra = document.querySelector('.container-more-categories');
const btnLi = document.querySelector('.btn-li');
const btnRetraer = document.querySelector('#btn-retraer');
const btnHide = document.querySelector(".btn-hide");
const containerCat = document.querySelector(".categories-container");

btnVerMas.addEventListener('click', (err)=>{
    err.preventDefault();
    containerCat.style.height = "200px";
    infoExtra.classList.add("desplegar");
    btnLi.classList.add('hide');
    btnVerMas.classList.add('hide');
    btnHide.classList.remove('hide');
    btnRetraer.classList.remove('hide');
});

btnRetraer.addEventListener('click', (error)=>{
    error.preventDefault();
    containerCat.style.height = "130px";
    infoExtra.classList.remove('desplegar');
    btnHide.classList.add('hide');
    btnRetraer.classList.add('hide');
    btnLi.classList.remove('hide');
    btnVerMas.classList.remove('hide');
});