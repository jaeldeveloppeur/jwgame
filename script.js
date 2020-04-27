const bouton1 = document.getElementById('bouton1');
const bouton2 = document.getElementById('bouton2');
const bouton3 = document.getElementById('bouton3');
const boutonValider = document.getElementById('boutonValider');
//const boutonStart = document.getElementById('startJeu1');
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
    ["1: J'ai eu un coeur entier pour Jéhovah pendant toute ma vie","2: Je me suis offensé contre Hanani le voyant et je l'ai mis en prison","3: J'ai eu une maladie des pieds qui devint très grave","4: J'ai envoyé de l'argent et de l'or à Ben Hadad pour rompre un accord","5: On m'a enterré dans la tombe grandiose que je m'étais creusé dans la Cité de David", "6: J'ai pulvérisé l'horrible idole de ma grand mère Maaka","7: Durant mon règne, le royaume vécut dans le calme","8: Mon fils Josaphat devint roi à ma place","9: J'ai écouté les paroles du prophète Azarias en faisant disparaître les idoles répugnantes de tout le pays de Juda","10 : Jéhovah fit que moi et Juda, nous battions 1 million d'Ethiopiens"],
    ["1: Je suis le fils de Beor et j'ai vécu à Pethor","2: J'ai offert sept taureaux et sept béliers sur sept autels","3: J'ai aimé le salaire qu'on m'offrait pour faire le mal","4: Jéhovah mit une parole dans ma bouche afin que j'énonce une bénédiction pour Israël","5: J'ai voulu prophétiser contre Israël pour recevoir de l'argent","6 : Balak m'a demandé de maudire Israël","7: Un ange m'a dit que mon voyage est contraire à sa volonté","8: J'ai battu mon ânesse","9: Une bête de somme a empêché mon action insensée","10: Mon ânesse m'a parlé"],
    ["1: Je suis peut être aussi nommé 'Bedân' dans la bible","2: Je suis le fils d'Abinoam de Qédesh dans le territoire de Naphatali", "3: Dix mille hommes me suivirent","4: J'ai poursuivi les chars et l'armée jusqu'à Harosheth-des-Nations","5: Grâce à la foi, j'ai vaincu des royaumes","6: J'ai dit à Déborah que je n'irai que si elle viens avec moi","7: J'ai dit que Sissera sera livré de mes mains","8: J'ai lancé une expédition militaire, mais c'est à une femme que Jéhovah a livré mon ennemi","9: Jaël m'a montré l'homme que je cherchais","10: J'ai chanté avec la prophétesse Déborah un chant de victoire"],
    ["x"],
    ["x"],
    ["x"],
    ["1: Je suis le fils d'Ouri, lui-même fils de Hour","2: Je fis l'éphod avec de l'or, du fil bleu, de la laine pourpre, du fil écarlate et du fin lin retors","3: Je fis le porte-lampes en or pur","4: J'ai fais l'arche en bois d'acacia","5: J'ai fais l'autel de cuivre qu'utilisait Salomon","6: J'ai fais 11 toiles en poil de chèvre pour servir de tente par-dessus le tabernacle","7: J'ai recouvert d'or les cadres du tabernacle","8: J'ai brodé des chérubins sur le rideau","9: J'ai été aidé par Oliab","10: Je suis le principal artisan et bâtisseur du tabernacle"],
    ["1: Je suis un homme riche de la famille d'Elimelek","2: J'ai dit aux moissonneurs : 'Que Jéhovah soit avec vous !'","3: Je suis l'arrière grand-père de David","4: On m'a souhaité une grande descendance venant de Jéhovah","5: Je suis le fils de Rahab et Salmôn","6: Je suis l'un des racheteurs de Ruth","7: J'ai eu Obed comme fils","8: Ruth s'est retrouvé par hasasrd sur une de mes parcelles","9: J'ai trouvé Ruth couchée à mes pieds","10: J'ai pris Ruth comme épouse"],
    ["1: J'ai bâtit une ville et lui ai donné le nom de mon fils, Hénoch","2: J'ai dit : 'La punition pour ma faute est trop lourde à porter'","3: Je sui devenu un vagabond et fugitif sur la terre","4: J'étais un cultivateur du sol","5: Je suis parti m'installer au pays de l'Exil","6: Dieu m'a dit que le péché guettait à ma porte","7: Jéhovah n'a pas approuvé mon offrande","8: J'ai dit:'Suis-je le gardien de mon frère?","9: J'ai tué mon frère dans un champ","10: Je suis me premier fils d'Adam et Eve"],
    ["1: J'ai dit: 'J'ai obéi à Jéhovah mon Dieu sans réserve'","2: J'ai reçu la région d'Hébrôn en héritage","3: J'ai donné en mariage ma fille Aksa à Otniel pour la capture d'une ville","4: L'insensé Nabal est un des mes descendants","5: A 85ans j'ai dit que j'étais aussi fort qu'à 40ans","6: J'ai fais un compte rendu fidèle à la réalité","7: J'avais 40 ans quand j'ai été envoyé pour explorer le pays","8: J'ai dit au sujet de la terre promise : 'Montons immédiatement'","9: Je fais partie des 12 espions envoyés par Moïse en reconnaissance dans le pays de Canaan","10: J'ai exploré la terre promise avec Josué"],
    ["1: J'habitais à Césarée et je craignais Dieu","2: J'ai été jugé juste par toute la nation des juifs","3: Mes prières et mes dons faits aux pauvres sont montés devant Dieu","4: Avant ma conversion, je priais Dieu constamment","5: J'ai envoyé chercher Pierre à Joppé","6: J'ai rendu hommage à Pierre","7: J'ai réuni mes parents et mes amis pour écouter Pierre","8: Ma famille et moi avons reçus l'esprit saint pendant que Pierre parlait","9: Je suis un officier de la troupe italienne","10: Je fus le premier Gentil à me convertir au Christianisme"],
    ["1: Jéhovah a dit de moi: 'C'est mon berger'","2: Jéhovah m'a oint","3: Jéhovah me connaissant d'avance, il m'a appelé par mon nom, pour le bien de Jacob et d'Israël","4: Jéhovah a dit que les portes à deux battants vont s'ouvrir devant moi","5: J'ai dit que Jéhovah m'avait donné tous les royaumes de la terre","6: J'ai donné l'ordre de reconstruire le temple","7: J'ai fait rapporter les récipients en or et en argent au temple de Jérusalem","8: J'ai détourné le cours de l'Euphrate","9: J'ai joué un rôle dans la réalisation des prophéties","10: Je suis roi de Perse et Jéhovah réveilla mon esprit"],
