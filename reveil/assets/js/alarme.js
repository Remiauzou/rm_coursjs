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

formulaire.addEventListener("submit", heureUtilisateur);

function heureUtilisateur(evenement) {

}