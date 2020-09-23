function alphabetPosition(text) {
  //skripta koja nalazi slova u stringu i zamjenjuje ih s njihovim rednim brojem u abecedi
  return (
    text
      .toLowerCase() //prebacuje u lowerCase
      .replace(/[^a-z]/g, "") //zamjenjuje sve što nije a-z sa praznim stringom. te potom...
      .replace(/./g, (b) => " " + (b.charCodeAt(0) - "a".charCodeAt(0) + 1))
      //...zamjenjuje svaki znak u stringu sa whitespace + (charcode na indexu 0 (broj prema UTF-16) - broj koji predstavlja "a" u UTF-16...
      //...(jer mala slova ne počinju na početku, ie. a = 97) + 1 jer index UTF-16 počinje od 0)
      .substr(1)
  ); //izbacuje string od indexa 1 jer prethodna metoda na prvo mjesto stavlja whitespace
}

//ALTERNATIVNO

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .replace(/./g, (b) => " " + (b.charCodeAt(0) - 96)) // umjesto svega gore, samo -96 da se vratimo na broj u abecedi
    .substr(1);
}

//ALTERNATIVNO 2

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi) // umjesto replace, .match radi array od simbola koje match-amo
    .map((c) => c.charCodeAt() - 64) //onda taj array .map-amo na isti način kao i što gore radimo novi replace
    .join(" "); // .join vraća array kao string sa separatorom whitespace
}
