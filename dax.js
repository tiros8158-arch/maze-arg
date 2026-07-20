function envoyer(){

let question = document.getElementById("question").value;

let ecran = document.getElementById("ecran");


ecran.innerHTML += "<p>TOI : " + question + "</p>";


let q = question.toLowerCase();


let reponse = "Je ne comprends pas encore.";


if(q.includes("tom")){

reponse = "Analyse...\nAccès interdit.\nERREUR : XxToMxX";

}


else if(q.includes("emillien")){

reponse = "Analyse...\nChasseur de primes identifié.\nERREUR : croximillien_5-6";

}


else if(q.includes("nok")){

reponse = "Analyse...\nProtection détectée.\nERREUR : epicxonder_5-6";

}


else if(q.includes("labo") || q.includes("laboratoire")){

reponse = "Analyse des archives...\nDestruction confirmée.\nERREUR : adieux.tom.labo";

}


else if(q.includes("maze")){

reponse = "Fondateur identifié : Dr. Maze.\nCertaines données sont supprimées.";

}


else if(q.includes("bonjour") || q.includes("salut")){

reponse = "Bonjour. Je suis DAX Prototype 3.";

}


ecran.innerHTML += "<p>DAX : " + reponse.replaceAll("\n","<br>") + "</p>";


document.getElementById("question").value="";


}
