//Alternativno rješenje sa switch
function isValidWalk(walk) {
  var dx = 0;
  var dy = 0;
  var dt = walk.length;

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        dy++;
        break;
      case "s":
        dy--;
        break;
      case "e":
        dx++;
        break;
      case "w":
        dx--;
        break;
    }
  }

  if (dt === 10 && dx === 0 && dy === 0) {
    return true;
  }
}
