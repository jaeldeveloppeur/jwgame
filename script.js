const boutonIndice = document.getElementById('bouton1');

let listeIndices = [["Mon fils Eléazar m'a succédé comme prêtre en Israël - Nombres 20:28"],["J'ai critiqué Moïse pour avoir épousé une femme Koushite - Nombres 12:1,2"],["Mes fils, Nadab et Abihou, ont été tués par Jéhovah - Lévitique 10:1,2"],["Mon bâton a bourgeonné, ce qui signifie que Jéhovah m'a choisi - Nombres 17:8"],["Mon bâton est devenu un gros serpent - Exode 7:9-12"],["Le Nil s'est transformé en sang lorsque je l'ai touché par mon bâton - Exode 7:20"],["J'ai représenté Moïse comme porte-parole - Exode 4:10-17,30"],["Je suis le premier Grand Prêtre en Israël - Exode 28"],["Ma soeur s'appelle Miriam et mon frère Moïse - Exode 15:20"]];

var click = -1;

function ajoutIndice (){
    click += 1; 
    if (click > 8){
        console.log("perdu");
    }
    else{
        const indice = document.createElement("li");
        indice.classList.add("li");
        indice.textContent = listeIndices[click];
        document.getElementById("indiceListe").appendChild(indice);   
    } 
        
};

boutonIndice.addEventListener('click', ajoutIndice);

