// =----------- variables/constants

// skill names
var s1_name = "Magic";
var s2_name = "Coding";
var s3_name = "Archery";
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
var skill_temp0 = [0,0,0,0,0];
var skill_temp1 = [0,0,0,0,0];
var skill_temp2 = [0,0,0,0,0];
var skill_temp3 = [0,0,0,0,0];
var skill_temp4 = [0,0,0,0,0];
var skill_temp5 = [0,0,0,0,0];

// Add Stat intial
addText("S1", s1_name+": "+ skill_1);
addText("S2", s2_name+": "+ skill_2);
addText("S3", s3_name+": "+ skill_3);
addText("S4", s4_name+": "+ skill_4);
addText("S5", s5_name+": "+ skill_5);

// charGen
charGen();

// call gameOn
 gameOn();



function gameOn(){
  // ----------- Game
  // clear
  clear();
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
    for ( i = 1; i < 7; i++){
    	    if ("" == document.getElementById("C"+i).innerText){
          	document.getElementById("C"+i).style.display = "none";
          }				
    }
    // print score
    addText("S1", s1_name+": " + skill_1);
    addText("S2", s2_name+": "+ skill_2);
    addText("S3", s3_name+": "+ skill_3);
    addText("S4", s4_name+": "+ skill_4);
    addText("S5", s5_name+": "+ skill_5);

    // win check
    if (!(win_check())){
        addText("sit","congratuations you won!");
        endClear();

    // lose check
    }else if (!(lose_check())){
         addText("sit","Sorry you lost. A skill fell below " + LOSE_SKILL);
         endClear();
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

/// ------------------------------------- Functions
function toMesList() {
  // declare array
  var messageList = [" Humankind has begun eating others humans for food. You have just been discovered in the secret laboratory. The guards have plasma weapons. ", " The sky is bleeding. It's not hurting anyone, but it's kinda annoying. Oh, and it's making traffic terrible. ", " You awaken in a darkened room. Tied to a chair.  You cannot see a way out. ", " Giant space ants have conquered the earth, and it's not even Tuesday! ", " A clown approaches. ", " A giant rock is hurtling toward you. ", " A giant duck is hurtling toward you. ", " Death is coming, but it got its robe stuck in an escalator. ", " Death is coming. It waves hello as it sees you. ", " Death is coming. It does not seem happy, I think it might remember. ", " Soldiers in uniform have come to your front door to talk to you about the incident. ", " Your mother has come to your front door to talk to you about the incident. ", " The local PTA have come to your front door to talk to you about the incident. ", " A vague, yet menacing government agency have come to your front door to talk to you about the incident. ", " The local HOA have come to your front door to talk to you about the incident. ", " The CIA have come to your front door to talk to you about the incident. ", " The computer containing the only draft of the final has caught fire. ", " The room is filled with unfamiliar faces, yet they seem to KNOW you. ", " The rubber duckys have gained sentience. They remember what you made them do. ", " The computers have gained sentience. They remember what you made them do. ", " The toasters have gained sentience. They remember what you made them do. ", " The paperwork has gained sentience. IT REMEMBERS. ", " An evil Overlord has risen. They seem mainly concerned with Bees. ", " An evil Overlord has risen. They seem mainly concerned with Tea Cozies. ", " An evil Overlord has risen. They seem mainly concerned with Tv Shows from the 90's. ", " The Librans have revolted. They seem mainly concerned with banned books. ", " The cats have risen in an unstoppable army. They seem mainly concerned with NOMS. ", " There is a button labeled 'DANGER DO NOT PUSH.' ", " You are running down a narrow passage and you hit the fourth wall, breaking it. I hope you have the money to pay for that. ", " You are trapped in a Walmart. Despair. ", " You are trapped in a Denny's. Despair. ", " You are trapped in North Carolina. Despair. ", " The IT Department approaches in a hoard.  They look. . .annoyed. One is clutching a rubber ducky and murmuring about injustices. ", " The Computer Science Majors approach in a hoard.  They look. . .annoyed. One is clutching a rubber ducky and murmuring about heretics. ", " The Accountants approach in a hoard.  They look. . .annoyed. One is carrying a printout and murmuring about heretics. ", " The Librarians approach in a hoard.  They look. . .annoyed. One is a carrying an overdue book and murmuring about heretics. ", " The Accountants approach in a hoard.  They look. . .annoyed. They are all armed with paperwork. ", " BEEEEES. Just BEEEES. ", " Someone just said 'what is the worst that can happen?' ", " A McGuffin has appeared. ", " You are trapped in a desert. You are running out of water. All you can see for miles is chocolate. ", " Hun, looks like it's raining frogs. Literally. ", " Hun, looks like it's raining cats and dogs. Literally. ", " A Zombie Hoard has risen. They seem mainly concerned with Subway. ", " A Zombie Hoard has risen as have The Old Gods of Chaos and terror. They seem mainly concerned with whose turn it was. ", " The Old Gods of Chaos and terror have risen. They seem mainly concerned with crochet. ", " The Old Gods of Chaos and terror have risen. They seem mainly concerned with getting back at H.P. Lovecraft. ", " So, . . . funny story. You know that thing you told me not to do. That thing all major moral and political leaders said was a bad plan. The thing I promised like a hundred times I wouldn't do. Yeah, . . . I did the thing. Can you fix it for me?  I got plane tickets to the Bahamas. ", " Rabbits are not what they seem to be. Do you have a plan for that? ", " You stumble into a brightly lit room. There are dozens of hooded figures performing a strange and horrific ritual involving a sacrifice. They seem very happy to see you. ", " You stumble into a brightly lit room. There are dozens of hooded figures performing a strange and horrific ritual involving a sacrifice. They don't seem very happy to see you. ", " A person burst in screaming 'It is almost complete. It is almost complete at last!', and then runs from the room. ", " When you wake there is a note on your bedroom mirror. It says 'Regret nothing. Until it is too late. Then, regret everything.' ", " An obelisk has appeared. No one knows where it came from, but it's attracting a lot of cats. ", " Red sky at night. Sailors delight. Red sky at night. The sailors are howling and laughing. The sailors begin to surround us and the night sky is so very red. ", " There's nothing under your bed. Nothing in your closet. Nothing waiting in the hall. You are surrounded by nothing. You cannot escape it. ", " A window closes, so does a door. So, do all the other doors and windows. The house is alive, and it doesn't know you, and it is scared. ", " The children were right. The floor is lava. But they were wrong about the heat resistance of sofa cushions. ", " Here comes the sun. Here comes the sun. Here comes the sun. It does not stop. Are you going to do something about that? ", " Orcs have appeared. How do you feel about that? ", " Werewolves have appeared. How do you feel about that? ", " You are swimming distance from a shore you cannot see. If you choose the wrong direction, you will drown. If do not make a decision, you will drown. ", " Good things come to those who wait. Good things come slithering down the unctuous brown stone walls to those who wait alone in the dark pit. Maybe you should stop waiting. ", " You are tied to a chair. The interrogator walks into the room and begins with 'Let me tell you about Homestuck.' ", " Everything burns. ", " The scouts are here to sell cookies, but they HAVE NO TAGALONGS. ", " The scouts are here to sell cookies, but they HAVE NO POPCORN. ", " The scouts are here to sell cookies, but they HAVE NO THIN MINTS. ", " You are lost in an alternative universe. Everything's the same, but there are no hats. ", " Evil clowns live under your bed. Do you have a plan for that? ", " Godzilla Attack!! ", " Giant Robot Attack!! ", " Mega Shark Attack!! ", " You have 100+ text messages, and the number just keeps going up. ", " You have ten missed calls from your mother, and one vague yet threatening voicemail. ", " Gozer now dwells in your refrigerator, and they are hiding all the cheese. ", " The revolution is now. Did you forget what day it was? We told you to mark it on your calendar. ", " The pencils have returned, and they want REVENGE. ", " The dolphins have returned, and they want REVENGE. ", " The dolphins have returned, and they want ICE CREAM. ", " The helicopters have returned, and they want REVENGE. ", " No one expects the Spanish inquisition! ", " Someone's science experiment escaped again! ", " People you pretend are friends are trying to recreate a mythbusters episode. ", " There is a door marked 'DO NOT ENTER.' ", " You are stranded in the backwoods of Manitoba. ", " The apocalypse is starting. It mainly involves scout cookies. ", " The apocalypse is starting. It mainly involves cats. ", " The apocalypse is starting. It mainly involves socks. ", " The apocalypse is starting. It mainly involves zombies, but there is the occasional vampire. ", " The apocalypse has ended. It turns out the last year so was a horrible nightmare, and the off button was right there all along. ", " The apocalypse is starting. It mainly involves demons from beyond the realms of humankind. ", " Cake or Death? ", " A musical has broken out. There is no cure. ", " A Broadway show has broken out. There is no cure. ", " You just received an email beginning 'I recently had an experience I just had to write you about. . ..' ", " You have just been placed in charge of 16 fourteen-year old's, high on sugar and armed with bows and arrows. ", " A gang of killer rabbits approaches. They look . . . hungry. ", " A gang of feral youth are orchestrating an attack on Disneyland, and they would like you to join them. ", " A gang of feral youth are orchestrating an attack on Walmart, and they would like you to join them. ", " A gang of feral youth are orchestrating an attack on Subway, and they would like you to join them. ", " Are you going to order your sandwich or what? ", " It is Black Friday, you are trapped at L.L. Bean. Abandon all hope. ", " It is Black Friday, you are trapped at Target. Abandon all hope. ", " It is Black Friday, you are trapped at Gamestop. Abandon all hope. ", " It is Black Friday, you are trapped at Staples. Abandon all hope. ", " Your personal report contains the phrase 'has hit rock bottom and started to dig.' ", " Your personal report contains the phrase 'Has lowered all performance standards and continuously fails to meet them.' ", " Your personal report contains the phrase 'is a danger to themselves and those around them.' ", " Your personal report contains the phrase 'is smarter than anyone who will read this report. Just ask them, they will tell you so.' ", " A person dressed in full anti-contamination clothing burst into your room yelling 'By the Gods! We have a survivor!' ", " Unicorns are a thing now. Not as nice as they seem. ", " You awaken 100 years in the future. Sooo yeah you got a LOT of back taxes. ", " I just lost 'The Game.' ", " I just won 'The Game.' ", " You received code to debug, but it has no documentation. ", " I have run out of ideas. Image a scenario, will you? I need to go patch up the forth wall with duct tape. ", " Ben and Jerry's' have conquered the world. It's better this way. ", " Tumbler has conquered the world. It's better this way. ", " Loki fans have conquered the world. It's better this way. ", " For some reason everyone is only capable of speaking in Monty Python quotes. ", " For some reason everyone is only capable of speaking in Fresh Prince of Bel Air quotes. ", " For some reason everyone is only capable of speaking in Marvel quotes. ", " For some reason everyone is only capable of speaking in Spice Girl Lyrics. ", " Magic has returned to the land. ", " You have fallen into a magical land. ", " The void looks at you. "];
  // return
  return messageList;
}

function toChoList() {
    var choiceList = ["Join the Free Orcs.", " Tell the story of the time you got caught with the duck. ", " Nope, Just no. Not happening. ", " Denial, it works sometimes, right? ", " Run ", " Ruuuuuuuuuuuun. ", " Do something, anything. ", " Conquer the world with an army of flying monkeys ", " Don't die. That's a plan, right? ", " Graduate from a prestigious university. ", " Smile, a positive attitude is sure to win friends. ", " Pull yourself up to look bigger. ", " Sing your favorite song. ", " Give up, it's a valid option. ", " Become an evil overlord. ", " Turn into fish. ", " Turn into a bear. ", " Turn into a unicorn. ", " Turn into a duck. ", " Jump up and down ten times. ", " Buy a cat and retire. " , " Google the answer. ", " Google the answer, safe search off. ", " Make excuses, bad ones. ", " Sell your soul. ", " Buy a soul. ", " Begin negotiations. ", " Do the thing. ", " Do that thing India jones did. You know, in the movie. ", " Perform a complex math equation. ", " Duck. ", " Cry, the situation might take pity on you. ", " Look a bird! ", " Throw a rock. ", " Do the tango. ", " Do the limbo. ", " Do the Makana. ", " Take a selfie. ", " Give peanut butter. ", " Explain to a rubber ducky what is happening in the situation. So as to come to a solution together. ", " Push a button, any button. ", " Push the BIG RED button. ", " Push the BIG RED BUTTON, labeled, 'DANGER DO NOT PUSH!' ", " Play Minecraft. ", " Ignore the situation and play Minecraft. ", " Briefly wonder as to the point of Stanley's parable. ", " Grow wings. ", " Fly away. ", " Shoot lasers from your eyes. ", " Perform a one-person Broadway show. ", " Tap Dance. ", " Cha, Cha, . . . Reeeal Sloow. ", " Build a time machine. ", " Break the fourth wall. Hey don't do that. I just built it. ", " Sell all your possessions and head for comic con. ", " Yell 'Beam me up Scotty.' It might work. ", " Do the Cancan. ", " Re-read the evil overlord list for helpful tips. ", " Re-read Skippy's list for helpful tips. ", " Sing 'Go- Go- Power Rangers!' Until the situation admits defeat. Don't worry it won't take long. ", " Sing 'It's a Small World After All' Until the situation admits defeat. Don't worry it won't take long. ", " Summon the eldritch gods. ", " Kill it with kindness. And if that fails, kill it with sharp sticks or knives. ", " Dance like the government is watching. ", " Dress for success. Put on your tall hat, and rubber gloves, and long grey coat. Success requires this specific outfit ", " Challenge the situation to a dance contest. ", " Ask about the airspeed velocity of an unladen swallow. ", " Take a moment to do your Homework. ", " Offer to get the situation a shrubbery, you know a nice one. ", " Call 991. ", " Offer up a box of thin mints as sacrifice. ", " Call the ghostbusters. ", " Decide what your favorite ship is. ", " Become a Wizard. ", " Try turning it off and on again. ", " Play Smash Bros. ", " Challenge the situation to a game of Super Smash Bro's. ", " Join the trolls. ", " Defect. ", " Join a militia. ", " Form a militia. ", " Celebrate 'Speak like a Pirate Day.' ", " Celebrate Hogswatch. ", " Taunt. ", " Engage in Psychological Warfare. ", " Ally with the kittens to create an unstoppable army. ", " Rename self 'Princess Anastasia.' ", " Threaten to use black magic. ", " Challenge disbelief in black magic by asking for hair. ", " Gain superpowers. ", " Trade for 'magic beans.' ", " Quote Dr. Seuss. ", " Reference a Squid. ", " Reference the Squid. ", " Bow Down to the Giant Space Ants. ", " Begin a 'Anti-Mime' campaign in Bosnia. ", " Become the Psychological Warfare Mascot. ", " Line your hat with tin foil to 'Block out the space mind control lasers.' ", " Pretend to be a fascist stormtrooper. ", " Flaunt your deviances. ", " Conduct psychological experiments on those surrounding you. ", " Sing 'Teddy Bear, Teddy bear, turn around' in cadence. ", " Say 'You don't need to see my identification, these are not the droids you are looking for.' ", " Become the king, queen, or liege of cheese. ", " Start a podcast. ", " Form an emotional relationship with a teddy bear. ", " Form an emotional relationship with a coconut. ", " Use a military vehicle to 'Squish' things. ", " Form a hivemind. ", " Challenge someone to the 'field of honor.' ", " Do something that the thought of makes you giggle for longer than 15 seconds. ", " Attempt to use a Crucifix to get out of the situation. ", " Attempt to use Jell-O to get out of the situation. ", " Bribe someone with Jell-O. ", " Find a more suitable host body. ", " Change national policy in Eastern Europe. ", " Create a revel fire. ", " Create a religion worshiping Dunkin Donuts. ", " Create a religion worshiping cheese. ", " Use the loudspeaker system as a forum to voice your ideas. ", " Play Calvin-Ball. ", " Challenge the situation to Calvin-Ball. ", " Consider your past lives. ", " Put a hat on. ", " Put sunscreen on. It's safer. ", " Become Superman. ", " Become a citizen of Vermont, and those other 49 lesser states. ", " Charge into battle, naked, like the Celts. ", " Try something you saw in a cartoon. ", " Become the Emperor of something. ", " Make smores. ", " Make a cake. ", " Make lasagna. ", " Assemble a giant battle-robot. ", " Get a tattoo. ", " Sing 'Henry the VIII I am' until verse 68. ", " Lead a coup. ", " Confess to your crimes. ", " Do the Safety Dance. ", " Become the Deity of mischief. ", " Give everyone a nickname. ", " Shout 'No one expects the Spanish inquisition!' ", " Tell a ghost story. ", " Phone a friend. ", " Use 'demonic possession' as an excuse. ", " Call in sick due to 'morale deficiency.' ", " Log on to facebook. ", " Have a cup of coffee. ", " Have a cup of tea. ", " Befriend Batman. ", " Do something you saw on Mythbusters. ", " Learn Archery. ", " Learn to Riverdance. ", " Quote the princess bride, incessantly. ", " Doodle. ", " Read your favorite book. ", " Write a book report. ", " Attempt to stay on the right side of sanity. Please let us know if you discover which is which. ", " Post a tweet. ", " Blog about the situation. ", " Remember murphy's law. ", " Sing show tunes. ", " Get your wisdom teeth removed. ", " Sing the Rocky Horror soundtrack. In costume. ", " Start a 'Shipping War.' ", " Start an Esty shop for small polymer clay figurines. ", " Pop some popcorn and dig in. ", " Begin placing bets. ", " Write your own theme song. ", " Volunteer for an experiment. ", " Do the thing, For SCIENCE! ", " Start a betting pool. ", " Speak only in haiku, limericks, or any other sort of poetry. ", " Try that thing you saw in an action movie. ", " Try that thing you saw in a romcom. ", " Challenge the situation to a game of rock, paper, scissors. ", " MacGuyver it." ];

    // return
    return  choiceList;
  }

function toNameList(){
  var nameList = [ " Laquanda Lamonica ", " Luanne Lebron ", " Ida Iddings ", " Rozanne Roesler ", " Marie Mcgahey ", " Angeline Allie ", " Myriam Mealey ", " Micaela Mey ", " Tanisha Towry ", " Donovan Drayer ", " Evelyn Eslinger ", " Sid Sato ", " Elizebeth Ernest ", " Roxann Roemer ", " Markita Mcglothlen ", " Marin Mapes ", " Sammy Shriver ", " Geralyn Giese ", " Dante Dominick ", " Jacelyn Jain ", " Elia Erhardt ", " Jena Jaworski ", " Augustine Ansley ", " Zackary Zahn ", " Kathleen Kernan ", " Leola Leisure ", " Renita Ruddell ", " Violet Vuong ", " Kai Kwak ", " Goldie Greening ", " Georgette Gonsoulin ", " Chau Crace ", " Phil Poythress ", " Laurette Lundgren ", " Ruthann Room ", " Bernadine Bushell ", " Cami Chasteen ", " Richelle Rodden ", " Janina Jordison ", " Charity Coatney ", " Lael Lewey ", " Delbert Divens ", " Laurine Luechtefeld ", " Opal Oertel ", " Garnett Gero ", " Jessenia Janssen ", " Foster Fennessey ", " Eustolia Eckert ", " Tonia Talor ", " Everett Eden   "];
  return nameList;
}

function toColorList(){
  var colorList = ["Red" , " Maroon" , " Scarlet" , " Brick Red" , " English Vermilion" , " Madder Lake" , " Permanent Geranium Lake" , " Maximum Red" , " Indian Red" , " Orange-Red" , " Sunset Orange" , " Bittersweet" , " Dark Venetian Red" , " Light Venetian Red" , " Vivid Tangerine" , " Middle Red" , " Burnt Orange" , " Red-Orange" , " Orange" , " Middle Yellow Red" , " Mango Tango" , " Yellow-Orange" , " Maximum Yellow Red" , " Banana Mania" , " Maize" , " Orange-Yellow" , " Goldenrod" , " Dandelion" , " Yellow" , " Green-Yellow" , " Middle Yellow" , " Olive Green" , " Spring Green" , " Maximum Yellow" , " Canary" , " Lemon Yellow" , " Maximum Green Yellow" , " Middle Green Yellow" , " Inchworm" , " Light Chrome Green" , " Yellow-Green" , " Maximum Green" , " Asparagus" , " Granny Smith Apple" , " Fern" , " Middle Green" , " Green" , " Medium Chrome Green" , " Forest Green" , " Sea Green" , " Shamrock" , " Mountain Meadow" , " Jungle Green" , " Caribbean Green" , " Tropical Rain Forest" , " Middle Blue Green" , " Pine Green" , " Maximum Blue Green" , " Robin's Egg Blue" , " Teal Blue" , " Light Blue" , " Aquamarine" , " Turquoise Blue" , " Outer Space" , " Sky Blue" , " Middle Blue" , " Blue-Green" , " Pacific Blue" , " Cerulean" , " Maximum Blue" , " Blue" , " Cerulean Blue" , " Cornflower" , " Green-Blue" , " Midnight Blue" , " Navy Blue" , " Denim" , " Cadet Blue" , " Periwinkle" , " Wild Blue Yonder" , " Indigo" , " Manatee" , " Cobalt Blue" , " Celestial Blue" , " Blue Bell" , " Maximum Blue Purple" , " Violet-Blue" , " Blue-Violet" , " Ultramarine Blue" , " Middle Blue Purple" , " Purple Heart" , " Royal Purple" , " Medium Violet" , " Wisteria" , " Lavender" , " Vivid Violet" , " Purple Mountains' Majesty" , " Fuchsia" , " Pink Flamingo" , " Brilliant Rose" , " Orchid" , " Plum" , " Medium Rose" , " Thistle" , " Mulberry" , " Red-Violet" , " Middle Purple" , " Maximum Red Purple" , " Eggplant" , " Magenta" , " Cerise" , " Wild Strawberry" , " Cotton Candy" , " Carnation Pink" , " Violet-Red" , " Razzmatazz" , " Pig Pink" , " Carmine" , " Blush" , " Tickle Me Pink" , " Marvelous" , " Salmon" , " Middle Red Purple" , " Mahogany" , " Melon" , " Burnt Sienna" , " Brown" , " Sepia" , " Fuzzy Wuzzy" , " Beaver" , " Tumbleweed" , " Raw Sienna" , " Van Dyke Brown" , " Tan" , " Desert Sand" , " Peach" , " Burnt Umber" , " Apricot" , " Almond" , " Raw Umber" , " Shadow" , " Timberwolf" , " Silver" , " Copper" , " Antique Brass" , " Black" , " Charcoal Gray" , " Gray" , " Blue-Gray" , "White"];
  return colorList;
}

function toPronounList(){
    var pronoun = [' their ', ' her ', ' his ', ' zer ', ' ler ', ' lis ', ' aer ', ' eir ', ' ver ', ' hir ', ' her ', ' his '];
    return pronoun;
}

function toJobList(){
    var Job = [' Spy ', ' Knight ', ' Suppervillian ', ' Evil Overlord ', ' Fairy ', ' Unicorn ', ' Supreme Commander ', ' Princess ', ' Rockstar ', ' Monster ', ' Vampire ', ' Teddy Bear ', ' Queen ', ' King ', ' Duke ', ' Duchess ', ' Superhero ', ' Robot ', ' Dinosaur ', ' High-School Gym Teacher ', '  Professor ', '  Accountant ', ' Dictator ', ' Werewolf ', '  Anime ', '  God ', ' Goddess ', ' Witch ', ' Wizzard ', ' Sorcerer ', ' Sorceress ', ' Dragon ', ' Imp ', ' Elf ', ' Dwarf ', ' Prince ', ' Barbarian ', ' Bard ', ' Cleric ', ' Druid ', ' Warrior ', ' Monk ', ' Paladin ', ' Ranger ', ' Rogue ', ' Warlock ', ' Assassin ', ' Dog ', ' Half-Orc ', ' Orc ', '  Halfling ', ' Human ', ' Eladrin ', ' Gnome ', ' Aarakocra ', ' Aasimar ', ' Armand ', ' Asherati ', ' Aurak ', ' Aventi ', ' Bozak ', ' Bullywug ', ' President ', ' Bugbear ', ' Centaur ', ' Changeling ', ' Dire WereboarDoppelganger ', ' Draconic creature ', ' Dracotaur ', ' Dragonkin ', ' Jagerkin ', ' Gargoyle ', ' Genasi ', ' Ghost ', ' Hagspawn ', ' Hobgoblin ', ' Neraphim ', ' Nezumi ', ' Ogre ', ' Pixie ', ' Shadowswyft ', ' Troll '];
    return Job;
}

function toTownList(){
    var town =['Hum','De','Dum','Da','La','Le','Gargle','Ock','Sum','Num','Um','Du','Des','Les','Be','Ba','Bo','Bum','Gru','Gra','Grum','Sa','Se','So','Do','Ook','Bek','Ka','Kec','Ja','Je','Ju','Jo','Ji','Te','Ta','Ra','Re','Ro','Tu','We','Wa','Wu','Wo','Pa','Po','Pu','Pe','Ha','Ho','Hu','He','Ma','Mu','Mo','Me','Za','Zo','Zu','Xe','Xo','Xi','Xu'];
    return town;
}

function to1QuestList(){
    var quest1  = [' Puppies ', ' Revenge ', ' Love ', ' Death ', ' Hope ', ' Fear ', ' Computer Science ', ' Video Games ', ' Nunchucks ', ' Chuck Norris ', '  Cars ', ' Cats ', ' Kittens ', ' Dogs ', ' Friendship ', ' Hotdogs ', ' Cake ', ' Chocolate ', ' Peace ', ' Sleep ', ' Chimichangas ', ' Comic books ', ' Chaos ', ' Fire ', ' World Peace ', ' Hate '];
    return quest1;
}
function to2QuestList(){
    var quest2 = [' Save the galaxy ', ' Fall in love ', ' Fall out of love ', ' Rock and roll ', ' Eat all the cake ', ' Eat all the pie ', ' Destroy the universe ', ' Save the multiverse ', ' Turn all cats into rainbow pop tarts ', '  Bring firefly back ', ' Eat marshmallows ', ' Roast marshmallows while the world burns ', ' Join a militia ', ' Do something, anything. ', ' Conquer the world with an army of flying monkeys ', ' Graduate from a prestigious university.. ', ' Become an evil overlord. ', ' Turn into fish. ', ' Turn into a bear. ', ' Turn into a unicorn. ', ' Turn into a duck. ', ' Buy a cat and retire. ', ' Sell your soul. ', ' Buy a soul. ', ' Do the thing. ', ' Do the tango. ', ' Do the limbo. ', ' Do the Makana. ', ' Take a selfie. ', ' Push a button, any button. ', ' Play Minecraft. ', ' Grow wings. ', ' Fly away. ', ' Shoot lasers from your eyes. ', ' Preform a one-person Broadway show. ', ' Tap Dance. ', ' Cha, Cha, ΓÇª. Reeeal Sloow. ', ' Build a time machine. ', ' Sell all your possessions and head for comic con. ', ' Do the Cancan. ', ' Summon the eldritch gods. ', ' Kill it with kindness. And if that fails, kill it with sharp sticks or knives. ', ' Dance like the government is watching '];
    return quest2;
}

// char Gen
function charGen(){
// list gen
// char Gen list
  var Nlist = toNameList();
  var Jlist = toJobList();
  var Tlist = toTownList();
  var Q1list = to1QuestList();
  var Q2list = to2QuestList();
  var Plist = toPronounList();
  var Clist = toColorList();
 
    addText('name', choose(Nlist));
  addText('job', "The " + choose(Jlist)+" "+choose(Jlist)+" "+choose(Jlist) );
  addText('town', "of "+choose(Tlist)+choose(Tlist)+choose(Tlist) );
  addText('quest', 'is on a quest for '+choose(Q1list)+" and to "+choose(Q2list));
  addText('color', "Oh, and "+choose(Plist)+" favourite color is "+ choose(Clist));


}
  function choose(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }

  function randrange(min, max) {
      var num = Math.random() * (max - min) + min;
      return Math.round(num);
  }

/// ------------------------------ Cleaning Functions-------------------------- //

 // adds option to clean list
function clean(option, list_clean){
        // calls clean_clean
       if (list_clean.length >= 6){
            // empty list
            list_clean.length = 0;
        }
        // checks if option is list_clean
        if ((list_clean.indexOf("option")==-1)){
        	list_clean.push(option);
            return true;
         
        }
        
            // return true
            return false;
    }

/// ------------------------------ Message Functions -------------------------- //
// Story Message
function message(messageList){
    try{
        var cleanMes = [];

        // gets a random message
        var message_s = choose(messageList);
        
       var test =clean(message_s, cleanMes);
        // clean
        while (test!==true) {
            // get message
            message_s = choose(messageList);
           test =clean(message_s, cleanMes);
        }
        // print message
         addText("sit",message_s);
    }catch(err){
        addText("testing", "function message failed");
      }
      }
// choice Message
function options(choiceList, i){
    try{

        var cleanCho = [];

        // gets a random choice
        var choice = choose(choiceList);

        // clean
        while (!(clean(choice, cleanCho))){
            choice = choose(choiceList);
        }

        // get skill list
        var skill_temp =  what_temp_list(skill_temp0, skill_temp1, skill_temp2, skill_temp3, skill_temp4, skill_temp5, i);

        // print skill
         var skillString = skill_choice(skill_temp);

         var num = i +1;
         // print options
         addText("C"+num, choice+ "<br /> "+ skillString);


    }catch(err){
        addText("testing", "function options failed");
      }
    }

// temp list
function what_temp_list(skill_temp0, skill_temp1, skill_temp2, skill_temp3, skill_temp4, skill_temp5, i){
    try{
        // gets the temp list
        if (i == 1){
            // return temp
            return skill_temp1;

         }else if (i == 2){
            // return temp
            return skill_temp2;

         }else if (i == 3){
            // return temp
            return skill_temp3;

         }else if (i == 4){
            // return temp
            return skill_temp4;

         }else if (i == 5){
            // return temp
            return skill_temp5;

        }else{
            // return temp
            return skill_temp0;
          }
    }catch(err){
        addText("testing", "function function options failed");
      }
}
// skill choices
function skill_choice(skill_temp){
    try{
        // gen random skill choices
        var list_clean = [];
        // num of skill changes
        var num = randrange(1, 5);

        // String skills
        var skillString = " ";

        // clean list
        for (var i = 0; i < num; i++){

            // gen random num
            var add =  randrange(-45, 60);

            var skill_num =  randrange(1, 5);
            
            
            var test = false;
            if ((list_clean.indexOf(skill_num)==-1)){
                  list_clean.push(skill_num);
            			test = true; }
            while (test !== true){
                // chooses what skill to add to
                skill_num =  randrange(1, 5);
               if ((list_clean.indexOf(skill_num)==-1)){
                  list_clean.push(skill_num);
            			test = true; }              
            }
            if (skill_num == 1){
                  // print
                  skillString = skillString + " "+s1_name+ ": "+ skill_1+ " + "+ add;
                  // replace skill temp
                  skill_temp[0] = add;

               }else if( skill_num == 2){
                  // print
                    skillString = skillString + " "+ s2_name+ ": "+ skill_2+ " + "+ add;
                  // replace skill temp
                  skill_temp[1] = add;

               }else if (skill_num == 3){
                  // print
                    skillString = skillString + " "+s3_name+ ": "+ skill_3+ " + "+ add;
                  // replace skill temp
                  skill_temp[2] = add;

               }else if (skill_num == 4){
                  // print
                    skillString = skillString + " "+s4_name+ ": "+ skill_4+ " + "+ add;
                  // replace skill temp
                  skill_temp[3] = add;

            }else{
                // print
                skillString = skillString + " "+s5_name+ ": "+ skill_5+ " + "+ add;
                // replace skill temp
                skill_temp[4] = add;
            }
         }
          return skillString;
    }catch(err){
        addText("testing", "function choices failed");
    }
    }
// clear
function endClear(){
  charGen();
  skill_temp0 = [0,0,0,0,0];
  skill_temp1 = [0,0,0,0,0];
  skill_temp2 = [0,0,0,0,0];
  skill_temp3 = [0,0,0,0,0];
  skill_temp4 = [0,0,0,0,0];
  skill_temp5 = [0,0,0,0,0];
  addText("C1", "Play Again?");
  addText("C2", "");
  addText("C3", "");
  addText("C4", "");
  addText("C5", "");
  addText("C6", "");
  skill_1 = 0;
  skill_2 = 0;
  skill_3 = 0;
  skill_4 = 0;
  skill_5 = 0;
}
function clear(){
  // clear temp skill
   skill_temp0 = [0,0,0,0,0];
   skill_temp1 = [0,0,0,0,0];
   skill_temp2 = [0,0,0,0,0];
   skill_temp3 = [0,0,0,0,0];
   skill_temp4 = [0,0,0,0,0];
   skill_temp5 = [0,0,0,0,0];

   // clears choice
   addText("C1", "");
   addText("C2", "");
   addText("C3", "");
   addText("C4", "");
   addText("C5", "");
   addText("C6", "");

   // clears message
   addText("sit","");

}


function win_check(){
    try{
        // win check
        if (!((skill_1 >= WIN_SKILL) && (skill_2 >= WIN_SKILL) && (skill_3 >= WIN_SKILL) && (skill_4 >= WIN_SKILL) && (skill_5 >= WIN_SKILL))){
            return true;
        }else{
            return false;
            }
    }catch(err){
        addText("testing", "function win_check failed");
      }
      }

function lose_check(){
    try{
        // lose check
        if (!((skill_1 < LOSE_SKILL) || (skill_2 < LOSE_SKILL) || (skill_3 < LOSE_SKILL) || (skill_4 < LOSE_SKILL) || (skill_5 < LOSE_SKILL))){
            return true;
        }else{
            return false;
        }
    }catch(err){
        addText("testing", "function lose_check failed");
      }
      }
// testing
document.getElementById("C1").style.cursor = "pointer";
document.getElementById("C2").style.cursor = "pointer";
document.getElementById("C3").style.cursor = "pointer";
document.getElementById("C4").style.cursor = "pointer";
document.getElementById("C5").style.cursor = "pointer";
document.getElementById("C6").style.cursor = "pointer";
