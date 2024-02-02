const width: number = 7;
const height: number = 4;
const area: number = width * height;
console.log('value of area:', area);
console.log('typeof area:', typeof area);

const bill: number = 11;
const payment: number = 20;
const change: number = payment - bill;
console.log('value of change:', change);
console.log('typeof change:', typeof change);

const quizzes: number = 8;
const midterm: number = 4;
const final: number = 3;
const grade: number = (quizzes + midterm + final) / 3;
console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName: string = 'Karina';
const lastName: string = 'Kim';
let fullName: string = firstName + ' ' + lastName;
console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH: number = 13;
const isAcidic: boolean = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headCount: number = 505;
const isSparta: boolean = headCount === 300;
console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

const motto: string = (fullName += ' is the GOAT');
console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);
