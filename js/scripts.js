var locations = {
    "Junk Junction": {x:700,y:135},
    "Haunted Hills": {x:660 ,y:220},
    "Anarchy Acres": {x:960 ,y:220},
    "Pleasant Park": {x:760 ,y:275},
    "Loot Lake": {x:890 ,y:335},
    "Tomato Town": {x:1070 ,y:285},
    "Wailing Woods": {x:1200 ,y:280},
    "Snobby Shores": {x:605 ,y:400},
    "Tilted Towers": {x:845 ,y:430},
    "Dusty Divot": {x:1020 ,y:445},
    "Lonely Lodge": {x:1255 ,y:365},
    "Retail Row": {x:1135 ,y:470},
    "Greasy Grove": {x:725 ,y:540},
    "Shifty Shafts": {x:835 ,y:555},
    "Salty Springs": {x:995 ,y:530},
    "Fatal Fields": {x:1025 ,y:640},
    "Moisty Mire": {x:1215 ,y:670},
    "Flush Factory": {x:825 ,y:740},
    "Risky Reels": {x:1140, y:200},
    "Lucky Landing": {x:995, y:780},
    "Prison": {x:1150 ,y:630},
    "Football": {x:730, y:430},
    "Race Track": {x:1255, y:510},
    "Crates": {x:1125, y:365},
    "Flush Ext": {x:885, y:695},
    "Motel": {x:860, y:180}
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
