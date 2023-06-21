const fiveNumbers = [2, 3, 5, 7, 11];
let [...{ n1, n2, n3, n4, n5 }] = fiveNumbers;

let json = {
	v1: n1,
	v2: n2,
	v3: n3,
	v4: n4,
	v5: n5,
};

json = JSON.stringify(json);
json = JSON.parse(json);
console.log(n1);
