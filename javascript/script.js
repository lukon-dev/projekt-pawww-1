const PRZEPISY = document.querySelectorAll('.przepis')
const PREVBTN = document.getElementById('prevBtn')
const NEXTBTN = document.getElementById('nextBtn')
const btnSprawdz = document.querySelector('#btnSprawdz');
const SALATKAGRECKA = document.getElementById('salatka-grecka');
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

let przekieruj=()=>{
    window.location.href = "podstrony/przepisy.html#salatka-grecka"
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
if(location.hash === "#salatka-grecka"){
        SALATKAGRECKA.style.display = "flex";
        PRZEPISY[0].style.display = "none";
    }

if (NEXTBTN) NEXTBTN.addEventListener('click', przesun);
if (PREVBTN) PREVBTN.addEventListener('click', cofnij);
if (btnSprawdz) btnSprawdz.addEventListener('click', przekieruj);