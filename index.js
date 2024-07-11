
import { question } from 'readline-sync';
console.clear();
                                                                                                                         
                                                                                                                                                                                                
// Funktion , die Regeln zeigt.
function zeigtRegeln(){
console.log(`         
                                Hallo!

                    Das ist das Spiel \x1b[5m\x1b[38;2;255;255;0m'Tic Tac Toe'\x1b[0m 

=============================== REGELN ===============================
Du spielst gegen den Computer.
Am Anfang sollst du wählen, wer anfängt und ob du X oder 0 sein möchtest.
Dann sollst du ein freies Feld zwischen 1 und 9 wählen. 

        \x1b[5m\x1b[38;2;255;255;0m  1  |  2  |  3\x1b[0m
        \x1b[5m\x1b[38;2;255;255;0m ---------------\x1b[0m    
        \x1b[5m\x1b[38;2;255;255;0m  4  |  5  |  6\x1b[0m
        \x1b[5m\x1b[38;2;255;255;0m ---------------\x1b[0m
        \x1b[5m\x1b[38;2;255;255;0m  7  |  8  |  9\x1b[0m  

Wenn du als Erster drei Zeichen in eine Zeile, Spalte oder Diagonale 
setzen kannst, gewinnst du. 

`);    
};

// Funktion, die nimmt anwort auf Ja/Nein fragen
// Wenn der Mensch 'y' gewählt hat, wird True zurückgegeben.

function fragen(antwort, var1='\x1b[38;5;82mOk. Fängst du an\x1b[0m',var2='\x1b[38;2;135;206;235mOk. Fange ich an\x1b[0m'){
    antwort=antwort.trim().toLowerCase();
       
    while(antwort!='y' && antwort!='n'){
        antwort= question('\x1b[5m\x1b[38;2;255;0;0mSchreib bitte "y" oder "n" :\x1b[0m');
        antwort=antwort.trim().toLowerCase();
    } 
    console.log( antwort=='y'? var1 : var2);
    return antwort=='y';// gib true zurück, wenn es richtig ist

}
// Funktion, die bestimmt, was der Spieler wird X oder O.

function wählenXO() {
    let antwort= question('\x1b[3mMöchtest du X oder O sein? Schreib bitte "X" oder "0":\x1b[23m');
    antwort=antwort.trim().toUpperCase();
     if (antwort=='O'){ // wenn man wählt Buchsctabe 'o' statt Ziffer 0
         antwort='0'
     };
       
    while(antwort!='X' && antwort!='0'){
        antwort= question('\x1b[5m\x1b[38;2;255;0;0mSchreib bitte "X" oder "0" :\x1b[0m');
        antwort=antwort.trim().toUpperCase();
    }   
    console.log( antwort=='X'?'\x1b[38;5;82mOk. Du spielst für X\x1b[0m': '\x1b[38;5;82mOk. Du spielst für 0\x1b[0m');
    let antwortComp= antwort=='X'?'0':'X'
    return [antwort, antwortComp];
    

};
 
// Funktion, die den Zug des Menschen nimmt.

function nimmtWahlvonMensch(arrMitWählen,  zeichenVonMehsch) {
    
    console.log(`
       \x1b[38;5;82mJetzt du bist dran! \x1b[0m`);
    let wahl= Number(question(`
\x1b[3mWält bitte frei Platz in Feld zwiesen 1 und 9: \x1b[23m`));

    while((wahl-1)<0 || (wahl-1)>9 || arrMitWählen[wahl-1]!=' '){
         wahl= question('\x1b[5m\x1b[38;2;255;0;0mDas Feld ist nicht frei oder du hast keine Zahl zwischen 1 und 9 geschrieben. Versuch es noch einmal: \x1b[0m')
    }
    arrMitWählen[wahl-1]=zeichenVonMehsch;
   
    zeigtFeld(arrMitWählen,  zeichenVonMehsch);//Zeigt das aktuelle Spielfeld.
  
}

// Funktion, die den Zug des Computer nimmt.
function nimmtRandomWahl( arrMitWählen, zeichenVonComputer, zeichenVonMehsch){
    let wahl=Math.floor(Math.random() * (9  + 1));

    while(arrMitWählen[wahl-1]!=' '){
        wahl= Math.floor(Math.random() * (9  + 1));}

        let gewinnerkombination=[

            [0, 1, 2],[3, 4, 5], [6, 7, 8], 
            [0, 3, 6],[1, 4, 7],[2, 5, 8], 
            [0, 4, 8], [2, 4, 6]  
        ];
        
        function gewinnerkombinationMitWahlen(gewinnerkombination, arrMitWählen){
            let arr=[];
            for (let el of gewinnerkombination) {
                let arrReihe=[]
               
                for (let i of el) {
                    arrReihe.push(arrMitWählen[i]);
                }
                arr.push(arrReihe)
            }
            
            return arr;
        } 
        let richtigWahl=-1;
        let antwort=gewinnerkombinationMitWahlen(gewinnerkombination,arrMitWählen);
        
        for (let i = 0; i<antwort.length; i++) {//beste Wahl für Computer 
            let reihe=antwort[i];
            let reiheMitNUmmer=gewinnerkombination[i]
           
            let gibtesFreiPlatz=(reihe.indexOf(' ')== reihe.lastIndexOf(' ')&& reihe.indexOf(' ')!=-1 )
           
            if(gibtesFreiPlatz){
                if (reihe.indexOf(zeichenVonComputer)!= reihe.lastIndexOf(zeichenVonComputer)){
                    let ant=reihe.indexOf(' ')
                    
                    richtigWahl=reiheMitNUmmer[ant]+1
                    wahl=richtigWahl
                    break
            
            }
       }}
       if(richtigWahl!=wahl){
       for (let i = 0; i<antwort.length; i++) {//pruft ob mensch gewinnt
        let reihe=antwort[i];
        
        let reiheMitNUmmer=gewinnerkombination[i]
       
        let gibtesFreiPlatz=(reihe.indexOf(' ')== reihe.lastIndexOf(' ')&& reihe.indexOf(' ')!=-1 )
        if(gibtesFreiPlatz ){
       if  (reihe.indexOf(zeichenVonMehsch)!= reihe.lastIndexOf(zeichenVonMehsch)){
        let ant=reihe.indexOf(' ')
    
        richtigWahl=reiheMitNUmmer[ant]+1;
        wahl=richtigWahl
        break
    
    }}}}


     arrMitWählen[wahl-1]=zeichenVonComputer
    
     zeigtFeld(arrMitWählen, zeichenVonMehsch);//Zeigt das aktuelle Spielfeld.
     console.log(`
     
     \x1b[38;2;135;206;235m  Ich habe das Kästchen ${wahl} gewält.\x1b[0m
         `);
     
     
    }  


