const number = '23'
if(typeof number === 'number'){
    console.log('value is a number');
}
else{
    console.log('value is not a number')
}

const numbers = [3, 12, 78, 90];
const student = {nume: 'Rongila Rafsan', job: 'khawadawa kora'}
// console.log(typeof numbers); [output: object]
// console.log(typeof student); [output: object]
// উপরে দুটোই ওবজেট দেখাছে [আমরা চেক করবো isArray() দিয়ে ]
console.log(Array.isArray(numbers)) //[output: true]
console.log(Array.isArray(student)) //[output: false]

const name = isNaN(22); // not a number
console.log(name)