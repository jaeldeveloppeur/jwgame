const bouton1 = document.getElementById('bouton1');
const bouton2 = document.getElementById('bouton2');
const bouton3 = document.getElementById('bouton3');
const boutonValider = document.getElementById('boutonValider');
const boutonStart = document.getElementById('startJeu1');
//const boutonAbandon = document.getElementById('abandon');

let listeIndices = [
    ["X","X","X","X","X","X","X","X","X","X"],
    ["1 : Je suis né en 1597 av.n.è, fils de Amram et Jokébed", "2 : Mon fils Eléazar m'a succédé comme prêtre en Israël","3 : J'ai critiqué Moïse pour avoir épousé une femme Koushite","4 : Mes fils, Nadab et Abihou, ont été tués par Jéhovah","5 : Mon bâton a bourgeonné, ce qui signifie que Jéhovah m'a choisi","6 : Mon bâton est devenu un gros serpent","7 : Le Nil s'est transformé en sang lorsque je l'ai touché par mon bâton","8 : J'ai représenté Moïse comme porte-parole","9 : Je suis le premier Grand Prêtre en Israël","10 : Ma soeur s'appelle Miriam et mon frère Moïse"],
    ["1 : Le sang de Jésus parle mieux que le mien","2 : Il se dit de moi : 'bien que mort, il parle encore'", "3 : Jésus dis que j'ai vécu 'à la fondation du monde'", "4 : Mon sang crie du sol vers Jéhovah", "5 : J'ai offert à Dieu un sacrifice de plus grande valeur", "6 : J'étais un berger, mon frère était cultivateur", "7 : Je suis le premier humain à avoir manifesté la foi", "8 : Je suis victime du premier meurtre pour mes actions justes", "9 : Je suis le deuxième enfant de Adam et Eve", "10 : Je suis le petit frère de Caïn"],
    ["1 : Je suis la première personne à avoir été nommé 'l'hébreu'", "2 : J'ai construit un autel à Jéhovah à Béthel", "3 : Ma femme, Ketoura, donne naissance à six enfants", "4 : J'ai envoyé mes serviteurs chercher une femme pour mon fils", "5 : J'ai acheté un champ à Makpéla et j'y ai enterré ma femme", "6 : J'ai eu un fils à 100ans", "7 : On dit de moi 'C'est le père de tous ceux qui ont foi'", "8 : On m'a appelé 'ami de Jéhovah'", "9 : J'ai accepté d'offrir mon fils en sacrifice", "10 : Sara était ma femme"],
    ["1 : J'ai mis le feu au champ d'orge de Joab", "2 : J'ai cherché à gagner le coeur de tous les hommes d'Israël", "3 : J'ai dit : 'le conseil de Houshaï est meilleur'", "4 : J'ai donné le commandement de l'armée à Amasa, à la place de Joab", "5 : On m'a tué alors que j'étais pendu à un arbre", "6 : Je devais me raser la tête tous les ans", "7 : J'étais le plus beau et le plus admiré de tous les hommes d'Israël", "8 : On a violé ma soeur", "9 : Mon histoire encourage à se méfier de l'ambition", "10 : Je me suis révolté contre David, mon Père"],
    ["1 : Je n'ai pas été trompé", "2 : Hénoch était le 7e de ma lignée", "3 : Je me suis caché de Jéhovah", "4 : J'ai vécu 930 ans", "5 : La mort a régné depuis mon existence jusqu'à Moïse", "6 : En moi, tous meurent", "7 : J'ai été formé le premier", "8 : J'ai dit : 'voici enfin l'os de mes os et la chair de ma chair'", "9 : J'ai donné un nom à tous les animaux domestiques, qui volent, sauvages ...", "10 : Je suis le premier homme"],
    ["1 : J'ai dit que Jéhovah secouerai le peuple d'Israël comme on secoue un tamis", "2 : J'ai été accusé de conspiration par Amazia, le prêtre de Béthel", "3 : J'ai annoncé aux Samaritains qu'ils seraient exilés au-delà de Damas", "4 : J'ai eu une vision deux ans avant un grand Tremblement de terre", "5 : Je suis un prophète originaire de Tekoa, à 16km au Sud de Jérusalem", "6 : J'ai prophétisé une famine spirituelle", "7 : Avant d'être prophète, j'étais gardien de troupeau et je m'occupais des figuiers de sycomores", "8 : J'ai vécu au IXe siècle av.n.è", "9 : J'ai un livre de la Bible qui porte mon nom", "10 : Je suis l'un des 12 'petits' prophètes"],
    ["1 : Paul a insisté pour que j'aille visiter les chrétiens de Corinthe", "2 : Je ne connaissais que le baptême de Jean", "3 : J'ai prouvé publiquement avec les Ecritures que les juifs avaient tort", "4 : Je connaissais bien les écritures", "5 : On m'a expliqué avec plus de précision les enseignements de Dieu après m'avoir entendu prêcher à la synagogue", "6 : Des chrétiens de Corinthe me considéraient comme leur chef", "7 : Je débordais de zèle", "8 : J'étais un homme éloquent, originaire d'Alexandrie", "9 : Priscille et Aquillas m'ont pris avec eux pour m'expliquer les Ecritures", "10 : J'ai arrosé, mais c'est Dieu qui fait pousser"],
    ["1 : Je suis originaire du pont", "2 : Nous avons embarqué pour la Syrie, accompagné de Paul", "3 : L'assemblée de Corinthe se rassemblait dans ma maison", "4 : Paul m'appelle 'mon collaborateur en christ Jésus'", "5 : L'assemblée de Rome se rassemblait dans ma maison", "6 : Jai risqué ma propre tête pour Paul", "7 : J'étais un fabricant de tentes comme Paul", "8 : Avec ma femme, nous avons expliqué précisément la parole de Dieu à Apollos","9 : Moi et ma femme, nous sommes toujours mentionnés ensemble", "10 : Ma femme s'appelle Priscille"],
];

