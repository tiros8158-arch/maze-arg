let dossierActuel = "";

let fenetreTomOuverte = false;

/* =========================
SERVICE
========================= */

function ouvrirService(){

```
window.location.href = "Service.html";
```

}

/* =========================
DAX
========================= */

/*
DAX reste directement sur le bureau.
Il ouvre directement son écran DAX.
*/

function ouvrirDAX(){

```
window.location.href = "DAX.html";
```

}

/* =========================
ARCHIVE
========================= */

function ouvrirDossierArchive(){

```
afficherDossier(
    "Archive",
    [

        {
            nom: "The Tom",
            action: "ouvrirTom()"
        },

        {
            nom: "Creation",
            action: "ouvrirCreation()"
        },

        {
            nom: "Long Live to the King",
            action: "ouvrirKing()"
        },

        {
            nom: "Legion of Stationery",
            action: "ouvrirLegion()"
        },

        {
            nom: "Chaos",
            action: "ouvrirChaos()"
        },

        /*
           Les Archives DAX sont dans Archive.
        */

        {
            nom: "DAX Archive",
            action: "ouvrirDAXArchive()"
        },

        {
            nom: "DAX Prototype 3",
            action: "ouvrirDAX2()"
        },

        {
            nom: "Emillien",
            action: "ouvrirEmillien()"
        },

        {
            nom: "Nok",
            action: "ouvrirNok()"
        },

        {
            nom: "The Fury of the Gods",
            action: "ouvrirFury()"
        },

        {
            nom: "Destruction of Evidence",
            action: "ouvrirDestruction()"
        }

    ]
);
```

}

/* =========================
FICHIERS DE L'ARCHIVE
========================= */

function ouvrirTom(){

```
dossierActuel = "Tom";

afficherFenetreCode();
```

}

function ouvrirCreation(){

```
dossierActuel = "Creation";

afficherFenetreCode();
```

}

function ouvrirKing(){

```
dossierActuel = "King";

afficherFenetreCode();
```

}

function ouvrirLegion(){

```
dossierActuel = "Legion";

afficherFenetreCode();
```

}

function ouvrirChaos(){

```
dossierActuel = "Chaos";

afficherFenetreCode();
```

}

/* =========================
ARCHIVES DAX
========================= */

function ouvrirDAXArchive(){

```
dossierActuel = "DAX";

afficherFenetreCode();
```

}

function ouvrirDAX2(){

```
window.location.href = "DAX2.html";
```

}

function ouvrirEmillien(){

```
dossierActuel = "Emillien";

afficherFenetreCode();
```

}

function ouvrirNok(){

```
dossierActuel = "Nok";

afficherFenetreCode();
```

}

function ouvrirFury(){

```
dossierActuel = "Fury";

afficherFenetreCode();
```

}

function ouvrirDestruction(){

```
dossierActuel = "Destruction";

afficherFenetreCode();
```

}

/* =========================
CORBEILLE
========================= */

function ouvrirCorbeille(){

```
dossierActuel = "Corbeille";

afficherFenetreCode();
```

}

/* =========================
FENÊTRE DE CODE
========================= */

function afficherFenetreCode(){

```
let fenetre = document.getElementById("fenetreCode");

let contenu = document.getElementById("contenuCode");

if(!fenetre || !contenu){

    return;

}

fenetre.style.display = "block";

fenetre.style.zIndex = "600";

document.getElementById("code").value = "";

document.getElementById("message").textContent = "";
```

}

/* =========================
VÉRIFICATION DES CODES
========================= */

function verifierCode(){

```
let code = document.getElementById("code").value;

let destination = "";


if(dossierActuel === "Tom" && code === "XxToMxX"){

    afficherFenetreTom();

    return;

}


if(dossierActuel === "Creation" && code === "041P"){

    destination = "Creation.html";

}


else if(dossierActuel === "King" && code === "ABST_1"){

    destination = "Long_Live_to_the_King.html";

}


else if(dossierActuel === "Legion" && code === "ast-tsa"){

    destination = "Legion_of_Stationery.html";

}


else if(dossierActuel === "Chaos" && code === "htrostb"){

    destination = "Chaos.html";

}


else if(dossierActuel === "DAX" && code === "cronomonoserot_6-5"){

    destination = "DAX.html";

}


else if(dossierActuel === "Emillien" && code === "croximillien_5-6"){

    destination = "Emillien.html";

}


else if(dossierActuel === "Nok" && code === "epicxonder_5-6"){

    destination = "Nok.html";

}


else if(dossierActuel === "Fury" && code === "partypartyfolly"){

    destination = "The_Fury_of_the_Gods.html";

}


else if(dossierActuel === "Destruction" && code === "adieux.tom.labo"){

    destination = "Destruction_of_Evidence.html";

}


else if(dossierActuel === "Corbeille" && code === "041PTDY"){

    destination = "Corbeille.html";

}


if(destination !== ""){

    window.location.href = destination;

    return;

}


document.getElementById("message").textContent = "Code incorrect.";
```

}

