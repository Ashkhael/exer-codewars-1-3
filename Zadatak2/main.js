function isValidWalk(walk) {
  var n = 0;
  var s = 0;
  var e = 0;
  var w = 0;
  if (walk.length > 10 || walk.length < 10) {
    return false;
  } else if (
    !(
      walk.includes("w") ||
      walk.includes("e") ||
      walk.includes("n") ||
      walk.includes("s")
    )
  ) {
    return false;
  }

  for (var i = 0; i < walk.length; i++) {
    if (walk[i] == "n") {
      n += 1;
    } else if (walk[i] == "s") {
      s += 1;
    } else if (walk[i] == "e") {
      e += 1;
    } else if (walk[i] == "w") {
      w += 1;
    }
  }
  if (n == s && w == e) {
    return true;
  } else {
    return false;
  }
}

Test.expect(
  isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return true"
);
Test.expect(
  !isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
  "should return false"
);
Test.expect(!isValidWalk(["w"]), "should return false");
Test.expect(
  !isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return false"
);
