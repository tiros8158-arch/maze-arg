function menuPrincipal(){

document.getElementById("contenuService").innerHTML=`

<p>Bienvenue sur le service de ####</p>

<button onclick="detruire()">
1 - Se débarrasser de votre ####
</button>

<br><br>

<button onclick="informations()">
2 - Informations
</button>

<br><br>

<button onclick="bizarre()">
3 - Il est bizarre
</button>

<br><br>

<button onclick="reparation()">
4 - Service de réparation
</button>

<br><br>

<button onclick="window.location.href='index.html'">
Quitter
</button>

`;

}



function detruire(){

document.getElementById("contenuService").innerHTML=`

<p><b>Coordonnées GPS trouvées</b></p>

<p>
Latitude : 45.9750° N<br>
Longitude : 5.1167° E
</p>

<p>
Une machine capable de désintégrer le #### du monde se trouve à cet endroit.
</p>

<button onclick="menuPrincipal()">
N - Retour
</button>

`;

}



function informations(){

document.getElementById("contenuService").innerHTML=`

<p>Tapez :</p>

<button onclick="comportement()">
1 - Informations sur le comportement
</button>

<br><br>

<button onclick="personnalite()">
2 - Informations sur la personnalité
</button>

<br><br>

<button onclick="libre()">
3 - Informations libres
</button>

<br><br>

<button onclick="menuPrincipal()">
0 - Retour
</button>

`;

}



function comportement(){

document.getElementById("contenuService").innerHTML=`

<p><b>Comportement du ####</b></p>

<p>
Le #### est très énergique et théâtral.<br><br>
Il est très très très très très très très énergique.<br><br>
Il adore la musique.<br><br>
Il déteste être seul.
</p>

<button onclick="informations()">
0 - Retour
</button>

`;

}
function personnalite(){

document.getElementById("contenuService").innerHTML=`

<p>
Veuillez entrer le numéro de série de votre #### :
</p>

<input id="serie" type="text">

<br><br>

<button onclick="verifierSerie()">
Valider
</button>

<br><br>

<button onclick="informations()">
0 - Retour
</button>

`;

}



function verifierSerie(){

let serie = document.getElementById("serie").value;


if(serie=="55341"){

document.getElementById("contenuService").innerHTML=`

<p><b>ACCESS AUTORISÉ</b></p>

<p>
LEAVE THE HUGE MAZE LABORATORY<br>
OR THE MASTER WILL SETTLE YOUR ACCOUNT
</p>

<button onclick="informations()">
0 - Retour
</button>

`;

}

else{

document.getElementById("contenuService").innerHTML=`

<p>
NUMÉRO DE SÉRIE INVALIDE
</p>

<button onclick="personnalite()">
Réessayer
</button>

<br><br>

<button onclick="informations()">
0 - Retour
</button>

`;

}

}



function libre(){

document.getElementById("contenuService").innerHTML=`

<p><b>Recherche d'informations libres...</b></p>

<p>
Connexion aux données...
</p>

<p>
ERREUR : INTERNET NON CONNECTÉ
</p>

<p>
Impossible d'accéder aux informations libres.
</p>

<button onclick="informations()">
0 - Retour
</button>

`;

}
function bizarre(){

document.getElementById("contenuService").innerHTML=`

<p>
Votre #### est bizarre dans :
</p>

<button onclick="bizarreComportement()">
1 - Son comportement
</button>

<br><br>

<button onclick="bizarreCouleur()">
2 - Sa couleur
</button>

<br><br>

<button onclick="bizarrePersonnalite()">
3 - Sa personnalité
</button>

<br><br>

<button onclick="bizarreBouffer()">
4 - Il veut vous bouffer
</button>

<br><br>

<button onclick="menuPrincipal()">
0 - Retour
</button>

`;

}



function bizarreComportement(){

document.getElementById("contenuService").innerHTML=`

<p><b>Analyse du comportement</b></p>

<p>
Essayez de le comprendre et de voir ce qui ne va pas.
</p>

<button onclick="bizarre()">
0 - Retour
</button>

`;

}



function bizarreCouleur(){

document.getElementById("contenuService").innerHTML=`

<p><b>Analyse de la couleur</b></p>

<p>
La couleur du #### semble anormale.<br><br>
Les données indiquent une variation inconnue.
</p>

<button onclick="bizarre()">
0 - Retour
</button>

`;

}
function bizarrePersonnalite(){

document.getElementById("contenuService").innerHTML=`

<p><b>Analyse de la personnalité</b></p>

<p>
La personnalité du #### présente des anomalies.<br><br>
Le comportement émotionnel semble instable.
</p>

<button onclick="bizarre()">
0 - Retour
</button>

`;

}
function bizarreBouffer(){

document.getElementById("contenuService").innerHTML=`

<p><b>ALERTE DANGER</b></p>

<p>
Le #### montre un comportement hostile.<br><br>
Il semble vouloir vous bouffer.<br><br>
Appelez rapidement le service de réparation.
</p>

<button onclick="bizarre()">
0 - Retour
</button>

`;

}
function reparation(){

document.getElementById("contenuService").innerHTML=`

<p><b>Service de réparation</b></p>

<p>
Veuillez entrer vos coordonnées GPS.<br><br>
Le service viendra réparer votre ####.
</p>

<label>Latitude :</label><br>
<input id="latitude" type="text">

<br><br>

<label>Longitude :</label><br>
<input id="longitude" type="text">

<br><br>

<button onclick="envoyerCoordonnees()">
Envoyer
</button>

<br><br>

<button onclick="menuPrincipal()">
N - Retour
</button>

`;

}



 function envoyerCoordonnees(){

let lat = document.getElementById("latitude").value;
let lon = document.getElementById("longitude").value;


if(
(lat=="45.9750° N" && lon=="5.1167° E") ||
(lat=="48.8589°" && lon=="2.347°")
){

document.getElementById("contenuService").innerHTML=`

<p><b>MESSAGE DE MAZE</b></p>

<p>
Désolé pour ça, mais je ne peux plus continuer.<br><br>

Ma création, Tom, souffre.<br>
Je dois la libérer.<br><br>

Sachez que ces coordonnées mènent à un petit village.<br>
Je vous conseille d'y aller.<br><br>

Faites attention.<br><br>

Ma création, que le système appelle ####,
a pour vrai nom l'Ange.<br>
C'est Tom.<br><br>

Le système préfère remplacer son nom par ####.<br><br>

Adieux.
</p>

<button onclick="menuPrincipal()">
N - Retour
</button>

`;

}

else{

document.getElementById("contenuService").innerHTML=`

<p><b>Demande envoyée</b></p>

<p>
Coordonnées reçues :<br><br>

Latitude : ${lat}<br>
Longitude : ${lon}
</p>

<p>
Le service de réparation arrive bientôt...
</p>

<button onclick="menuPrincipal()">
N - Retour
</button>

`;

}

}
