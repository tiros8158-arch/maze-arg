```javascript
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


function fermerCode(){

    let fenetre = document.getElementById("fenetreCode");

    if(fenetre){
        fenetre.style.display = "none";
    }

}


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


    /* AUTRES DOSSIERS */

    if(dossierActuel == "Creation" && code == "041P"){
        window.location.href = "Creation.html";
        return;
    }


    if(dossierActuel == "King" && code == "ABST_1"){
        window.location.href = "Long_Live_to_the_King.html";
        return;
    }


    if(dossierActuel == "Legion" && code == "ast-tsa"){
        window.location.href = "Legion_of_Stationery.html";
        return;
    }


    if(dossierActuel == "Chaos" && code == "htrostb"){
        window.location.href = "Chaos.html";
        return;
    }


    if(dossierActuel == "DAX" && code == "cronomonoserot_6-5"){
        window.location.href = "DAX.html";
        return;
    }


    if(dossierActuel == "Emillien" && code == "croximillien_5-6"){
        window.location.href = "Emillien.html";
        return;
    }


    if(dossierActuel == "Nok" && code == "epicxonder_5-6"){
        window.location.href = "Nok.html";
        return;
    }


    if(dossierActuel == "Fury" && code == "partypartyfolly"){
        window.location.href = "The_Fury_of_the_Gods.html";
        return;
    }


    if(dossierActuel == "Destruction" && code == "adieux.tom.labo"){
        window.location.href = "Destruction_of_Evidence.html";
        return;
    }


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

async function ouvrirFenetreTom(){

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

            Chargement...

        </div>

    `;


    document.body.appendChild(fenetre);

    fenetreTomOuverte = true;


    /* Charger le contenu de The_Tom.html */

    try{

        let reponse = await fetch("The_Tom.html");

        let texte = await reponse.text();

        let page = new DOMParser().parseFromString(
            texte,
            "text/html"
        );

        let contenu = page.querySelector(".contenu");


        if(contenu){

            document.getElementById("contenuTom").innerHTML =
                contenu.innerHTML;

        }
        else{

            document.getElementById("contenuTom").innerHTML =
                "Erreur de lecture du fichier.";

        }

    }
    catch(erreur){

        document.getElementById("contenuTom").innerHTML =
            "Erreur de chargement.";

    }


    /* Rendre The Tom déplaçable */

    rendreDeplacable(
        fenetre,
        document.getElementById("barreTom")
    );

}


/* =========================
   RÉDUIRE THE TOM
   ========================= */

function reduireTom(){

    let fenetre = document.getElementById("fenetreTom");

    let contenu = document.getElementById("contenuTom");


    if(!fenetre || !contenu){
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
   RENDRE LA FENÊTRE DE CODE
   DÉPLAÇABLE
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
```
