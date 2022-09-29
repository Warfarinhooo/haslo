var iloscZn=8;
var iloscWolnychZnakow=0;
var iloscDuzeL=0;
var iloscMaleL=0;
var iloscCyfr=0;
var iloscZnakowSp=0;

function reset(){
    iloscCyfr=0;
    document.getElementById("iloscCyfr").value=0;
    document.getElementById("wybieranieCyfr").value=0;
    iloscMaleL=0;
    document.getElementById("iloscMaleL").value=0;
    document.getElementById("wybMaleL").value=0;
    iloscDuzeL=0;
    document.getElementById("iloscDuzeL").value=0;
    document.getElementById("wybDuzeL").value=0;
    iloscZnakowSp=0;
    document.getElementById("iloscZnakowSp").value=0;
    document.getElementById("wybieranieZnakowSp").value=0;
}

function ustawWolne(){
    iloscWolnychZnakow=+iloscZn-(+iloscDuzeL+ +iloscMaleL+ +iloscCyfr+ +iloscZnakowSp);
    if (iloscWolnychZnakow<0){
        reset();
        alert("funkcja idiotoodporna, za mało znaków");
    }
    document.getElementById("iloscDuzeL").max=+iloscWolnychZnakow+ +iloscDuzeL;
    document.getElementById("iloscMaleL").max=+iloscWolnychZnakow+ +iloscMaleL;
    document.getElementById("iloscCyfr").max=+iloscWolnychZnakow+ +iloscCyfr;
    document.getElementById("iloscZnakowSp").max=+iloscWolnychZnakow+ +iloscZnakowSp;

}

function wybieranieDuzeL(){
    iloscDuzeL=document.getElementById("iloscDuzeL").value;
    document.getElementById("wybDuzeL").value=iloscDuzeL;
    ustawWolne()
}
function wybieranieMaleL(){
    iloscMaleL=document.getElementById("iloscMaleL").value;
    document.getElementById("wybMaleL").value=iloscMaleL;
    ustawWolne()
}
function wybieranieCyfr(){
    iloscCyfr=document.getElementById("iloscCyfr").value;
    document.getElementById("wybieranieCyfr").value=iloscCyfr;
    ustawWolne()
}
function wybieranieZnakowSp(){
    iloscZnakowSp=document.getElementById("iloscZnakowSp").value;
    document.getElementById("wybieranieZnakowSp").value=iloscZnakowSp;
    ustawWolne()
}
function iloscZnakow(){
    iloscZn=document.getElementById("iloscZnakow").value;
    ustawWolne()
}
function generujHaslo(){
    let haslo="";
    const alfabetMale="abcdefghijhklmnoprstuvwxyz";
    const alfabetDuze='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const cyfry='0123456789';
    const znaki='!@#$%^&*'
    //losowanie malych liter
    for(let i=0;i<iloscMaleL;i++){
        haslo+=alfabetMale.charAt(Math.floor(Math.random()*alfabetMale.length));
    }
    //losowanie duzych liter
    for(let i=0;i<iloscDuzeL;i++){
        haslo+=alfabetDuze[Math.floor(Math.random()*alfabetDuze.length)];
    }
    //losowanie cyfr
    for(let i=0;i<iloscCyfr;i++){
        haslo+=cyfry[Math.floor(Math.random()*cyfry.length)];
    }
    //losowanie znakowSp
    for(let i=0;i<iloscZnakowSp;i++){
        haslo+=znaki[Math.floor(Math.random()*znaki.length)];
    }
    // losowanie znaków których nie ma
    for(let i=0;i<iloscWolnychZnakow;i++){
        haslo+=alfabetMale.charAt(Math.floor(Math.random()*alfabetMale.length));
    }
        // let dane=zmianaKolejnosci(haslo);
    document.getElementById("haslo").value=zmianaKolejnosci(haslo);
}
function zmianaKolejnosci(haslo){
    let wynik=haslo.split('');
    for(let i=0;i<wynik.length;i++){
        let los=Math.floor(Math.random()*wynik.length);
        let tmp=wynik[i];
        wynik[i]=wynik[los];
        wynik[los]=tmp;
    }
    haslo=wynik.join('');
    return haslo;
}
