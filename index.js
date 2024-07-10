
import { question } from 'readline-sync';
console.clear();


// Funktion , die Regeln zeigt.
function zeigtRegeln(){
console.log(`         
                                Hallo!

                    Das ist das Spiel 'Tic Tac Toe'.

=============================== REGELN ===============================
Du spielst gegen den Computer.
Am Anfang sollst du wählen, wer anfängt und ob du X oder 0 sein möchtest.
Dann sollst du ein freies Feld zwischen 1 und 9 wählen.

      1  |  2  |  3
    ----------------
      4  |  5  |  6
    ----------------
      7  |  8  |  9
      
Wenn du als Erster drei Zeichen in eine Zeile, Spalte oder Diagonale 
setzen kannst, gewinnst du. 

`
    
    )};


// Funktion, die bestimmt, ob der Spieler anfängt oder der Computer.
// Wenn der Mensch 'y' gewählt hat, wird True zurückgegeben.
function wähleWerFangtAn() {
    let antwort= question('Möchtest du anfangen? (y/n) :');
    antwort=antwort.trim().toLowerCase();
       
    while(antwort!='y' && antwort!='n'){
        antwort= question('Schreib bitte "y" oder "n" :');
        antwort=antwort.trim().toLowerCase();
    }   
    console.log( antwort=='y'?'Ok. Fängst du an': 'Ok. Fange ich an');
    return antwort=='y';// gib true zurück, wenn es richtig ist
}




// Funktion, die bestimmt, was der Spieler wird X oder O.

function wählenXO() {
    let antwort= question('Möchtest du X oder O sein? Schreib bitte "X" oder "0":');
    antwort=antwort.trim().toUpperCase();
     if (antwort=='o' || antwort=='O'){ // wenn man wählt Buchsctabe 'o' statt Ziffer 0
         antwort='0'
     };
       
    while(antwort!='X' && antwort!='0'){
        antwort= question('Schreib bitte "X" oder "0" :');
        antwort=antwort.trim().toUpperCase();
    }   
    console.log( antwort=='X'?'Ok. Du spielst für X': 'Ok. Du spielst für 0');
    let antwortComp= antwort=='X'?'0':'X'
    return [antwort, antwortComp];
    

};


// Funktion, die den Zug des Menschen nimmt.

function nimmtWahlvonMensch(arrMitWählen,  zeichenVonMehsch) {
    console.log(`
Jetzt du bist dran! `);
    let wahl= Number(question(`

Wält bitte frei Platz in Feld zwiesen 1 und 9: `));

    while((wahl-1)<0 || (wahl-1)>9 || arrMitWählen[wahl-1]!=' '){
         wahl= question('Das Feld ist nicht frei oder du hast keine Zahl zwischen 1 und 9 geschrieben. Versuch es noch einmal: ')
    }
    arrMitWählen[wahl-1]=zeichenVonMehsch;
    zeigtFeld(arrMitWählen);//Zeigt das aktuelle Spielfeld.
}

// Funktion, die den Zug des Computer nimmt.
function nimmtRandomWahl(arrMitWählen, zeichenVonComputer) {
    console.log(`

Jetzt bin ich dran!
`);
    let wahl=Math.floor(Math.random() * (9  + 1));

    while(arrMitWählen[wahl-1]!=' '){
        wahl= Math.floor(Math.random() * (9  + 1));
       
}
arrMitWählen[wahl-1]=zeichenVonComputer;
zeigtFeld(arrMitWählen);//Zeigt das aktuelle Spielfeld.
}


// Funktion, die das aktuelle Spielfeld zeigt
function zeigtFeld(arrMitWählen) {
   let strMitWählen='';
   for(let i=0; i<arrMitWählen.length; i++){
    strMitWählen+='  '+arrMitWählen[i]+'  ';
        if((i+1)%3==0 && (i+1)!=9){
            strMitWählen+='\n'+('-').repeat(16)+'\n';}  

        else if( (i+1)!= 9) {
            strMitWählen+='|'};
   
    
} 

    console.log(strMitWählen);
}



