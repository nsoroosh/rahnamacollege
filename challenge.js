function CheckTwoPerson(harf, x, y) {
  let emtiazx = 0;
  for (let i = 0; i < 4; i++) {
    if (x[i][1] != harf) {
      break;
    }
    if (x[i] == y[i]) {
      emtiazx += 5;
    } else {
      emtiazx += 10;
    }
  }
  return emtiazx;
}
function CheckPlay(harf, array) {
  let emtiazha = [];
  for (let j = 0; j < array.length; j++) {
    for (let p = 1; p < array.length-1; p++) {
      emtiazha.push(CheckTwoPerson(harf, array[j], array[p]));
    }
  }
  return emtiazha;
}
const input = [
  ["ali", "abadan", "asal", "abi"],
  ["hossein", "abadan", "asal", "abi"],
  ["ali", "abadan", "asal", "abi"],
];

console.log(CheckPlay("a", ...input));
