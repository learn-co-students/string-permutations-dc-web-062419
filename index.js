function findAllPermutations(string) {
  if (string.length < 2) {
    return string;
  }
  let perms = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (string.indexOf(char) != i) continue;
    let remainingString =
      string.slice(0, i) + string.slice(i + 1, string.length);
    for (let subPermutation of findAllPermutations(remainingString))
      perms.push(char + subPermutation);
  }
  return perms;
}
