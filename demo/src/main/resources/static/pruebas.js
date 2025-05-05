/*let dvimg = document.querySelectorAll(".img");
let dvimgver = document.querySelector(".dvimgver");

dvimg.forEach((img) => {

   console.log("Entro al forEach")

    img.addEventListener("click", () => {

                
        console.log("completo");


        const newImg = document.createElement("img");
        newImg.src = img.src; // Copiar la imagen
        newImg.style.width = "auto"; // Tamaño más grande
        newImg.style.maxHeight="450px";
    
        dvimgver.innerHTML="";
    
        dvimgver.appendChild(newImg);

    })


})*/
agIMG("deportivasssss");
function agIMG(idIMG){

    if(idIMG.localeCompare("deportivas")==0 ){

     return console.log("coincidde");


    }else{

     return console.log("no coincide");


    }
}
/*         <div class="itemimg"><img  class="imgitem" src="img/ANGEL.jpg" alt=""></div>
     <div class="itemimg"><img  class="imgitem"  src="img/POSTER DE RICK AND MORTY.jpg" alt=""></div>
<div class="itemimg"><img   class="imgitem" src="img/foto de portada de charly.jpg" alt=""></div>
       <div class="itemimg"><img  class="imgitem"  src="img/GARDEL FOTO DE GABI.png" alt=""></div>
        <div class="itemimg"><img   class="imgitem"  src="img/pexels-enginakyurt-1706775.jpg" alt=""></div>*/ 