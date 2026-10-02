let dossierActuel = "";

let fenetreTomOuverte = false;


/* =========================
   OUVERTURE DES DOSSIERS
   ========================= */

function ouvrirService(){
    window.location.href = "Service.html";
}


function ouvrirCreation(){
    dossierActuel = "Creation";
    afficherFenetreCode();
}


function ouvrirTom(){
    dossierActuel = "Tom";
    afficherFenetreCode();
}


function ouvrirKing(){
    dossierActuel = "King";
    afficherFenetreCode();
}


function ouvrirLegion(){
    dossierActuel = "Legion";
    afficherFenetreCode();
}


function ouvrirChaos(){
    dossierActuel = "Chaos";
    afficherFenetreCode();
}


function ouvrirDAX(){
    dossierActuel = "DAX";
    afficherFenetreCode();
}


function ouvrirDAX2(){
    window.location.href = "DAX2.html";
}


function ouvrirEmillien(){
    dossierActuel = "Emillien";
    afficherFenetreCode();
}


function ouvrirNok(){
    dossierActuel = "Nok";
    afficherFenetreCode();
}


function ouvrirFury(){
    dossierActuel = "Fury";
    afficherFenetreCode();
}


function ouvrirDestruction(){
    dossierActuel = "Destruction";
    afficherFenetreCode();
}


function ouvrirCorbeille(){
    dossierActuel = "Corbeille";
    afficherFenetreCode();
}


/* =========================
   FENÊTRE DE CODE
   ========================= */

function afficherFenetreCode(){

    let fenetre = document.getElementById("fenetreCode");

    if(!fenetre){
        return;
    }

    fenetre.style.display = "block";
    fenetre.style.zIndex = "500";

    let contenu = fenetre.querySelector(".contenu");

    if(contenu){
        contenu.style.display = "block";
    }

}


/* =========================
   FERMER FENÊTRE DE CODE
   ========================= */

function fermerCode(){

    let fenetre = document.getElementById("fenetreCode");

    if(fenetre){
        fenetre.style.display = "none";
    }

}


/* =========================
   RÉDUIRE FENÊTRE DE CODE
   ========================= */

function reduireCode(){

    let fenetre = document.getElementById("fenetreCode");

    if(!fenetre){
        return;
    }

    let contenu = fenetre.querySelector(".contenu");

    if(!contenu){
        return;
    }

    if(contenu.style.display === "none"){
        contenu.style.display = "block";
    }
    else{
        contenu.style.display = "none";
    }

}


/* =========================
   VÉRIFICATION DES CODES
   ========================= */

function verifierCode(){

    let champCode = document.getElementById("code");

    if(!champCode){
        return;
    }

    let code = champCode.value;


    /* THE TOM */

    if(dossierActuel == "Tom" && code == "XxToMxX"){

        fermerCode();

        ouvrirFenetreTom();

        return;
    }


    /* CREATION */

    if(dossierActuel == "Creation" && code == "041P"){
        window.location.href = "Creation.html";
        return;
    }


    /* KING */

    if(dossierActuel == "King" && code == "ABST_1"){
        window.location.href = "Long_Live_to_the_King.html";
        return;
    }


    /* LEGION */

    if(dossierActuel == "Legion" && code == "ast-tsa"){
        window.location.href = "Legion_of_Stationery.html";
        return;
    }


    /* CHAOS */

    if(dossierActuel == "Chaos" && code == "htrostb"){
        window.location.href = "Chaos.html";
        return;
    }


    /* DAX */

    if(dossierActuel == "DAX" && code == "cronomonoserot_6-5"){
        window.location.href = "DAX.html";
        return;
    }


    /* EMILLIEN */

    if(dossierActuel == "Emillien" && code == "croximillien_5-6"){
        window.location.href = "Emillien.html";
        return;
    }


    /* NOK */

    if(dossierActuel == "Nok" && code == "epicxonder_5-6"){
        window.location.href = "Nok.html";
        return;
    }


    /* FURY */

    if(dossierActuel == "Fury" && code == "partypartyfolly"){
        window.location.href = "The_Fury_of_the_Gods.html";
        return;
    }


    /* DESTRUCTION */

    if(dossierActuel == "Destruction" && code == "adieux.tom.labo"){
        window.location.href = "Destruction_of_Evidence.html";
        return;
    }


    /* CORBEILLE */

    if(dossierActuel == "Corbeille" && code == "041PTDY"){
        window.location.href = "Corbeille.html";
        return;
    }


    let message = document.getElementById("message");

    if(message){
        message.innerHTML = "CODE REFUSÉ";
    }

}


