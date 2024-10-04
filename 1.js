/**
 *
 * @param {String} s1
 * @param {String} s2
 * @returns {Boolean}
 */
function isTwoStringTheSame(s1, s2) {
  if (!s1 || !s2) return false;
  if (s1.length !== s2.length) return false;

  let linhCanh = true;
  let length = s1.length;

  for (let i = 0; i <= length; ++i) {
    if (s1[i] !== s2[i]) {
      linhCanh = false;
      break;
    }
  }

  return linhCanh;
}

const s1 = "q";
const s2 = "qwe";
const output1 = isTwoStringTheSame(s1, s2);
const output2 = isTwoStringTheSame(null, null);
const output3 = isTwoStringTheSame(undefined, undefined);
const output4 = isTwoStringTheSame("ca phe sua", "ca phe sua");
const output5 = isTwoStringTheSame("team 5 acc", "team 5 acc");

// console.log(output1); // false
// console.log(output2); // false
// console.log(output3); // false
// console.log(output4); // true
// console.log(output5); // true

// ----------0  1  2  3  4
const arr = [1, 2, 3, 4, 5];
const index = 2;
arr.splice(index, 1);
console.log(arr); // 1 2 4 5
