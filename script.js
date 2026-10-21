let dossierActuel = "";
let fenetreTomOuverte = false;

/* =========================
SERVICE
========================= */
function ouvrirService(){
    window.location.href = "Service.html";
}

/* =========================
DAX (Bureau)
========================= */
function ouvrirDAX(){
    window.location.href = "DAX.html";
}

/* =========================
ARCHIVE (Avec DAX2 pour DAX archive)
========================= */
function ouvrirDossierArchive(){
    afficherDossier(
        "Archive",
        [
            { nom: "Creation", action: "ouvrirCreation()" },
            { nom: "Long Live to the King", action: "ouvrirKing()" },
            { nom: "The Tom", action: "ouvrirTom()" },
            { nom: "Legion of Stationery", action: "ouvrirLegion()" },
            { nom: "Chaos", action: "ouvrirChaos()" },
            { nom: "DAX archive", action: "ouvrirDAX2()" },
            { nom: "Emillien", action: "ouvrirEmillien()" },
            { nom: "Nok", action: "ouvrirNok()" },
            { nom: "The Fury of the Gods", action: "ouvrirFury()" },
            { nom: "Destruction of Evidence", action: "ouvrirDestruction()" }
        ]
    );
}

/* =========================
FICHIERS DE L'ARCHIVE
========================= */
function ouvrirCreation(){ dossierActuel = "Creation"; afficherFenetreCode(); }
function ouvrirKing(){ dossierActuel = "King"; afficherFenetreCode(); }
function ouvrirTom(){ dossierActuel = "Tom"; afficherFenetreCode(); }
function ouvrirLegion(){ dossierActuel = "Legion"; afficherFenetreCode(); }
function ouvrirChaos(){ dossierActuel = "Chaos"; afficherFenetreCode(); }
function ouvrirDAX2(){ window.location.href = "DAX2.html"; }
function ouvrirEmillien(){ dossierActuel = "Emillien"; afficherFenetreCode(); }
function ouvrirNok(){ dossierActuel = "Nok"; afficherFenetreCode(); }
function ouvrirFury(){ dossierActuel = "Fury"; afficherFenetreCode(); }
function ouvrirDestruction(){ dossierActuel = "Destruction"; afficherFenetreCode(); }

/* =========================
CORBEILLE
========================= */
function ouvrirCorbeille(){
    dossierActuel = "Corbeille";
    afficherFenetreCode();
}

/* =========================
FENÊTRE DE CODE
========================= */
function afficherFenetreCode(){
    let fenetre = document.getElementById("fenetreCode");
    let contenu = document.getElementById("contenuCode");

    if(!fenetre || !contenu){
        return;
    }

    fenetre.style.display = "block";
    fenetre.style.zIndex = "600";
    document.getElementById("code").value = "";
    document.getElementById("message").textContent = "";
}

/* =========================
VÉRIFICATION DES CODES
========================= */
function verifierCode(){
    let code = document.getElementById("code").value;
    let destination = "";

    if(dossierActuel === "Tom" && code === "XxToMxX"){
        destination = "The_Tom.html";
    }
    else if(dossierActuel === "Creation" && code === "041P"){
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
}

/* =========================
RÉDUIRE / FERMER CODE
========================= */
function reduireCode(){
    let contenu = document.getElementById("contenuCode");
    if(!contenu){ return; }
    contenu.style.display = (contenu.style.display === "none") ? "block" : "none";
}

function fermerCode(){
    let fenetre = document.getElementById("fenetreCode");
    if(fenetre){
        fenetre.style.display = "none";
    }
}

/* =========================
DOSSIER D'ARCHIVES
========================= */
function afficherDossier(nom, fichiers){
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
            <div class="titreBarre">
                <button class="btnRetour" onclick="fermerDossier()" title="Retour">🡠</button>
                <span>${nom}</span>
            </div>
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
    rendreDeplacable(fenetre, fenetre.querySelector(".barre"));
}

function fermerDossier(){
    let fenetre = document.getElementById("fenetreDossier");
    if(fenetre){
        fenetre.remove();
    }
}

/* =========================
FENÊTRES DÉPLAÇABLES
========================= */
function rendreDeplacable(fenetre, barre){
    if(!fenetre || !barre){ return; }

    let enDeplacement = false;
    let decalageX = 0;
    let decalageY = 0;

    barre.addEventListener("mousedown", function(e){
        enDeplacement = true;
        let rectangle = fenetre.getBoundingClientRect();
        decalageX = e.clientX - rectangle.left;
        decalageY = e.clientY - rectangle.top;
        fenetre.style.zIndex = "700";
        e.preventDefault();
    });

    document.addEventListener("mousemove", function(e){
        if(!enDeplacement){ return; }
        fenetre.style.left = (e.clientX - decalageX) + "px";
        fenetre.style.top = (e.clientY - decalageY) + "px";
    });

    document.addEventListener("mouseup", function(){
        enDeplacement = false;
    });
}

document.addEventListener("DOMContentLoaded", function(){
    let fenetreCode = document.getElementById("fenetreCode");
    let barreCode = document.querySelector("#fenetreCode .barre");
    if(fenetreCode && barreCode){
        rendreDeplacable(fenetreCode, barreCode);
    }
});
