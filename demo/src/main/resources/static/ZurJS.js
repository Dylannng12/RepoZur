let img = document.querySelector(".imgsocial");

let imgmostrar = document.querySelector(".imgmostrar");
let dvimg = document.querySelector(".dvimg");
img.addEventListener("click",()=>{

    imgev();

  })

  function imgev(){

    const newImg = document.createElement("img");
    newImg.src = img.src; // Copiar la imagen
    newImg.style.width = "100%"; // Tamaño más grande

    imgmostrar.style.display="block";
    imgmostrar.style.transition="1s ";
    imgmostrar.style.width="70%";
    
    dvimg.style.width="100%";

    dvimg.innerHTML="";
   
    dvimg.appendChild(newImg);

  }

  let cerrarIMG = document.querySelector(".cerrarIMG");

  cerrarIMG.addEventListener("click",()=>{

    imgmostrar.style.display="none";


  })


/*const nombre ="Francisco";
const apellido="Hernandes";
const numero="12312313";
const correo="fran@Gmail.com"
const mensaje="a"


fetch("https://localhost:8443/Zur/consultasEntrante", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nombre: "Candela",
        apeliido:"Cohen",
        numero: "12322312",
        correo: "Candela@Gmail.com",
        mensaje: "Hola, quiero hacer una consulta."
    }),
     mode: "cors"
})
.then(response => response.json())  // Convertir la respuesta a JSON
.catch(error => console.error("Error:", error));*/
