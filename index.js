//first dice    //

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" +  randomNumber1 + ".png" ;

var dice = "images/" + randomImage1 ;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", dice);

//       second dice        //

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" +  randomNumber2 + ".png" ;

var dice = "images/" + randomImage2 ;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", dice);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML= "player1 wins" ;
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML= "player2 wins" ;
}
else{
  document.querySelector("h1").innerHTML= "draw" ;
}
