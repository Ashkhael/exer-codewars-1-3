function highAndLow(numbers) {
  var array = numbers.split(" ").map(function (x) {
    return parseInt(x);
  }); //split razdvaja svaki element stringa u array stringova, a map pretvara stringove u brojeve
  // umjesto fuction.. moze ici samo x=>+x koje je bolje
  var a = array.reduce(function (x, y) {
    return Math.max(x, y);
  }); //array.reduce je potreban da bi se izvršila funkcija s Math.max metodom na array-u
  var b = array.reduce(function (x, y) {
    return Math.min(x, y);
  });
  return `${a} ${b}`;
}

// ALTERNATIVNO

function highAndLow(numbers) {
  var array = numbers.split(" ").map((x) => +x);
  var a = Math.max(...array);
  var b = Math.min(...array);
  return `${a} ${b}`;
}
