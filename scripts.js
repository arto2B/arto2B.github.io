var locations = {
    "Junk Junction": {x:145,y:55},
    "Haunted Hills": {x:110 ,y:140},
    "Anarchy Acres": {x:400 ,y:140},
    "Pleasant Park": {x:210 ,y:185},
    "Loot Lake": {x:335 ,y:255},
    "Tomato Town": {x:515 ,y:205},
    "Wailing Woods": {x:645 ,y:190},
    "Snobby Shores": {x:50 ,y:320},
    "Tilted Towers": {x:290 ,y:350},
    "Dusty Divot": {x:465 ,y:355},
    "Lonely Lodge": {x:700 ,y:285},
    "Retail Row": {x:580 ,y:375},
    "Greasy Grove": {x:170 ,y:450},
    "Shifty Shafts": {x:280 ,y:455},
    "Salty Springs": {x:440 ,y:440},
    "Fatal Fields": {x:470 ,y:550},
    "Moisty Mire": {x:655 ,y:565},
    "Flush Factory": {x:270 ,y:640},
    "Risky Reels": {x:580, y:120},
    "Lucky Landing": {x:440, y:685},
    "Prison": {x:595 ,y:535},
    "Football": {x:175, y:340},
    "Race Track": {x:700, y:425},
    "Crates": {x:570, y:280},
    "Flush Ext": {x:330, y:605},
    "Motel": {x:305, y:100}
};

function randomLocation(object) {
  var keys = Object.keys(object);
  return object[keys[Math.floor(keys.length * Math.random())]];
}

function drop() {
    var pin = document.getElementById("pin");
    var coords = randomLocation(locations);
    pin.style.display = "block";
    pin.style.left = coords.x+"px";
    pin.style.top = coords.y+"px";
}

// Helper for adding new locations
/*
document.addEventListener("click", printMousePos, true);
function printMousePos(e) {
var map = document.getElementById("container");
    cX = e.pageX - map.offsetLeft - 12;
    cY = e.pageY - map.offsetTop - 40;
    window.alert(cX+", "+cY);
}
*/
