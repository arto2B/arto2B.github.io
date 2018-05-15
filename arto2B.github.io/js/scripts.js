var locations = {
    "Junk Junction": {x:700,y:140},
    "Haunted Hills": {x:660 ,y:210},
    "Anarchy Acres": {x:970 ,y:220},
    "Pleasant Park": {x:770 ,y:275},
    "Loot Lake": {x:897 ,y:345},
    "Tomato Town": {x:1080 ,y:300},
    "Wailing Woods": {x:1212 ,y:282},
    "Snobby Shores": {x:605 ,y:400},
    "Tilted Towers": {x:840 ,y:440},
    "Dusty Divot": {x:1027 ,y:450},
    "Lonely Lodge": {x:1255 ,y:365},
    "Retail Row": {x:1145 ,y:470},
    "Greasy Grove": {x:715 ,y:540},
    "Shifty Shafts": {x:730 ,y:555},
    "Salty Springs": {x:1005 ,y:540},
    "Fatal Fields": {x:1030 ,y:655},
    "Moisty Mire": {x:1215 ,y:680},
    "Flush Factory": {x:828 ,y:745},
    "Risky Reels": {x:1140, y:204},
    "Lucky Landing": {x:1005, y:780},
    "Prison": {x:1160 ,y:640},
    "Football": {x:735, y:430},
    "Race Track": {x:1255, y:510},
    "Crates": {x:1135, y:370},
    "Flush Ext": {x:890, y:705},
    "Motel": {x:855, y:180}
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
