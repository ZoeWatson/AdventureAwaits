// read files into arrays
function readArray(file, array){
  var file = new File(file);
  file.open("r");
  while (!file.eof) {
  	// read each line of text
  	array.push(file.readln());
  }
  file.close();
  return array;
}

/// random https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// test array
function arrayTest(array){
  document.write("<li>hi</li>")
}

// make string into list item
function buildList(text){
  var para = document.createElement("li");
    var node = document.createTextNode(text);
    para.appendChild(node);

    var element = document.getElementById("list");
    element.appendChild(para);
}

// gen Char
function  charGen(){
  // strings
  var Fname, Lname, name, stat, thought, quote, town, race, quest, facts;

  for(var i=0; i < getRandomArbitrary(0, 4); i++){
    Fname += " "+nameGen();
  }
  Lname = LnameGen();
  name = Fname + " "+ Lname;

  for( var i=0; i <  getRandomArbitrary(0, 8); i++){
    stat += statGen()+": getRandomArbitrary(0, 100) \n";
  }

  for(var i=0; i <  getRandomArbitrary(0, 10); i++){
    thought += thoughtGen()+"\n";
  }
//hello i put this random note here to annoy you sister
  quote = quoteGen();
  town = townGen();
  race = raceGen();

  for( vari =0; i <  getRandomArbitrary(0, 4); i++){
    quest += questGen()+"\n";
  }

  for(var i=0; i <  getRandomArbitrary(0, 10); i++){
    facts += factGen()+"\n";
  }

  // html

  // name
  buildList(facts);
  buildList(quest);
  buildList(race);
  buildList(town);
  buildList(quote);
  buildList(thought);
  buildList(stat);
  buildList(name);

}

// gen Fname
function nameGen(){
  var name = [];
  name = readArray(Names.txt, name);
  var randNum = getRandomArbitrary(0, length.name-1);
  return name[randNum];
}
// gen Lname
function LnameGen(){
  var Lname = [];
  Lname = readArray(LNames.txt, Lname);
  var randNum = getRandomArbitrary(0, length.Lname-1);
  return name[randNum];
}
// gen race
function raceGen(){
var race = [];
Lname = readArray(Race.txt, race);
var randNum = getRandomArbitrary(0, length.race-1);
return race[randNum];
}

// gen stats
function statGen(){
var stat = [];
stat = readArray(Stat.txt, stat);
var randNum = getRandomArbitrary(0, length.stat-1);
return stat[randNum];
}

// gen town
function TownGen(){
var town = [];
town = readArray(Town.txt, town);
var randNum = getRandomArbitrary(0, length.town-1);
return town[randNum];
}

// gen quote
function quoteGen(){
var quote = [];
quote = readArray(Quote.txt, quote);
var randNum = getRandomArbitrary(0, length.quote-1);
return quote[randNum];
}

// gen thought
function thoughtGen(){
var thought = [];
thought = readArray(Thought.txt, thought);
var randNum = getRandomArbitrary(0, length.thought-1);
return thought[randNum];
}

// random facts
function factGen(){
var facts = [];
facts = readArray(Facts.txt, facts);
var facts = getRandomArbitrary(0, length.facts-1);
return facts[randNum];
}

// quest
function questGen(){
var quest = [];
quest = readArray(Quest.txt, quest);
var randNum = getRandomArbitrary(0, length.quest-1);
return quest[randNum];
}
// local Testing
charGen();
