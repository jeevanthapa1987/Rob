var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney=10;


//var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
var enemyNames=['Roborto','Amy Android','Robo Trumble'];


//var fight = function(enemyName) {
 // window.alert("Welcome to Robot Gladiators!");
// while ( playerHealth > 0 && enemyHealth >0){
 // var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  //if (promptFight === "fight" || promptFight === "FIGHT") {
 // enemyHealth = enemyHealth - playerAttack;
 // console.log(enemyHealth);
 // console.log(
    //playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  //);
  //if (enemyHealth <= 0) {
    //window.alert(enemyName + " has died!");
   // break;
  //} 
  //else {
   // window.alert(enemyName + " still has " + enemyHealth + " health left.");
  //}
  //playerHealth = playerHealth - enemyAttack;
  //console.log(playerHealth);
  //console.log(
   // enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  //);
  //if (playerHealth <= 0) {
   // window.alert(playerName + " has died!");
   // break;
  //} 
  //else {
    //window.alert(playerName + " still has " + playerHealth + " health left.");
 // } 
//} 
var fight = function(enemyName) {
  window.alert("Welcome to Robot Gladiators!");
  while ( playerHealth > 0 && enemyHealth >0){
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
if(promptFight==="skip" || promptFight==="SKIP"){
    window.alert(playerName + " has chosen to skip the fight.");
    var confirmSkip=window.confirm("Are you sure you would like to quit.");
    if(confirmSkip){
window.alert(playerName+" has decided to skip the fight.Goodbye");
playerMoney=playerMoney-10;
console.log('playerMoney',playerMoney);
break;
    }
   // else{
       // fight();
   // }
}
//else{
   // window.alert("You need to choose a valid option. Try again!");   
//}
 //}
//};
enemyHealth = enemyHealth - playerAttack;
  console.log(enemyHealth);
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    playerMoney=playerMoney+20;
    break;
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
  playerHealth = playerHealth - enemyAttack;
  console.log(playerHealth);
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }  
 }
};
//fight();
var startGame=function(){
  var playerHealth = 100;
  var playerAttack = 10;
  var playerMoney=10;




for(var i=0;i<enemyNames.length;i++){
    //console.log(enemyNames[i]);
    //fight(enemyNames[i]);
    if(playerHealth>0){
    window.alert(" Welcome to Robot Gladiators.Round " + (i+1));
    
    var pickedEnemyName=enemyNames[i];
    var enemyHealth=50;
    fight(pickedEnemyName);

  }
  else{
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
}
//startGame();
};
startGame();
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
// ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  // restart the game
  startGame();
} 
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
// endGame();
};
 endGame();