//    ["1:","2:","3:","4:","5:","6:","7:";"8:","9:","10:"],
];

const listeImage = ["x",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

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
    ["1 Rois 15:14","2 Chroniques 16:10","2 Chroniques 16:12","2 Chroniques 16:13","2 Chroniques 16:14","2 Chroniques 15:16","2 Chroniques 14:5","2 Chroniques 17:1","2 Chroniques 15:8","2 Chroniques 14:12"],
    ["Nombres 22:5","Nombres 23:1,2","2 Pierre 2:15","Nombres 23:19","Nombres 23","Nombres 22:4,6","Nombres 22:32","Nombres 22:23","2 Pierre 2:16","Nombres 22:28"],
    ["1 Samuel 12:11","Juges 4:16","Juges 4:10","Juges 4:16","Hébreux 11:32,33","Juges 4:8","Juges 4:7","Juges 4:9","Juges 4:22","Juges 5:1"],
    ["x"],
    ["x"],
    ["x"],
    ["Exode 31:2","Exode 38:22-39","Exode 37:17","Exode 37:1","2 Chroniques 1:5","Exode 36:1,14","Exode 36:1,34","Exode 36:1,35","Exode 31:6","-"],
    ["Ruth 2:1","Ruth 2:4","Ruth 4:21,22","Ruth 4:12","Matthieu 1:5","Ruth 2:20","Ruth 4:21","Ruth 2:3","Ruth 3:8","Ruth 4:10"],
    ["Genèse 4:17","Genèse 4:13","Genèse 4:12","Genèse 4:2","Genèse 4:16","Genèse 4:7","Genèse 4:5","Genèse 4:9","Genèse 4:8","Genèse 4:1"],
    ["Josué 14:8","Josué 14:14","Josué 15:17","1 Samuel 25:3","Josué 14:7","Josué 14:7","Josué 14:7","Nombres 13:30","-","Nombres 14:6"],
    ["Actes 10:2","Actes 10:22","Actes 10:4","Actes 10:2","Actes 10:5","Actes 10:25","Actes 10:24","Actes 10:44","Actes 10:1","Actes 10:45"],
    ["Isaïe 44:28","Isaïe 45:1","Isaïe 45:1,4","Isaïe 45:1","Esdras 1:2","Esdras 5:13","Esdras 5:14,15","Isaïe 44:27","-","2 Chroniques 36:22"],
    
]

const bonneReponse = ["x","AARON","ABEL","ABRAHAM","ABSALON","ADAM","AMOS","APOLLOS","AQUILAS","ASA","BALAAM","BARAK","x","x","x","BEZALEL","BOAZ","CAÏN","CALEB","CORNEILLE","CYRUS"];

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
    
    console.log(nombreAleatoire);
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
