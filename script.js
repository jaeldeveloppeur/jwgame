const bouton1 = document.getElementById('bouton1');
const bouton2 = document.getElementById('bouton2');
const bouton3 = document.getElementById('bouton3');
const boutonValider = document.getElementById('boutonValider');

let listeIndices = [["Mon fils Eléazar m'a succédé comme prêtre en Israël - Nombres 20:28"],["J'ai critiqué Moïse pour avoir épousé une femme Koushite - Nombres 12:1,2"],["Mes fils, Nadab et Abihou, ont été tués par Jéhovah - Lévitique 10:1,2"],["Mon bâton a bourgeonné, ce qui signifie que Jéhovah m'a choisi - Nombres 17:8"],["Mon bâton est devenu un gros serpent - Exode 7:9-12"],["Le Nil s'est transformé en sang lorsque je l'ai touché par mon bâton - Exode 7:20"],["J'ai représenté Moïse comme porte-parole - Exode 4:10-17,30"],["Je suis le premier Grand Prêtre en Israël - Exode 28"],["Ma soeur s'appelle Miriam et mon frère Moïse - Exode 15:20"]];

const bonneReponse = "aaron" ;

let dernierPerso = 0;
let nombreAleatoire = 0;

function genererNombreEntier(max){
    return Math.floor(Math.random() * Math.floor(max));
}


var click = -1;

function closeModal(){
    document.getElementById("modal").style.top = "-300px";
};

function closeModalGagne (){
    document.getElementById("modalGagne").style.top = "-300px";
};

function closeModalPerdu (){
    document.getElementById("modalPerdu").style.top = "-300px";
};

function openModal2(){
    document.getElementById("modal2").style.top = "150px";
};

function closeModal2(){
    document.getElementById("modal2").style.top = "-300px";
};


function ajoutIndice (){
    click += 1; 
    if (click > 8){
        function openModal(){
            document.getElementById("modal").style.top = "150px";
        }
        openModal();
    }
    else{
        const indice = document.createElement("li");
        indice.classList.add("li");
        indice.textContent = listeIndices[click];
        document.getElementById("indiceListe").appendChild(indice);   
    }       
};

function validationReponse (){
    var test = document.getElementById('reponse').value;
    if (test == bonneReponse){
        document.getElementById("modalGagne").style.top = "150px";
    }
    else{
        document.getElementById("modalPerdu").style.top = "150px";
    }
    closeModal2();   
};


function nouveauPersonnage (){
//    window.location.reload();
//    do {
//       nombreAleatoire = genererNombreEntier(listeIndices.length); 
//    } while(nombreAleatoire == dernierPerso);
    
    var ol = document.getElementById('indiceListe').getElementsByTagName("li");
    while(ol.length > 0){
        ol[0].parentNode.removeChild(ol[0]);
    }
};

bouton1.addEventListener('click', ajoutIndice);
bouton2.addEventListener('click', openModal2);
boutonValider.addEventListener('click', validationReponse);
bouton3.addEventListener('click', nouveauPersonnage);

