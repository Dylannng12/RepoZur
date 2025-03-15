let img = document.querySelector(".imgsocial");

let itemimg = document.querySelectorAll(".imgitem");
 

itemimg.forEach((item)=>{


   item.addEventListener("click",()=>{

    const newImg = document.createElement("img");
      dvimg.style.width="100%"
    newImg.src= item.src; 
    newImg.style.width = "100%"; // Tamaño más grande
    newImg.style.maxHeight="550px";
    dvenrm.style.display="block";   

    
    dvimg.innerHTML="";
   
    dvimg.appendChild(newImg);

   })

})



let imgmostrar = document.querySelector(".imgmostrar");
let dvimg = document.querySelector(".dvimg");
img.addEventListener("click",()=>{


  window.location.href="ZurInicio-1.html#imgmost";

    imgev();

  })

const dvenrm = document.querySelector(".dvenrm");

  function imgev(){
    
    let heig =window.innerHeight ;
     
    let  resultt= heig - (heig * 0.8);

    const newImg = document.createElement("img");

    
    if(window.innerWidth>=1100){
      newImg.src = img.src; // Copiar la imagen
    newImg.style.width = "100%"; // Tamaño más grande
    newImg.style.maxHeight="550px";

       dvimg.style.width="100%"
     
    console.log("entro al if");


    dvimg.innerHTML="";
   
  dvimg.appendChild(newImg);

    }else if(window.innerWidth<1000){
      

  window.location.href="ZurInicio-1.html#dvimg";

      const newImg = document.createElement("img");
      dvimg.style.width="80%"
      newImg.src = img.src; // Copiar la imagen
    newImg.style.width = "90%"; // Tamaño más grande
    newImg.style.height="auto";
    


    dvimg.innerHTML="";
   
  dvimg.appendChild(newImg);
      console.log("entro al else");

    }
 
    dvenrm.style.display="block";   
    
 

    imgmostrar.style.display="flex";
    imgmostrar.style.transition="1s ";
    imgmostrar.style.width="auto";
    
    //dvimg.style.width="100%";


   
  console.log("Height"+window.innerHeight);
  console.log("Width"+window.innerWidth);

  }

  let cerrarIMG = document.querySelector(".cerrarIMG");

  cerrarIMG.addEventListener("click",()=>{

    window.location.href="ZurInicio-1.html#portfolio";

    imgmostrar.style.display="none";
    dvenrm.style.display="none";   
  

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
