const bouton1 = document.getElementById('bouton1');
const bouton2 = document.getElementById('bouton2');
const bouton3 = document.getElementById('bouton3');
const boutonValider = document.getElementById('boutonValider');
const boutonStart = document.getElementById('startJeu1');
const boutonAbandon = document.getElementById('abandon');

let listeIndices = [
    ["X","X","X","X","X","X","X","X","X","X"],
    ["1 : Je suis né en 1597 av.n.è, fils de Amram et Jokébed - Exode 6:20", "2 : Mon fils Eléazar m'a succédé comme prêtre en Israël - Nombres 20:28","3 : J'ai critiqué Moïse pour avoir épousé une femme Koushite - Nombres 12:1,2","4 : Mes fils, Nadab et Abihou, ont été tués par Jéhovah - Lévitique 10:1,2","5 : Mon bâton a bourgeonné, ce qui signifie que Jéhovah m'a choisi - Nombres 17:8","6 : Mon bâton est devenu un gros serpent - Exode 7:9-12","7 : Le Nil s'est transformé en sang lorsque je l'ai touché par mon bâton - Exode 7:20","8 : J'ai représenté Moïse comme porte-parole - Exode 4:10-17,30","9 : Je suis le premier Grand Prêtre en Israël - Exode 28","10 : Ma soeur s'appelle Miriam et mon frère Moïse - Exode 15:20"],
    ["1 : Le sang de Jésus parle mieux que le mien - Hébreux 12:24","2 : Il se dit de moi : 'bien que mort, il parle encore' - Hébreux 11:4", "3 : Jésus dis que j'ai vécu 'à la fondation du monde' - Luc 11:50,51", "4 : Mon sang crie du sol vers Jéhovah - Genèse 4:10", "5 : J'ai offert à Dieu un sacrifice de plus grande valeur - Hébreux 11:4", "6 : J'étais un berger, mon frère était cultivateur - Genèse 4:2", "7 : Je suis le premier humain à avoir manifesté la foi - Hébreux 11:4", "8 : Je suis victime du premier meurtre pour mes actions justes - 1 Jean 3:12", "9 : Je suis le deuxième enfant de Adam et Eve - Genèse 4:2", "10 : Je suis le petit frère de Caïn"],
    ["1 : Je suis la première personne à avoir été nommé 'l'hébreu' - Genèse 14:13", "2 : J'ai construit un autel à Jéhovah à Béthel - Genèse 12:8", "3 : Ma femme, Ketoura, donne naissance à six enfants - Genèse 25:1", "4 : J'ai envoyé mes serviteurs chercher une femme pour mon fils - Genèse 24:4,10", "5 : J'ai acheté un champ à Makpéla et j'y ai enterré ma femme - Genèse 23:19", "6 : J'ai eu un fils à 100ans - Genèse 21:5", "7 : On dit de moi 'C'est le père de tous ceux qui ont foi' - Romains 4:11", "8 : On m'a appelé 'ami de Jéhovah' - Jacques 2:23", "9 : J'ai accepté d'offrir mon fils en sacrifice - Hébreux 11:17", "10 : Sara était ma femme - Genèse 17:15"],
    ["1 : J'ai mis le feu au champ d'orge de Joab - 2 Samuel 14:30", "2 : J'ai cherché à gagner le coeur de tous les hommes d'Israël - 2 Samuel 15;6", "3 : J'ai dit : 'le conseil de Houshaï est meilleur' - 2 Samuel 17:14", "4 : J'ai donné le commandement de l'armée à Amasa, à la place de Joab - 2 Samuel 17:25", "5 : On m'a tué alors que j'étais pendu à un arbre - 2 Samuel 18:14", "6 : Je devais me raser la tête tous les ans - 2 Samuel 14:25", "7 : J'étais le plus beau et le plus admiré de tous les hommes d'Israël - 2 Samuel 14:25", "8 : On a violé ma soeur - 2 Samuel 13:14", "9 : Mon histoire encourage à se méfier de l'ambition - 2 Samuel 15:1-6", "10 : Je me suis révolté contre David, mon Père - Psaume 3"],
    ["1 : Je n'ai pas été trompé - 1 Timothée 2:14", "2 : Hénoch était le 7e de ma lignée - Jude 14", "3 : Je me suis caché de Jéhovah - Genèse 3:8", "4 : J'ai vécu 930 ans - Genèse 5:5", "5 : La mort a régné depuis mon existence jusqu'à Moïse - Romains 5:14", "6 : En moi, tous meurent - 1 Corinthiens 15 :22", "7 : J'ai été formé le premier - 1 Timothée 2:13", "8 : J'ai dit : 'voici enfin l'os de mes os et la chair de ma chair'", "9 : J'ai donné un nom à tous les animaux domestiques, qui volent, sauvages ... - Genèse 2:20", "10 : Je suis le premier homme - 1 Corinhtiens 15:45"],
    ["1 : J'ai dit que Jéhovah secouerai le peuple d'Israël comme on secoue un tamis - Amos 9:9", "2 : J'ai été accusé de conspiration par Amazia, le prêtre de Béthel - Amos 7:10-13", "3 : J'ai annoncé aux Samaritains qu'ils seraient exilés au-delà de Damas - Amos 5:27", "4 : J'ai eu une vision deux ans avant un grand Tremblement de terre - Amos 1:1", "5 : Je suis un prophète originaire de Tekoa, à 16km au Sud de Jérusalem - Amos 1:1", "6 : J'ai prophétisé une famine spirituelle - Amos 8:11", "7 : Avant d'être prophète, j'étais gardien de troupeau et je m'occupais des figuiers de sycomores - Amos 7:14,15", "8 : J'ai vécu au IXe siècle av.n.è", "9 : J'ai un livre de la Bible qui porte mon nom", "10 : Je suis l'un des 12 'petits' prophètes"],
    ["1 : Paul a insisté pour que j'aille visiter les chrétiens de Corinthe - 1 Corinthiens 16:12", "2 : Je ne connaissais que le baptême de Jean - Actes 18:25", "3 : J'ai prouvé publiquement avec les Ecritures que les juifs avaient tort - Actes 18:28", "4 : Je connaissais bien les écritures - Actes 18:24", "5 : On m'a expliqué avec plus de précision les enseignements de Dieu après m'avoir entendu prêcher à la synagogue - Actes 18:26,27", "6 : Des chrétiens de Corinthe me considéraient comme leur chef - 1 Corinthiens 1:12", "7 : Je débordais de zèle - Actes 18:25", "8 : J'étais un homme éloquent, originaire d'Alexandrie - Actes 18:24", "9 : Priscille et Aquillas m'ont pris avec eux pour m'expliquer les Ecritures - Actes 18:26", "10 : J'ai arrosé, mais c'est Dieu qui fait pousser - 1 Corinthiens 3:6"],
    ["1 : Je suis originaire du pont - Actes 18:2", "2 : Nous avons embarqué pour la Syrie, accompagné de Paul - Actes 18:18", "3 : L'assemblée de Corinthe se rassemblait dans ma maison - 1 Corinthiens 16:19", "4 : Paul m'appelle 'mon collaborateur en christ Jésus' - Romains 16:3", "5 : L'assemblée de Rome se rassemblait dans ma maison - Romains 16:5", "6 : Jai risqué ma propre tête pour Paul - Romains 16:4", "7 : J'étais un fabricant de tentes comme Paul - Actes 18:3", "8 : Avec ma femme, nous avons expliqué précisément la parole de Dieu à Apollos - Actes 18:26","9 : Moi et ma femme, nous sommes toujours mentionnés ensemble - Actes 18", "10 : Ma femme s'appelle Priscille - Actes 18:2"],
];

