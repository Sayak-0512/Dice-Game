var randomNumber1=Math.ceil(Math.random()*6);
var srcString1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",srcString1);
var randomNumber2=Math.ceil(Math.random()*6);
var srcString2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",srcString2);
if(randomNumber1>randomNumber2)
document.querySelector("h1").textContent="🚩Player 1 wins!";
else if(randomNumber2>randomNumber1)
document.querySelector("h1").textContent="Player 2 wins!🚩";
else
document.querySelector("h1").textContent="Draw!";
