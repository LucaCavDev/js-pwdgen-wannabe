// chiedere nome
var name = prompt("Write your name my little friend");

// chiedere cognome
var surname = prompt("Now I need your surname, dear child.");

// chiedere colore preferito
var favColor = prompt("My last question is, what is the color of your dreams?");

// generare una password che seconndo il mio parere molto più complessa della maggior parte in circolazione
document.getElementById('password').innerHTML = name+surname+favColor+"19";
