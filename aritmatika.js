

function reset(){
    document.getElementById("a1").value = "0"
    document.getElementById("a2").value = "0"
    document.getElementById("hasil").value = "0"

}

function tambah() {
    var a1 = Number (document.getElementById("a1").value)
    var a2 = Number (document.getElementById("a2").value)
    var hasil = Number (a1 + a2)
    //alert("hasil =" + hasil)
    document.getElementById("hasil").innerHTML = hasil


}

function kurang() {
    var a1 = Number (document.getElementById("a1").value)
    var a2 = Number (document.getElementById("a2").value)
    var hasil = Number (a1 - a2)
    //alert("hasil =" + hasil)
    document.getElementById("hasil").innerHTML = hasil


}

function kali() {
    var a1 = Number (document.getElementById("a1").value)
    var a2 = Number (document.getElementById("a2").value)
    var hasil = Number (a1 * a2)
    //alert("hasil =" + hasil)
    document.getElementById("hasil").innerHTML = hasil


}

function bagi() {
    var a1 = Number (document.getElementById("a1").value)
    var a2 = Number (document.getElementById("a2").value)
    var hasil = Number (a1 / a2)
    //alert("hasil =" + hasil)
    document.getElementById("hasil").innerHTML = hasil


}

function sisa_bagi() {
    var a1 = Number (document.getElementById("a1").value)
    var a2 = Number (document.getElementById("a2").value)
    var hasil = Number (a1 % a2)
    //alert("hasil =" + hasil)
    document.getElementById("hasil").innerHTML = hasil


}

