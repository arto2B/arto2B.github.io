var locations = {
    "Junk Junction": {x:590,y:140},
    "Haunted Hills": {x:550 ,y:210},
    "Anarchy Acres": {x:860 ,y:220},
    "Pleasant Park": {x:650 ,y:275},
    "Loot Lake": {x:780 ,y:345},
    "Tomato Town": {x:970 ,y:295},
    "Wailing Woods": {x:1100 ,y:280},
    "Snobby Shores": {x:505 ,y:400},
    "Tilted Towers": {x:730 ,y:440},
    "Dusty Divot": {x:915 ,y:445},
    "Lonely Lodge": {x:1145 ,y:365},
    "Retail Row": {x:1035 ,y:470},
    "Greasy Grove": {x:615 ,y:540},
    "Shifty Shafts": {x:730 ,y:555},
    "Salty Springs": {x:895 ,y:540},
    "Fatal Fields": {x:915 ,y:655},
    "Moisty Mire": {x:1115 ,y:670},
    "Flush Factory": {x:715 ,y:745},
    "Risky Reels": {x:1030, y:200},
    "Lucky Landing": {x:890, y:780},
    "Prison": {x:1045 ,y:635},
    "Football": {x:625, y:430},
    "Race Track": {x:1155, y:510},
    "Crates": {x:1015, y:370},
    "Flush Ext": {x:775, y:705},
    "Motel": {x:750, y:180}
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
