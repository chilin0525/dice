function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

randomNum1 = (getRandom(1,6));
randomNum2 = (getRandom(1,6));

imgName = "images/dice";
imgName1 = imgName + String(randomNum1)+".png";
imgName2 = imgName + String(randomNum2)+".png";
var num1 = document.querySelectorAll("img")[0];
var num2 = document.querySelectorAll("img")[1];

num1.setAttribute("src",imgName1)
num2.setAttribute("src",imgName2)

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "🚩️Player1 Win!";
} else if(randomNum2==randomNum1) {
    document.querySelector("h1").innerHTML = "No Winner!";
} else {
    document.querySelector("h1").innerHTML = "Player2 Win!🚩️";
}