//Task 1

var str = "Curiosity killed the cat.";
var w = 0;
var v = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] == 0 || str[i] == ".") w++;
  if (
    str[i] == "a" ||
    str[i] == "e" ||
    str[i] == "i" ||
    str[i] == "o" ||
    str[i] == "u"
  )
    v++;
}
console.log(w);
console.log(v);

//Task2

var set1 = [3, 1, 7, 9];
var set2 = [2, 4, 1, 9, 3];
var sum = 0;

for (let i = 0; i < set1.length; i++) {
  let flag = true;
  for (let j = 0; j < set2.length; j++) {
    if (set1[i] == set2[j]) flag = false;
  }
  if (flag == true) sum += set1[i];
}

for (let i = 0; i < set2.length; i++) {
  let flag = true;
  for (let j = 0; j < set1.length; j++) {
    if (set2[i] == set1[j]) flag = false;
  }
  if (flag == true) sum += set2[i];
}

console.log(sum);