const listeImage = ["x",1,2,3,4,5,6,7,8];

const bonneReponse = ["x","aaron","abel","abraham","absalon","adam","amos","apollos","aquilas"];

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

function abandon(){
    console.log(nombreAleatoire);
    var supprLi = document.getElementById("modal").getElementsByTagName("h2");
    var supprImg = document.getElementById("modal").getElementsByTagName("img");
    
    while(supprLi.length > 0){
        supprLi[0].parentNode.removeChild(supprLi[0]);
    }
    while(supprImg.length > 0){
        supprImg[0].parentNode.removeChild(supprImg[0]);
    }
    
    document.getElementById("modal").style.top = "100px";
//    creation h2 reponse
    const personnage = document.createElement("h2");
    personnage.style.textAlign = "center";
    personnage.textContent = "Je suis " + bonneReponse[nombreAleatoire];
    document.getElementById("modal").appendChild(personnage);
//    creation image perso
    const imagePerso = document.createElement("img");
    imagePerso.setAttribute("src", "images/imageRD/" + listeImage[nombreAleatoire] + ".png");
    document.getElementById("modal").appendChild(imagePerso);
    };


function ajoutIndice (){
    click += 1;
    
    if (click > listeIndices[nombreAleatoire].length - 1){
        console.log("coucou");
    }
    else{
        const indice = document.createElement("li");
        indice.classList.add("li");
        indice.textContent = listeIndices[nombreAleatoire][click];
        document.getElementById("indiceListe").appendChild(indice);   
    }
    
    if(click > 2){
        var hauteur = document.body.scrollHeight;
        scrollTo(0,hauteur);
    }
};

function validationReponse (){
    var test = document.getElementById('reponse').value;
    if (test == bonneReponse[nombreAleatoire]){
        document.getElementById("modalGagne").style.top = "150px";
    }
    else{
        document.getElementById("modalPerdu").style.top = "150px";
    }
    closeModal2();   
};


function nouveauPersonnage (){
//    window.location.reload();
    scrollTo(0,0);
    do {
       nombreAleatoire = genererNombreEntier(listeIndices.length); 
    } while(nombreAleatoire == dernierPerso);
    
    var ol = document.getElementById('indiceListe').getElementsByTagName("li");
    while(ol.length > 0){
        ol[0].parentNode.removeChild(ol[0]);
    }
    
    console.log(nombreAleatoire);
    click = 0;
    const indice = document.createElement("li");
    indice.classList.add("li");
    indice.textContent = listeIndices[nombreAleatoire][0];
    document.getElementById("indiceListe").appendChild(indice);
};

bouton1.addEventListener('click', ajoutIndice);
bouton2.addEventListener('click', openModal2);
boutonValider.addEventListener('click', validationReponse);
bouton3.addEventListener('click', nouveauPersonnage);
boutonStart.addEventListener('click', nouveauPersonnage);
boutonAbandon.addEventListener('click', abandon);
