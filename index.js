// - Replica el ejercicio completo del vídeo

// - Añade dos párrafos más en cada una de las secciones

// - Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)

// - Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, éste se elimine


let parrafos = document.querySelectorAll(".parrafo");
parrafos.forEach(parrafo=>{
  parrafo.addEventListener("dragstart",event=>{
    parrafo.classList.add("arrastrado");
    event.dataTransfer.setData("id",parrafo.id)
  })

  parrafo.addEventListener("dragend",()=>{
    parrafo.classList.remove("arrastrado");
    
  })
})


let section = document.querySelector(".section");
section.addEventListener("dragover",(drag)=>{
  drag.preventDefault()
   
  section.addEventListener("drop",(event)=>{
 
      let dataId = event.dataTransfer.getData("id")
      let parrafo=document.getElementById(dataId);
      section.appendChild(parrafo)
    })
    
  })
  