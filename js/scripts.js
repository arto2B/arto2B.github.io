var locations = {
    "Junk Junction": {x:700,y:55},
    "Haunted Hills": {x:660 ,y:140},
    "Anarchy Acres": {x:960 ,y:140},
    "Pleasant Park": {x:760 ,y:195},
    "Loot Lake": {x:890 ,y:255},
    "Tomato Town": {x:1070 ,y:205},
    "Wailing Woods": {x:1200 ,y:200},
    "Snobby Shores": {x:605 ,y:320},
    "Tilted Towers": {x:845 ,y:350},
    "Dusty Divot": {x:1020 ,y:365},
    "Lonely Lodge": {x:1255 ,y:285},
    "Retail Row": {x:1135 ,y:390},
    "Greasy Grove": {x:725 ,y:460},
    "Shifty Shafts": {x:835 ,y:475},
    "Salty Springs": {x:995 ,y:450},
    "Fatal Fields": {x:1025 ,y:560},
    "Moisty Mire": {x:1215 ,y:590},
    "Flush Factory": {x:825 ,y:660},
    "Risky Reels": {x:1140, y:120},
    "Lucky Landing": {x:995, y:700},
    "Prison": {x:1150 ,y:550},
    "Football": {x:730, y:350},
    "Race Track": {x:1255, y:430},
    "Crates": {x:1125, y:285},
    "Flush Ext": {x:885, y:615},
    "Motel": {x:860, y:100}
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