// Funktion, die das aktuelle Spielfeld zeigt
function zeigtFeld(arrMitWählen, zeichenVonMehsch) {
    console.clear();

   const arrMitFarbe= arrMitWählen.map(el=> el==zeichenVonMehsch?`\x1b[38;5;82m${el}\x1b[0m`:`\x1b[38;2;135;206;235m${el}\x1b[0m`)
   let strMitWählen=' '.repeat(8);
   for(let i=0; i<arrMitWählen.length; i++){
    strMitWählen+='  '+arrMitFarbe[i]+'  ';
        if((i+1)%3==0 && (i+1)!=9){
            strMitWählen+='\n'+(' ').repeat(8)+('-').repeat(16)+'\n'+' '.repeat(8);}  

        else if( (i+1)!= 9) {
            strMitWählen+='|'};  
    
} 

    console.log(strMitWählen);
    console.log('_________________________________');
    
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
        return ['', false];
    }

}
// Funktion , die schreibt wer gewonnen hat
function schreibtWerGewonnenHat(zeichen,zeichenVonMehsch) {
    console.log(zeichen==zeichenVonMehsch? `\n\x1b[44m  Glückwunsch! Du hast gewonnen. \x1b[0m`:`\n\x1b[44m     Juhu, ich habe gewonnen.    \x1b[0m`);
} 




let weiterSpilen=true;

while(weiterSpilen==true){
   
 

const arrMitWählen=[' ',' ',' ',
                    ' ',' ',' ',
                    ' ',' ',' ',];

zeigtRegeln();

let frageWerfängtAn= question('\x1b[3mMöchtest du anfangen? (y/n) \x1b[23m:');
const werErst=fragen(frageWerfängtAn) // speichert wer hängt an

const [zeichenVonMehsch, zeichenVonComputer]= wählenXO();// speichert zeichen von Menshc und Computer

let [zeichen, antwort]=pruftSieg(arrMitWählen)
console.log(` Merkt bitte welches Kästchen welche Nummer hat:

        \x1b[5m\x1b[38;2;255;255;0m  1  |  2  |  3\x1b[0m
        \x1b[5m\x1b[38;2;255;255;0m ---------------\x1b[0m    
        \x1b[5m\x1b[38;2;255;255;0m  4  |  5  |  6\x1b[0m
        \x1b[5m\x1b[38;2;255;255;0m ---------------\x1b[0m
        \x1b[5m\x1b[38;2;255;255;0m  7  |  8  |  9\x1b[0m  
`);



if(werErst){
    
    while(arrMitWählen.includes(' ')){
       
        [zeichen, antwort]=pruftSieg(arrMitWählen)
        if(antwort){
            schreibtWerGewonnenHat(zeichen,zeichenVonMehsch);
            break
            }
            else{
                nimmtWahlvonMensch(arrMitWählen, zeichenVonMehsch)  
            }
        [zeichen, antwort]=pruftSieg(arrMitWählen)
        if(antwort){ 
            schreibtWerGewonnenHat(zeichen,zeichenVonMehsch);
            break
            }
        else{
            if(arrMitWählen.includes(' ')){
            nimmtRandomWahl(arrMitWählen, zeichenVonComputer, zeichenVonMehsch)   }    
            }
    }}
else{
    while (arrMitWählen.includes(' ')) {
        [zeichen, antwort]=pruftSieg(arrMitWählen)
        
        console.log();
        if(antwort){
            schreibtWerGewonnenHat(zeichen,zeichenVonMehsch);
            break
            }
            else{
                
                nimmtRandomWahl(arrMitWählen, zeichenVonComputer, zeichenVonMehsch) 
            }
        [zeichen, antwort]=pruftSieg(arrMitWählen)
        if(antwort){ 
            schreibtWerGewonnenHat(zeichen,zeichenVonMehsch);
            break
            } 
        else{
            if(arrMitWählen.includes(' ')){        
            nimmtWahlvonMensch(arrMitWählen, zeichenVonMehsch)}
    }
   
}}

 if(pruftSieg(arrMitWählen)[1]==false){
 console.log('\x1b[91m%s\x1b[0m',` 
    Es ist unentschiedent`); 
  }

const frage= question(`
Möchtest du noch einmal spielen? (y/n): `)
console.clear();
  weiterSpilen= fragen(frage, '\x1b[38;5;82mOk. Dann spielen wir noch einmal!!\x1b[0m','\x1b[38;2;135;206;235mSchade. Dann bis bald!\x1b[0m');
}
    