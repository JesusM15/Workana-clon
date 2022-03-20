const casillaProgra = document.getElementById("check-proga");
const listaSec = document.querySelector('.inputs-cat-cont');

casillaProgra.addEventListener('change', (e)=>{
    if (casillaProgra.checked == true){
        listaSec.style.display = "block";
    }else{
        listaSec.style.display = "none";
    }
});