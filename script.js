let dossierActuel = "";



function ouvrirCreation(){
    dossierActuel = "Creation";
    document.getElementById("fenetreCode").style.display="block";
}



function ouvrirTom(){
    dossierActuel = "Tom";
    document.getElementById("fenetreCode").style.display="block";
}



function ouvrirKing(){
    dossierActuel = "King";
    document.getElementById("fenetreCode").style.display="block";
}



function ouvrirLegion(){
    dossierActuel = "Legion";
    document.getElementById("fenetreCode").style.display="block";
}



function ouvrirChaos(){
    dossierActuel = "Chaos";
    document.getElementById("fenetreCode").style.display="block";
}



function ouvrirDAX(){
    dossierActuel = "DAX";
    document.getElementById("fenetreCode").style.display="block";
}



function ouvrirDAX2(){

    window.location.href = "DAX2.html";

}



function ouvrirEmillien(){
    dossierActuel = "Emillien";
    document.getElementById("fenetreCode").style.display="block";
}



function ouvrirNok(){
    dossierActuel = "Nok";
    document.getElementById("fenetreCode").style.display="block";
}



function ouvrirFury(){
    dossierActuel = "Fury";
    document.getElementById("fenetreCode").style.display="block";
}



function ouvrirDestruction(){
    dossierActuel = "Destruction";
    document.getElementById("fenetreCode").style.display="block";
}




function verifierCode(){

let code = document.getElementById("code").value;



if(dossierActuel=="Creation" && code=="041P"){
    window.location.href="Creation.html";
}


else if(dossierActuel=="Tom" && code=="XxToMxX"){
    window.location.href="The_Tom.html";
}


else if(dossierActuel=="King" && code=="ABST_1"){
    window.location.href="Long_Live_to_the_King.html";
}


else if(dossierActuel=="Legion" && code=="ast-tsa"){
    window.location.href="Legion_of_Stationery.html";
}


else if(dossierActuel=="Chaos" && code=="htrostb"){
    window.location.href="Chaos.html";
}


else if(dossierActuel=="DAX" && code=="cronomonoserot_6-5"){
    window.location.href="DAX.html";
}


else if(dossierActuel=="Emillien" && code=="croximillien_5-6"){
    window.location.href="Emillien.html";
}


else if(dossierActuel=="Nok" && code=="epicxonder_5-6"){
    window.location.href="Nok.html";
}


else if(dossierActuel=="Fury" && code=="partypartyfolly"){
    window.location.href="The_Fury_of_the_Gods.html";
}


else if(dossierActuel=="Destruction" && code=="adieux.tom.labo"){
    window.location.href="Destruction_of_Evidence.html";
}


else{

document.getElementById("message").innerHTML="CODE REFUSÉ";

}


}