const listeImage = ["x",1,2,3,4,5,6,7,8];

let listeVerset = [
    ["x"],
    ["Exode 6:20","Nombres 20:28","Nombres 12:1,2","Lévitique 10:1,2","Nombres 17:8","Exode 7:9-12","Exode 7:20", "Exode 4:10-17,30", "Exode 28", "Exode 15:20"],
    ["Hébreux 12:24","Hébreux 11:4","Luc 11:50,51","Genèse 4:10","Hébreux 11:4","Genèse 4:2","Hébreux 11:4","1 Jean 3:12", "Genèse 4:2", " - "],
    ["Genèse 14:13","Genèse 12:8","Genèse 25:1","Genèse 24:4,10","Genèse 23:19","Genèse 21:5","Romains 4:11", "Jacques 2:23", "Hébreux 11:17", "Genèse 17:15"],
    ["2 Samuel 14:30","2 Samuel 15:6","2 Samuel 17:14","2 Samuel 17:25","2 Samuel 18:14","2 Samuel 14:26","2 Samuel 14:25", "2 Samuel 13:14", "2 Samuel 15:1-6", "Psaume 3"],
    ["1 Timothée 2:14","Jude 14","Genèse 3:8","Genèse 5:5","Romains 5:14","1 Corinthiens 15:22","1 Timothée 2:13", "Genèse 2:23", "Genèse 2:20", "1 Corinthiens 15:45"],
    ["Amos 9:9","Amos 7:10-13","Amos 5:27","Amos 1:1","Amos 1:1","Amos 8:11","Amos 7:14,15", "-", "-", "-"],
    ["1 Corinthiens 16:12","Actes 18:25","ACtes 18:28","Actes 18:24","Actes 18:26,27","1 Corinthiens 1:12","Actes 18:25", "Actes 18:24", "Actes 18:26", "1 Corinthiens 3:6"],
    ["Actes 18:2","Actes 18:18","1 Corinthiens 16:19","Romains 16:3","Romains 16:5","Romains 16:4","Actes 18:3", "Actes 18:26", "Actes 18", "Actes 18:2"],
    
]

const bonneReponse = ["x","AARON","ABEL","ABRAHAM","ABSALON","ADAM","AMOS","APOLLOS","AQUILAS"];

var arrayNombreEntier = [0];

let dernierPerso = 0;
let nombreAleatoire = 0;
var click = -1;

function genererNombreEntier(max){
    return Math.floor(Math.random() * Math.floor(max));
}


if(window.addEventListener){
    window.addEventListener('load', nouveauPersonnage, false);
}else{
    window.attachEvent('onload', nouveauPersonnage);
};

function closeModal(){
    document.getElementById("modal").style.top = "-700px";
};

function closeModalGagne (){
    document.getElementById("modalGagne").style.top = "-700px";
};

function closeModalPerdu (){
    document.getElementById("modalPerdu").style.top = "-700px";
};

function openModal2(){
    document.getElementById("modal2").style.top = "0px";
};

function closeModal2(){
    document.getElementById("modal2").style.top = "-700px";
};

