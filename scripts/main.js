// var - variable (duh), can also use 'let'
var quote = document.querySelector('p'); //semicolons not necessary in JS but good style

/* Data Types: 
    String - enclosed in quote marks 'example' 
    Number - integer, float, etc.
    Boolean - true/false
    Array - typeless, [1, 'string1', 2, 'string2'], indexed at 0
    Object - Everything in JS is an object stored in a variable

   Operators of interest:
    Equals - === three equals signs
    Not, does not equal - !, !==
*/

function concat(s1, s2) {
    var result = s1 + s2; 
    return result;
}

name = 'Shamita Nagalla'; 
//name = 'Nagalla'.toUpperCase();
//text = concat(s1, name); 
//quote.textContent = '"Any sufficiently advanced technology is indistinguishable from magic"';

/* Below is an event: 
    There are many ways to attach an event to an element. 
*/
//var numBooms = 1; 
//document.querySelector('html').onclick = function() {
    //alert('BOOM ' + numBooms);
    //numBooms = numBooms + 1; 
//}

//var button = document.querySelector('button'); 
//function setName() {
    //var newName = prompt('Yo, what your name is?');
    //localStorage.setItem('name', newName);
    //name = newName.toUpperCase();
    //text = concat(s1, name);
    //myHeading.textContent = name;
//}
//if (!localStorage.getItem('name')) {
    //setName();
//} else {
    //var storedName = localStorage.getItem('name');
    //myHeading.textContent = text;
//}
//button.onclick = function() {
    //setName();
//}