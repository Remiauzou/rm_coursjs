function refresh(){
    var t = 1000; 
    setTimeout('showDate()',t)
}


function isMorning(h){
    if ((h <= 12) && (h > 6)) {
        return true
    } else {
        return false
    }

}
function showDate() {
    var date = new Date()
    console.log(date)
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    if( s < 10 ){ s = '0' + s; }

    console.log(isMorning(h))
    var time = h + ':' + m + ':' + s
    document.getElementById('horloge').innerHTML = time;
    refresh();
}



const formulaire = document.querySelector('#form1');
const input1 = document.querySelector('input.nombre');
const message_container = document.querySelector('.message');

formulaire.addEventListener("submit", heureUtilisateur);
    evenement.preventDefault();

// function heureUtilisateur(evenement) {
//     if date ===
// }

// message_container.innerHTML = input1;