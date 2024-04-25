var ramdonnumber1= Math.round(Math.random()*5)+1;

var ramdomdiseimage="dice"+ramdonnumber1+".png";

var ramdonmimagesource="images/"+ramdomdiseimage;

var image1 = document.querySelectorAll("img") [0];

image1.setAttribute("src", ramdonmimagesource); 

        
var ramdonnumber2= Math.round(Math.random()*5)+1;

var ramdomimagesource2="images/dice"+ramdonnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",ramdomimagesource2)

if (ramdonnumber1>ramdonnumber2){
document.querySelector("h1").innerHTML="Player 1 Wins"
} else if(ramdonnumber1<ramdonnumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins"
}else{
    document.querySelector("h1").innerHTML="Drow!"
}