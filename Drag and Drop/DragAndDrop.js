//========== DOM Elements ==========

const containers=document.querySelectorAll('.container'),
      image=document.querySelector('.image');

let con1=document.querySelector('#con1');

// ====== Loop through each container element =====

containers.forEach(container=>{

    //====== When a draggable element dragged over a container element ====

    container.addEventListener('dragover',e=>{
        e.preventDefault() //prevent default behaviour
        
    })

    //====== When a draggable element is dropped on a container element ======


    container.addEventListener('drop',()=>{
        container.appendChild(image)
        
    })

   
})


// =========Rese

function reset(){
    
    con1.appendChild(image)
}