// Prüft, ob es jemand gewonnen hat.
function pruftSieg(arrMitWählen) {
 
    if(arrMitWählen[0]==arrMitWählen[1] && arrMitWählen[1]==arrMitWählen[2]&& arrMitWählen[0]!=' '){
        
            return [arrMitWählen[0], true];}// git  arr mit zeichen und true züruck
    else if(arrMitWählen[0]==arrMitWählen[3] && arrMitWählen[3]==arrMitWählen[6]&& arrMitWählen[0]!=' '){
        return [arrMitWählen[0], true];}
    
    else if(arrMitWählen[1]==arrMitWählen[4] && arrMitWählen[1]==arrMitWählen[7]&& arrMitWählen[1]!=' '){
        return [arrMitWählen[1], true];}


    else if(arrMitWählen[2]==arrMitWählen[5] && arrMitWählen[2]==arrMitWählen[8]&& arrMitWählen[2]!=' '){
        return [arrMitWählen[2], true];}
    
    else if(arrMitWählen[3]==arrMitWählen[4] && arrMitWählen[4]==arrMitWählen[5]&& arrMitWählen[3]!=' '){
        return [arrMitWählen[3], true];}
    else if(arrMitWählen[6]==arrMitWählen[7] && arrMitWählen[7]==arrMitWählen[8]&& arrMitWählen[6]!=' '){
        return [arrMitWählen[6], true];}

    
    else if(arrMitWählen[0]==arrMitWählen[4] && arrMitWählen[4]==arrMitWählen[8]&& arrMitWählen[0]!=' '){
        return [arrMitWählen[0], true];}
    else if(arrMitWählen[2]==arrMitWählen[4] && arrMitWählen[4]==arrMitWählen[6]&& arrMitWählen[2]!=' '){
        return [arrMitWählen[2], true];}
    else{
        return ['a', false];
    }

}



const arrMitWählen=[' ',' ',' ',
                    ' ',' ',' ',
                    ' ',' ',' ',];
 
 
zeigtRegeln();

 
const werErst=wähleWerFangtAn()
const [zeichenVonMehsch, zeichenVonComputer]= wählenXO();
console.log(`
  1  |  2  |  3
----------------
  4  |  5  |  6
----------------
  7  |  8  |  9`);

let [zeichen, antwort]=pruftSieg(arrMitWählen)

if(werErst){
    while(arrMitWählen.includes(' ')){
        [zeichen, antwort]=pruftSieg(arrMitWählen)
        if(antwort){
            console.log(zeichen==zeichenVonMehsch? `Glückwunsch! Du hast gewonnen.`: `Juhu, ich habe gewonnen.`);
            break
            }
            else{
                nimmtWahlvonMensch(arrMitWählen, zeichenVonMehsch)
                
                
            }
        [zeichen, antwort]=pruftSieg(arrMitWählen)
        if(antwort){ 
            console.log(zeichen==zeichenVonMehsch? `Glückwunsch! Du hast gewonnen.`: `Juhu, ich habe gewonnen.`);
            break
            }
        else{
            if(arrMitWählen.includes(' ')){
            nimmtRandomWahl(arrMitWählen, zeichenVonComputer)   }    
            }
    }}
else{
    while (arrMitWählen.includes(' ')) {
        [zeichen, antwort]=pruftSieg(arrMitWählen)
        if(antwort){
            console.log(zeichen==zeichenVonMehsch? `Glückwunsch! Du hast gewonnen.`: `Juhu, ich habe gewonnen.`);
            break
            }
            else{
                
                nimmtRandomWahl(arrMitWählen, zeichenVonComputer)
            }
        [zeichen, antwort]=pruftSieg(arrMitWählen)
        if(antwort){ 
            console.log(zeichen==zeichenVonMehsch? `Glückwunsch! Du hast gewonnen.`: `Juhu, ich habe gewonnen.`);
            break
            } 
        else{
            if(arrMitWählen.includes(' ')){        
            nimmtWahlvonMensch(arrMitWählen, zeichenVonMehsch)}
    }
}}

 if(pruftSieg(arrMitWählen)[1]==false){
 console.log(' Es ist unentschiedent'); 
  }