/* =========================
RÉDUIRE LA FENÊTRE DE CODE
========================= */

function reduireCode(){

```
let contenu = document.getElementById("contenuCode");

if(!contenu){

    return;

}


if(contenu.style.display === "none"){

    contenu.style.display = "block";

}

else{

    contenu.style.display = "none";

}
```

}

/* =========================
FERMER LA FENÊTRE DE CODE
========================= */

function fermerCode(){

```
let fenetre = document.getElementById("fenetreCode");

if(fenetre){

    fenetre.style.display = "none";

}
```

}

/* =========================
FENÊTRE THE TOM
========================= */

function afficherFenetreTom(){

```
if(fenetreTomOuverte){

    return;

}


let fenetre = document.createElement("div");

fenetre.id = "fenetreTom";

fenetre.className = "fenetreTom";


fenetre.innerHTML = `

    <div class="barre">

        <span>The Tom</span>

        <div class="boutonsFenetre">

            <button onclick="reduireTom()">—</button>

            <button onclick="fermerTom()">X</button>

        </div>

    </div>


    <div id="contenuTom" class="contenu">

        <h2>The Tom</h2>

        <p>Fichier sécurisé.</p>

    </div>

`;


document.body.appendChild(fenetre);


fenetreTomOuverte = true;


rendreDeplacable(

    fenetre,

    fenetre.querySelector(".barre")

);
```

}

/* =========================
RÉDUIRE THE TOM
========================= */

function reduireTom(){

```
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
```

}

/* =========================
FERMER THE TOM
========================= */

function fermerTom(){

```
let fenetre = document.getElementById("fenetreTom");

if(fenetre){

    fenetre.remove();

}

fenetreTomOuverte = false;
```

}

/* =========================
CRÉATION D'UNE FENÊTRE DE DOSSIER
========================= */

function afficherDossier(nom, fichiers){

```
let ancienneFenetre = document.getElementById("fenetreDossier");

if(ancienneFenetre){

    ancienneFenetre.remove();

}


let fenetre = document.createElement("div");

fenetre.id = "fenetreDossier";

fenetre.className = "fenetreDossier";


let contenuFichiers = "";


fichiers.forEach(function(fichier){

    contenuFichiers += `

        <div class="fichier" onclick="${fichier.action}">

            <img src="images/fichier.png">

            <p>${fichier.nom}</p>

        </div>

    `;

});


fenetre.innerHTML = `

    <div class="barre">

        <span>${nom}</span>

        <div class="boutonsFenetre">

            <button onclick="fermerDossier()">X</button>

        </div>

    </div>


    <div class="contenuDossier">

        <div class="grilleFichiers">

            ${contenuFichiers}

        </div>

    </div>

`;


document.body.appendChild(fenetre);


rendreDeplacable(

    fenetre,

    fenetre.querySelector(".barre")

);
```

}

/* =========================
FERMER LE DOSSIER
========================= */

function fermerDossier(){

```
let fenetre = document.getElementById("fenetreDossier");

if(fenetre){

    fenetre.remove();

}
```

}

/* =========================
FENÊTRES DÉPLAÇABLES
========================= */

function rendreDeplacable(fenetre, barre){

```
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
```

}

/* =========================
FENÊTRE DE CODE DÉPLAÇABLE
========================= */

document.addEventListener("DOMContentLoaded", function(){

```
let fenetreCode =
    document.getElementById("fenetreCode");


let barreCode =
    document.querySelector("#fenetreCode .barre");


rendreDeplacable(

    fenetreCode,

    barreCode

);
```

});
