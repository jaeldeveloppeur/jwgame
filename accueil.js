const regles = document.getElementById("regles");
let g = 0;

function afficherRegles(){
    if (g >= 0){
        regles.style.display="block";
        g = g-1;
    }
    else{
        regles.style.display="none";
        g++;
    }
};