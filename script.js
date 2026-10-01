```javascript
let dossierActuel = "";

let fenetreCodeReduite = false;

let fenetreTomOuverte = false;



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



/* Afficher la fenêtre de code */

function afficherFenetreCode(){

    let fenetre = document.getElementById("fenetreCode");

    fenetre.style.display = "block";

    fenetre.style.width = "400px";

    fenetreReduiteCode = false;

}



/* Fermer la fenêtre de code */

function fermerCode(){

    document.getElementById("fenetreCode").style.display = "none";

}



/* Réduire la fenêtre de code */

function reduireCode(){

    let fenetre = document.getElementById("fenetreCode");

    let contenu = fenetre.querySelector(".contenu");

    if(contenu.style.display === "none"){

        contenu.style.display = "block";

    }

    else{

        contenu.style.display = "none";

    }

}



/* Vérification du code */

function verifierCode(){

    let code = document.getElementById("code").value;



    if(dossierActuel=="Tom" && code=="XxToMxX"){

        fermerCode();

        ouvrirFenetreTom();

        return;

    }



    if(dossierActuel=="Creation" && code=="041P"){

        window.location.href="Creation.html";

        return;

    }



    if(dossierActuel=="King" && code=="ABST_1"){

        window.location.href="Long_Live_to_the_King.html";

        return;

    }



    if(dossierActuel=="Legion" && code=="ast-tsa"){

        window.location.href="Legion_of_Stationery.html";

        return;

    }



    if(dossierActuel=="Chaos" && code=="htrostb"){

        window.location.href="Chaos.html";

        return;

    }



    if(dossierActuel=="DAX" && code=="cronomonoserot_6-5"){

        window.location.href="DAX.html";

        return;

    }



    if(dossierActuel=="Emillien" && code=="croximillien_5-6"){

        window.location.href="Emillien.html";

        return;

    }



    if(dossierActuel=="Nok" && code=="epicxonder_5-6"){

        window.location.href="Nok.html";

        return;

    }



    if(dossierActuel=="Fury" && code=="partypartyfolly"){

        window.location.href="The_Fury_of_the_Gods.html";

        return;

    }



    if(dossierActuel=="Destruction" && code=="adieux.tom.labo"){

        window.location.href="Destruction_of_Evidence.html";

        return;

    }



    if(dossierActuel=="Corbeille" && code=="041PTDY"){

        window.location.href="Corbeille.html";

        return;

    }



    document.getElementById("message").innerHTML="CODE REFUSÉ";

}



/* Ouvrir The Tom comme fenêtre */

async function ouvrirFenetreTom(){

    if(fenetreTomOuverte){

        let ancienne = document.getElementById("fenetreTom");

        if(ancienne){

            ancienne.style.display="block";

            ancienne.style.zIndex=200;

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



    try{

        let reponse = await fetch("The_Tom.html");

        let texte = await reponse.text();



        let page = new DOMParser().parseFromString(texte, "text/html");

        let contenu = page.querySelector(".contenu");



        if(contenu){

            document.getElementById("contenuTom").innerHTML = contenu.innerHTML;

        }

        else{

            document.getElementById("contenuTom").innerHTML = "Erreur de lecture du fichier.";

        }

    }

    catch(erreur){

        document.getElementById("contenuTom").innerHTML = "Erreur de chargement.";

    }



    rendreDeplacable(

        fenetre,

        document.getElementById("barreTom")

    );

}



/* Réduire The Tom */

function reduireTom(){

    let fenetre = document.getElementById("fenetreTom");

    let contenu = document.getElementById("contenuTom");



    if(contenu.style.display === "none"){

        contenu.style.display = "block";

    }

    else{

        contenu.style.display = "none";

    }

}



/* Fermer The Tom */

function fermerTom(){

    let fenetre = document.getElementById("fenetreTom");



    if(fenetre){

        fenetre.remove();

    }



    fenetreTomOuverte = false;

}



/* Rendre une fenêtre déplaçable */

function rendreDeplacable(fenetre, barre){

    let enDeplacement = false;

    let decalageX = 0;

    let decalageY = 0;



    barre.addEventListener("mousedown", function(e){

        enDeplacement = true;



        let rectangle = fenetre.getBoundingClientRect();



        decalageX = e.clientX - rectangle.left;

        decalageY = e.clientY - rectangle.top;



        fenetre.style.zIndex = 300;



        e.preventDefault();

    });



    document.addEventListener("mousemove", function(e){

        if(!enDeplacement){

            return;

        }



        fenetre.style.left = (e.clientX - decalageX) + "px";

        fenetre.style.top = (e.clientY - decalageY) + "px";

    });



    document.addEventListener("mouseup", function(){

        enDeplacement = false;

    });

}



/* Fenêtre de code déplaçable */

rendreDeplacable(

    document.getElementById("fenetreCode"),

    document.querySelector("#fenetreCode .barre")

);
```