function abandon(){
    var supprLi = document.getElementById("modal").getElementsByTagName("h2");
    var supprImg = document.getElementById("modal").getElementsByTagName("img");
    var supprVerset = document.getElementById("modal").getElementsByTagName("p");
    
    while(supprLi.length > 0){
        supprLi[0].parentNode.removeChild(supprLi[0]);
    }
    while(supprImg.length > 0){
        supprImg[0].parentNode.removeChild(supprImg[0]);
    }
    while(supprVerset.length > 0){
        supprVerset[0].parentNode.removeChild(supprVerset[0]);
    }
    
    document.getElementById("modal").style.top = "0px";
//    creation h2 reponse
    const personnage = document.createElement("h2");
    personnage.style.textAlign = "center";
    personnage.textContent = "Je suis " + bonneReponse[nombreAleatoire];
    document.getElementById("modal").appendChild(personnage);
//    ajout image perso
    const imagePerso = document.createElement("img");
    imagePerso.setAttribute("src", "images/imageRD/" + listeImage[nombreAleatoire] + ".png");
    document.getElementById("modal").appendChild(imagePerso);
//    ajout verset
    var g=0;
    do {
        var afficherVerset = document.createElement("p");
        afficherVerset.style.marginBottom = "1px";
        afficherVerset.textContent = g+1 + " : " + listeVerset[nombreAleatoire][g];
        console.log(afficherVerset.textContent);
        document.getElementById("modal").appendChild(afficherVerset);
        g++;
    } while (g<10);
    
};


function ajoutIndice (){
    click += 1;
    
//      Supprimer bouton lors d'un reclic
    var supprBoutonReponse= document.getElementById("indiceListe").getElementsByTagName("button");
    
    while(supprBoutonReponse.length > 0){
    supprBoutonReponse[0].parentNode.removeChild(supprBoutonReponse[0]);
    }
    
    if (click > listeIndices[nombreAleatoire].length - 1){
        console.log("coucou");
    }
    else{
//        creation li
        const indice = document.createElement("li");
        indice.classList.add("li");
        indice.textContent = listeIndices[nombreAleatoire][click];
        document.getElementById("indiceListe").appendChild(indice);   
    }
    
    if(click > 2){
        var hauteur = document.body.scrollHeight;
        scrollTo(0,hauteur);
    }
    
    if(click > 8){
//        creation et ajout du bouton
        console.log(click);
        const boutonReponse = document.createElement("button");
        boutonReponse.setAttribute("type","button");
        boutonReponse.setAttribute("id","abandon");
        boutonReponse.textContent = "OBTENIR LA REPONSE";
        document.getElementById("indiceListe").appendChild(boutonReponse);
        boutonReponse.addEventListener('click', abandon);
        scrollTo(0,hauteur);
    }
};

function validationReponse (){
    var test = document.getElementById('reponse').value.toUpperCase();
    
    if (test == bonneReponse[nombreAleatoire]){
        document.getElementById("modalGagne").style.top = "0px";
//        Supprimer image
        var supprImg = document.getElementById("modalGagne").getElementsByTagName("img");
        
        var supprVerset = document.getElementById("modalGagne").getElementsByTagName("p");
        
        while(supprImg.length > 0){
        supprImg[0].parentNode.removeChild(supprImg[0]);
        }
        while(supprVerset.length >0){
        supprVerset[0].parentNode.removeChild(supprVerset[0]);
        }
//        ajout image
        var imagePerso = document.createElement("img");
        imagePerso.setAttribute("src", "images/imageRD/" + listeImage[nombreAleatoire] + ".png");
        document.getElementById("modalGagne").appendChild(imagePerso);
//        ajout verset
        var g=0;
        do {
            var afficherVerset = document.createElement("p");
            afficherVerset.style.marginBottom = "1px";
            afficherVerset.textContent = g+1 + " : " + listeVerset[nombreAleatoire][g];
            console.log(afficherVerset.textContent);
            document.getElementById("modalGagne").appendChild(afficherVerset);
            g++;
        } while (g<10);

    }
        
    else{
        document.getElementById("modalPerdu").style.top = "0px";
    }
    closeModal2();   
};


function nouveauPersonnage (){
    scrollTo(0,0);
    closeModal();
    closeModalGagne();
    closeModal2();
    closeModalPerdu();
    
    var supprBoutonReponse = document.getElementById("indiceListe").getElementsByTagName("button");
    while(supprBoutonReponse.length > 0){
    supprBoutonReponse[0].parentNode.removeChild(supprBoutonReponse[0]);
    };
    
//    generer un nombre aleatoire sauf le precedent
    do {
        nombreAleatoire = genererNombreEntier(listeIndices.length);
    } while ((arrayNombreEntier.includes(nombreAleatoire) == true) && ((arrayNombreEntier.length >= listeIndices.length) == false));
    
    arrayNombreEntier.push(nombreAleatoire);
    
    var ol = document.getElementById('indiceListe').getElementsByTagName("li");
    while(ol.length > 0){
        ol[0].parentNode.removeChild(ol[0]);
    }
    
    click = 0;
    const indice = document.createElement("li");
    indice.classList.add("li");
    indice.textContent = listeIndices[nombreAleatoire][0];
    document.getElementById("indiceListe").appendChild(indice);
    document.getElementById('reponse').value = "";
};

bouton1.addEventListener('click', ajoutIndice);
bouton2.addEventListener('click', openModal2);
boutonValider.addEventListener('click', validationReponse);
bouton3.addEventListener('click', nouveauPersonnage);
//boutonStart.addEventListener('click', nouveauPersonnage);
