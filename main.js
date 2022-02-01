var food={
    name:"Banana",
    type:"fruit",
    calories:105
};
console.log(food.name);
console.log(food.type);
console.log(food.calories);
====================================================================================
var playerName=prompt("What is your robot's name ?");
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;
//console.log(playerName,playerHealth,playerAttack);


//var enemyName="Roborto";
var enemyHealth=50;
var enemyAttack=12;
//console.log(enemyName,enemyHealth,enemyAttack);
var enemyNames=["Roborto","Amy Android","Robo Trumble"];



var fight=function(enemyName){
  while(playerHealth>0 && enemyHealth>0){
 // alert("Welcome to Robot Gladiators.");
  var promptFight=prompt("Would you like to FIGHT or SKIP this battle?Enter 'FIGHT' or 'SKIP' to choose.");
  
if(promptFight==="fight" || promptFight==="FIGHT"){
  enemyHealth=enemyHealth-playerAttack;
  console.log(playerName+ " attacked "+enemyName+" . " + enemyName+ " now has " + enemyHealth+ " health left.");
  if(enemyHealth<=0){
    alert(enemyName+ " has died.");
    break;
  }
  else{
    alert(enemyName+ " still has "+enemyHealth+ " health left.");
  }


playerHealth=playerHealth-enemyAttack;
console.log(enemyName+" attacked "+playerName+" . "+playerName+" now has " +playerHealth+" health left.");
if(playerHealth<=0){
  alert(playerName+ " has died.");
  break;
}
else{
  alert(playerName+ " still has " + playerHealth+ " health left.");
}

}
 if(promptFight==="skip" ||promptFight==="SKIP"){
  //alert(playerName+ " has choosen to skip the fight.");
  var confirmSkip=window.confirm("Are you sure you would like to quit?");
  if(confirmSkip){
    alert(playerName+ " has decided to skip this fight.Goodbye.");
    playerMoney=playerMoney-10;
    console.log("playerMoney",playerMoney);
    break;
  }
  else{
    fight();
  }
}
else{
  alert("You need to choose the valid option.Try again.");
}
};
}
//fight();
for(var i=0;i<enemyNames.length;i++){
  var pickedEnemyName=enemyNames[i];
  var enemyHealth=50;
  fight(pickedEnemyName);

}
==============================================================================
var playerName=prompt("What is your robot's name ?");
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;
//console.log(playerName,playerHealth,playerAttack);


//var enemyName="Roborto";
var enemyHealth=50;
var enemyAttack=12;
//console.log(enemyName,enemyHealth,enemyAttack);
var enemyNames=["Roborto","Amy Android","Robo Trumble"];

var fight=function(enemyName){
  while(playerHealth>0 && enemyHealth>0){
  alert("Welcome to Robot Gladiators.");
  var promptFight=prompt("Would you like to FIGHT or SKIP this battle?Enter 'FIGHT' or 'SKIP' to choose.");

  if(promptFight==="skip" ||promptFight==="SKIP"){
    //alert(playerName+ " has choosen to skip the fight.");
    var confirmSkip=window.confirm("Are you sure you would like to quit?");
    if(confirmSkip){
      alert(playerName+ " has decided to skip this fight.Goodbye.");
      playerMoney=playerMoney-10;
      console.log("playerMoney",playerMoney);
      break;
    }
  }
  enemyHealth=enemyHealth-playerAttack;
  console.log(playerName+ " attacked "+enemyName+" . " + enemyName+ " now has " + enemyHealth+ " health left.");
  if(enemyHealth<=0){
    alert(enemyName+ " has died.");
    playerMoney=playerMoney+20;
    break;
  }
  else{
    alert(enemyName+ " still has "+enemyHealth+ " health left.");
  }


playerHealth=playerHealth-enemyAttack;
console.log(enemyName+" attacked "+playerName+" . "+playerName+" now has " +playerHealth+" health left.");
if(playerHealth<=0){
  alert(playerName+ " has died.");
  break;
}
else{
  alert(playerName+ " still has " + playerHealth+ " health left.");
}



}
};
//fight();
var startGame=function(){
  playerHealth=100;
  playerAttack=10;
  playerMoney=10;

for(var i=0;i<enemyNames.length;i++){
  if(playerHealth>0){
    window.alert("Welcome to Robot Gladiators. Round" + (i +1));
  
  var pickedEnemyName=enemyNames[i];
  var enemyHealth=50;
  
  fight(pickedEnemyName);
  if(playerHealth >0 && i<enemyNames.length-1){
    var storeConfirm=window.confirm("The fight is over,visit the store before the next round.");
    if(storeConfirm){
      //shop();
    }
  }
  break;
  }
else{
  window.alert("You have lost your robot in battle !Game Over !");
  break;
}

}
//startGame();

var endGame=function(){
 if(playerHealth>0) {
   alert("Great job,you have survived the game !You now have a score of" +playerMoney+ " . ");
 }
 else{
   alert("You have lost your robot in battle.");
 }
}
var playAgainConfirm=confirm("Would you like to play again.");
if(playAgainConfirm){
  startGame();
}
else{
  alert("Thank you for playing robot gladiators!Come back soon.");
}
endGame();

var shop=function(){
  var shopOptionPrompt=prompt("Would you like to REFILL your health,UPGRADE your attack,or LEAVE the store ?Please enter one:'REFILL','UPGRADE',or 'LEAVE' to make a choice.");
  if(shopOptionPrompt==="refill" || shopOptionPrompt==="REFILL"){
switch(shopOptionPrompt){
  case "REFILL"://new case
  case "refill":
    if(playerMoney>=7){
    window.alert("Refilling player's health by 20 for 7 dollars.");

    playerHealth=playerHealth+20;
    playerMoney=playerMoney-7;
}
else{
  window.alert("You don't have enough money.")
}
    break;
    case "UPGRADE"://new case
    case "upgrade":
      if(playerMoney>=7){
  window.alert("Upgrading player's attack by 6 for 7 dollars.");

  playerAttack=playerAttack+6;
  playerMoney=playerMoney-7;
      }
      else{
        window.alert("You don't have enough money.");
      }
  break;
  case "LEAVE"://new case
  case "leave":
    window.alert("Leaving the store.");

    break;
    default:
      window.alert("You did not pick a valid option.Try again.");

      shop();
      break;
    }
}
}
shop();

};

startGame();
