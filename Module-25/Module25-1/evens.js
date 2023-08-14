console.log('Theis is separate js file')

//option 1: directly set on the HTML element
// <button onclick = "console.log(65)"> Another button </button>

//option 2: add onclick function on the html element
// <button onclick="makeRed()">Make Red</button>
function makeRed(){
    document.body.style.backgroundColor = 'red'
}

// সিস্টেম নাম্বার থ্রী
const makeBlueButton = document.getElementById('make-blue')
    // console.log(makeBlueButton)
    makeBlueButton.onclick = makeBlue;

    function makeBlue(){
        document.body.style.backgroundColor = 'blue'
    }

// option: 3 another [we will use this sometime]
const purpleButton = document.getElementById('make-purple')   
// console.log(purpleButton) 
purpleButton.onclick = function makepurple(){
    document.body.style.backgroundColor = 'purple'
}

//option:4
const pinkButton = document.getElementById('make-pink')
 //  কনসল লগ করে কনফাম হও ঠিক আছে কী না..
 // console.log(pinkButton)
 pinkButton.addEventListener('click', makepinlk)
 function makepinlk(){document.body.style.backgroundColor = 'pink'
 }

 // option: 4 another
 const makeGreenButton = document.getElementById('make-green')
 // console.log(greenButton)
 makeGreenButton.addEventListener('click', function makeGreen(){document.body.style.backgroundColor = 'green'
 })

 // option: 4 Final এটাই আমরা ব্যাবহার করবো
 document.getElementById('make-goldenrod').addEventListener('click', function(){document.body.style.backgroundColor = 'goldenrod'} ) 