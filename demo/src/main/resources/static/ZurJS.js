let img = document.querySelector(".imgsocial");

let itemimg = document.querySelectorAll(".imgitem");
 

itemimg.forEach((item)=>{


   item.addEventListener("click",()=>{

    const newImg = document.createElement("img");

     if(window.innerWidth>=1100){

      dvimg.style.width="100%"
    newImg.src= item.src; 
    newImg.style.width = "100%"; // Tamaño más grande
    newImg.style.maxHeight="550px";
  
     }else if(window.innerWidth<=1000){

     newImg.src= item.src; 
    newImg.style.width = "100%"; // Tamaño más grande
    newImg.style.maxHeight="550px";
     

     }
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
      

  window.location.href="ZurInicio-1.html#imgmost";

      const newImg = document.createElement("img");
      dvimg.style.width="80%"
      newImg.src = img.src; // Copiar la imagen
    newImg.style.width = "90%"; // Tamaño más grande
    newImg.style.height="auto";
 
    dvimg.innerHTML="";
   
  dvimg.appendChild(newImg);
  
      imgmostrar.style.marginTop="40%";

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
  let dvll = document.querySelector(".dvl1l");
let ln1= document.getElementById("ln1");
let ln2= document.getElementById("ln2");
let ln3= document.getElementById("ln3");
let dvfil= document.querySelector(".dvfil");

let dvheadermobile = document.querySelector(".dvheadermobile");
dvfil.addEventListener("click",()=>{

    console.log("Entro")

    ln1.style.transition= "transform 0.5s"; 

    ln1.style.transform="rotate(0deg)";

    ln3.style.transform="rotate(0deg)";

    ln2.style.display="block";

    dvfil.style.display="none";

    dvll.style.gap="5px";


        dvheadermobile.style.transition="height 1s ease"

        dvheadermobile.style.height="0px";
     

  


})

    dvll.addEventListener("click",()=>{

      dvll.style.gap="0px";

        ln1.style.transition= "transform 0.5s"; 
    
        ln1.style.transform="rotate(45deg)";
    
        ln2.style.display="none";
    
        ln3.style.transition= "transform 0.5s"; 
        
        ln3.style.transform="rotate(-45deg)";
    
    
        dvfil.style.display="block";

        dvheadermobile.style.opacity="1";

        dvheadermobile.style.transition="height 1s ease"

        dvheadermobile.style.height="600px";


    });





const nombre = document.getElementById("nombre");
const apellido=document.getElementById("apellido");
const numero= document.getElementById("celu");
const correo=document.getElementById("correo");
const mensaje=document.getElementById("msjform");

const btnmandar = document.querySelector(".btnmandar").addEventListener("click",()=>{

  fetch("https://localhost:8443/Zur/consultasEntrante", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nombre: nombre.value(),
        apeliido:apellido.value(),
        numero: numero.value(),
        correo: correo.value(),
        mensaje: mensaje.value()
    }),
     mode: "cors"
})
.catch(error => console.error("Error:", error));
});


