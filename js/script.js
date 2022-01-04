var randomNumber1 = Math.floor(Math.random()*6)+1; //to generate random number from 1-6
 var randomNumber2 = Math.floor(Math.random()*6)+1; 
 // to generate random number from 1-6


 // function for change player1 image
function  changeimage1(){

   
    var randomDiceImage1 = "dice"+ randomNumber1 + ".png" //to generate random dice images
    var randomImageSource1 = "images/"+randomDiceImage1;

var image1 = document.querySelectorAll("img")[0]; // to change image source

image1.setAttribute("src",randomImageSource1);

}
// function for change player 2 image
 function  changeimage2(){ 
 var randomImageSource2 = "images/dice"+ randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
winner();
setTimeout(refresh1, 3000 );

 }

//function  that declare the winner
function winner(){
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " player1 wins";
}
else if(randomNumber2 > randomNumber1)
{

    document.querySelector("h1").innerHTML ="Player2 Wins ";
}
else{
    document.querySelector("h1").innerHTML ="Draw!"; 
}
}
// function that referesh the page
function refresh1(){
   location.reload(); 
}



