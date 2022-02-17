/**************ELEMENTS IDS STARTED**************/
var form= document.getElementById("myForm");
var nom= document.getElementById("nom");
var prenom= document.getElementById("prenom");
var ddn= document.getElementById("ddn");
var cp= document.getElementById("cp");
var adresse= document.getElementById("adresse");
var ville= document.getElementById("ville");
var email= document.getElementById("email");
/**************ELEMENTS IDS ENDED**************/


///////////////////REGEX ////////////////////
var prenomVerification= /^[A-Za-z]{3,12}$/;
var valeur_prenom= prenom.value;
var nomVerification= /^[A-Za-z]{3,12}$/;
var valeur_nom= nom.value;
var cpVerification= /^[\d]{5}$/;
var valeur_cp= cp.value;
var adresseVerification= /^([a-zA-z0-9/\\''(),-\s]{2,255})$/;
var valeur_adresse= adresse.value;
var villeVerification= /^[\w]{3,12}$/;
var valeur_ville= ville.value;
var emailVerification= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
var valeur_email= email.value;
var ddnVerification= /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
var valeur_ddn= ddn.value;
///////////////////REGEX ENDED////////////////////


/**************FORM VALIDATION STARTED**************/
form.addEventListener('submit', function(e) {
///////////////////VALUES STARTED////////////////////
var prenomResultat = prenomVerification.test(prenom.value);
var nomResultat = nomVerification.test(nom.value);
var cpResultat = cpVerification.test(cp.value);
var adresseResultat = adresseVerification.test(adresse.value);
var villeResultat = villeVerification.test(ville.value);
var emailResultat = emailVerification.test(email.value);
var ddnResultat = ddnVerification.test(ddn.value);
///////////////////VALUES ENDED////////////////////


/**********************IF/ELSE IF STARTED**********************/
///////////////////FIRST NAME EMPTY/ERROR////////////////////
    if(prenom.value==""){
    var prenom_Write_Error=document.getElementById("prenomWriteError");
    prenom_Write_Error.innerHTML="Veuillez écrire votre prénom";
    e.preventDefault();

    }
    else if(!prenomResultat){
    var prenom_Write_Error=document.getElementById("prenomWriteError");
    prenom_Write_Error.innerHTML="Le prénom doit comporter de 3 à 12 lettres";
    e.preventDefault();
    }
    else { prenomWriteError.style.display = 'none';}
///////////////////LAST NAME EMPTY/ERROR///////////////////
    if(nom.value==""){
    var nom_Write_Error=document.getElementById("nomWriteError");
    nom_Write_Error.innerHTML="Veuillez écrire votre nom";
    e.preventDefault();
 
    }
    else if(!nomResultat){
    var nom_Write_Error=document.getElementById("nomWriteError");
    nom_Write_Error.innerHTML="Le nom doit comporter de 3 à 12 lettres";
    e.preventDefault();
    }
    else { nomWriteError.style.display = 'none';}
 ///////////////////CP EMPTY/ERROR///////////////////
   if(cp.value==""){
   var cp_Write_Error=document.getElementById("cpWriteError");
   cp_Write_Error.innerHTML="Saisissez votre code postal";
   e.preventDefault();
    }
   else if(!cpResultat){
   var cp_Write_Error=document.getElementById("cpWriteError");
   cp_Write_Error.innerHTML="Veuillez entrer un code postal correct";
   e.preventDefault();
    }
   else { cpWriteError.style.display = 'none';}
///////////////////ADRESSE EMPTY/ERROR///////////////////
   if(adresse.value==""){
   var adresse_Write_Error=document.getElementById("adresseWriteError");
   adresse_Write_Error.innerHTML="Saisissez votre adresse";
   e.preventDefault();
   } 
   else if(!adresseResultat){
   var adresse_Write_Error=document.getElementById("adresseWriteError");
   adresse_Write_Error.innerHTML="Veuillez entrer une adresse correcte";
   e.preventDefault();
   }
   else { adresseWriteError.style.display = 'none';}
 ///////////////////CITY EMPTY/ERROR///////////////////
   if(ville.value==""){
   var ville_Write_Error=document.getElementById("villeWriteError");
   ville_Write_Error.innerHTML="Indiquez le nom de votre ville";
   e.preventDefault();
   } 
   else if(!villeResultat){
   var ville_Write_Error=document.getElementById("villeWriteError");
   ville_Write_Error.innerHTML="Veuillez entrer un nom de ville correct";
   e.preventDefault();
   }
   else { villeWriteError.style.display = 'none';}
 ///////////////////EMAIL EMPTY/ERROR///////////////////
   if(email.value==""){
   var email_Write_Error=document.getElementById("emailWriteError");
   email_Write_Error.innerHTML="Entrez votre adresse e-mail";
   e.preventDefault();  
   } 
   else if(!emailResultat){
   var email_Write_Error=document.getElementById("emailWriteError");
   email_Write_Error.innerHTML="Veuillez entrer un email correct";
   e.preventDefault();
   }
   else { emailWriteError.style.display = 'none';}
 ///////////////////DOB EMPTY/ERROR///////////////////
   if(ddn.value==""){
   var ddn_Write_Error=document.getElementById("ddnWriteError");
   ddn_Write_Error.innerHTML="Entrez votre date de nasissance";
   e.preventDefault();
   } 
   else if(!ddnResultat){
   var ddn_Write_Error=document.getElementById("ddnWriteError");
   ddn_Write_Error.innerHTML="Veuillez entrer un date de naissance correct";
   e.preventDefault();
   }
   else { ddnWriteError.style.display = 'none';}
   }) 
 /**********************IF/ELSE IF ENDED**********************/
   var gen= document.forms["myForm"]["sexe"];
   if(gen[0].checked==false&&gen[1].checked==false)
   {
   var sexeOK=document.getElementById("sexeWriteError");
   sexeOK.innerHTML="Veuillez sélectionner votre sexe";
   e.preventDefault();
   }
   else if (gen[0].checked==true&&gen[1].checked==true)
   { sexeWriteError.style.display = 'none';

   }
   else { sexeWriteError.style.display = 'none';}
