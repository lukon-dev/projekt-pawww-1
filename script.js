const PRZEPISY = document.querySelectorAll('.przepis')
const PREVBTN = document.getElementById('prevBtn')
const NEXTBTN = document.getElementById('nextBtn')
let current = 0;


let  przesun=()=>{
    current++;
     if(current >= PRZEPISY.length){
        current = 0;
    }
    for(let i = 0; i < PRZEPISY.length;i++){
        PRZEPISY[i].style.display = "none";
    }
    PRZEPISY[current].style.display = "flex";
    
   
       
}


let cofnij=()=>{
   
     for(let i = 0; i < PRZEPISY.length; i++){
        PRZEPISY[i].style.display = "none";
     }
      current--;
      if(current < 0){
            current = PRZEPISY.length - 1;
        }
     PRZEPISY[current].style.display = "flex";
}
NEXTBTN.addEventListener('click',przesun)
PREVBTN.addEventListener('click',cofnij)