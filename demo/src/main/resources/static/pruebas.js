let dvimg = document.querySelectorAll(".img");
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


})
