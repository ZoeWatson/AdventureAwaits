// =----------- variables/constants

// skill names
var s1_name = "Magic";
var s2_name = "Codeing";
var s3_name = "Boxing";
var s4_name = "Hope";
var s5_name = "Imagination";

// skill stats
var skill_1 = 0;
var skill_2 = 0;
var skill_3 = 0;
var skill_4 = 0;
var skill_5 = 0;

// win/ lose
var WIN_SKILL = 100;
var LOSE_SKILL = -100;

// skill temp arrays
var skill_temp0 = [];
var skill_temp1 = [];
var skill_temp2 = [];
var skill_temp3 = [];
var skill_temp4 = [];
var skill_temp5 = [];

// Add Stat intial
liAdd("S1", s1_name+": "+ skill_1);
liAdd("S2", s2_name+": "+ skill_2);
liAdd("S3", s3_name+": "+ skill_3);
liAdd("S4", s4_name+": "+ skill_4);
liAdd("S5", s5_name+": "+ skill_5);

// call gameOn
 gameOn();

function gameOn(){
  // ----------- Game
    //  game round
    // constants
    var MAX_CHOICE = 6;
    var MIN_CHOICE = 2;

    // change txt to list
    var messageList = toMesList();
    var choiceList = toChoList();

    // prints message
     message(messageList);

    // num of choices
    var num =  randrange(MIN_CHOICE, MAX_CHOICE);

    // prints choices
    for (var i = 0; i < num; i++){
        // print choice
         options(choiceList, i);
    }

    // print score
    liAdd("S1", s1_name+": " + skill_1);
    liAdd("S2", s2_name+": "+ skill_2);
    liAdd("S3", s3_name+": "+ skill_3);
    liAdd("S4", s4_name+": "+ skill_4);
    liAdd("S5", s5_name+": "+ skill_5);

    // win check
    if (!(win_check())){
        addText("sit","congratuations you won!");

    // lose check
    }else if (!(lose_check())){
         addText("sit","Sorry you lost. A skill fell below " + LOSE_SKILL);
    }
}

/// ------------------------------ fuctions butons -------------------------- //
// chose options
document.getElementById("C1").onclick = function Choice1(){
      skill_1 = skill_1 + skill_temp0[0];
      skill_2 = skill_2 + skill_temp0[1];
      skill_3 = skill_3 + skill_temp0[2];
      skill_4 = skill_4 + skill_temp0[3];
      skill_5 = skill_5 + skill_temp0[4];
      gameOn();
};

document.getElementById("C2").onclick = function Choice1(){
      skill_1 = skill_1 + skill_temp1[0];
      skill_2 = skill_2 + skill_temp1[1];
      skill_3 = skill_3 + skill_temp1[2];
      skill_4 = skill_4 + skill_temp1[3];
      skill_5 = skill_5 + skill_temp1[4];
      gameOn();
};

document.getElementById("C3").onclick = function Choice1(){
      skill_1 = skill_1 + skill_temp2[0];
      skill_2 = skill_2 + skill_temp2[1];
      skill_3 = skill_3 + skill_temp2[2];
      skill_4 = skill_4 + skill_temp2[3];
      skill_5 = skill_5 + skill_temp2[4];
      gameOn();
};

document.getElementById("C4").onclick = function Choice1(){
      skill_1 = skill_1 + skill_temp3[0];
      skill_2 = skill_2 + skill_temp3[1];
      skill_3 = skill_3 + skill_temp3[2];
      skill_4 = skill_4 + skill_temp3[3];
      skill_5 = skill_5 + skill_temp3[4];
      gameOn();
};

document.getElementById("C5").onclick = function Choice1(){
      skill_1 = skill_1 + skill_temp4[0];
      skill_2 = skill_2 + skill_temp4[1];
      skill_3 = skill_3 + skill_temp4[2];
      skill_4 = skill_4 + skill_temp4[3];
      skill_5 = skill_5 + skill_temp4[4];
      gameOn();
};

document.getElementById("C6").onclick = function Choice1(){
      skill_1 = skill_1 + skill_temp5[0];
      skill_2 = skill_2 + skill_temp5[1];
      skill_3 = skill_3 + skill_temp5[2];
      skill_4 = skill_4 + skill_temp5[3];
      skill_5 = skill_5 + skill_temp5[4];
      gameOn();
};

/// ------------------------------ functions HTML -------------------------- //
function addText(elementID, text){
  document.getElementById(elementID).innerHTML = text;
}

function liAdd(elementID, text){
  var node = document.createElement("LI");
  var textnode = document.createTextNode(text);
  node.appendChild(textnode);
  document.getElementById(elementID).appendChild(node);
}
