let age: number = 37;
age = 38;

let ageAsString: string = "trzydziesci siedem";
ageAsString = "trzydziesci osiem";
ageAsString = `${age}`;

console.log(ageAsString + " " + age);

function add(v1: number, v2: number) {
  return v1 + v2;
}

const add2 = (c1: number, c2: number) => c1 + c2;
console.log(add(2, 10));
console.log(add2(2, 11));