/* =========================
   FENÊTRE THE TOM
   ========================= */

function ouvrirFenetreTom(){

    if(fenetreTomOuverte){

        let ancienne = document.getElementById("fenetreTom");

        if(ancienne){

            ancienne.style.display = "block";
            ancienne.style.zIndex = "600";

        }

        return;
    }


    let fenetre = document.createElement("div");

    fenetre.id = "fenetreTom";

    fenetre.className = "fenetreTom";


    fenetre.innerHTML = `

        <div class="barre" id="barreTom">

            <span>The_Tom.txt</span>

            <div class="boutonsFenetre">

                <button onclick="reduireTom()">—</button>

                <button onclick="fermerTom()">X</button>

            </div>

        </div>


        <div class="contenu" id="contenuTom">

            <h1>MAZE LABORATORY</h1>

            <h2>ARCHIVE N°003</h2>

            <p>Titre : THE TOM</p>

            <p>Enfin...</p>

            <p>Le voici.</p>

            <p>Ma création parfaite.</p>

            <p>Je l'ai nommé :</p>

            <p><b>Tom</b></p>

            <p>
            Mais la mafia voulait un nom d'arme,
            alors j'ai créé un deuxième nom :
            </p>

            <p><b>terre&eau omega Maze</b></p>

            <p>Deux noms en un.</p>

            <hr>

            <h2>Recette de création :</h2>

            <p>Pierre de Foudre ;</p>

            <p>Pierre de Feu ;</p>

            <p>Pierre d'Eau ;</p>

            <p>Pierre de Plante ;</p>

            <p>Pouvoirs de Morgan, la Dame Blanche ;</p>

            <p>Sang du Créateur ;</p>

            <p>Sang de la Déesse de la Mort ;</p>

            <p>Cendres de gobelin ;</p>

            <p>Cendres d'un dieu du Chaos ;</p>

            <p>Un phylactère ;</p>

            <p>Un météore ;</p>

            <p>Une Larme du Soleil ;</p>

            <p>Une Pierre Lunaire ;</p>

            <p>Une pincée d'Omega ;</p>

            <p>Une faille temporelle dans une bouteille.</p>

            <hr>

            <p>
            Statut :
            CRÉATION RÉUSSIE
            </p>

            <p>- Dr. Maze</p>

        </div>

    `;


    document.body.appendChild(fenetre);

    fenetreTomOuverte = true;


    rendreDeplacable(
        fenetre,
        document.getElementById("barreTom")
    );

}


/* =========================
   RÉDUIRE THE TOM
   ========================= */

function reduireTom(){

    let contenu = document.getElementById("contenuTom");

    if(!contenu){
        return;
    }


    if(contenu.style.display === "none"){

        contenu.style.display = "block";

    }
    else{

        contenu.style.display = "none";

    }

}


/* =========================
   FERMER THE TOM
   ========================= */

function fermerTom(){

    let fenetre = document.getElementById("fenetreTom");

    if(fenetre){

        fenetre.remove();

    }

    fenetreTomOuverte = false;

}


/* =========================
   FENÊTRE DÉPLAÇABLE
   ========================= */

function rendreDeplacable(fenetre, barre){

    if(!fenetre || !barre){
        return;
    }


    let enDeplacement = false;

    let decalageX = 0;

    let decalageY = 0;


    barre.addEventListener("mousedown", function(e){

        enDeplacement = true;


        let rectangle =
            fenetre.getBoundingClientRect();


        decalageX =
            e.clientX - rectangle.left;


        decalageY =
            e.clientY - rectangle.top;


        fenetre.style.zIndex = "700";


        e.preventDefault();

    });


    document.addEventListener("mousemove", function(e){

        if(!enDeplacement){
            return;
        }


        fenetre.style.left =
            (e.clientX - decalageX) + "px";


        fenetre.style.top =
            (e.clientY - decalageY) + "px";

    });


    document.addEventListener("mouseup", function(){

        enDeplacement = false;

    });

}


/* =========================
   FENÊTRE DE CODE DÉPLAÇABLE
   ========================= */

document.addEventListener("DOMContentLoaded", function(){

    let fenetreCode =
        document.getElementById("fenetreCode");

    let barreCode =
        document.querySelector("#fenetreCode .barre");


    rendreDeplacable(
        fenetreCode,
        barreCode
    );

});
