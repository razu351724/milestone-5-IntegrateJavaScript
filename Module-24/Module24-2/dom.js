// কোনো একটি এস্পেসিপ ইলিমেন্ট কে যদি পাইতে চাই তাহলে ঐ মধ্যে একটি আইডি বসাবো এবং document.getElementsbyId('নাম বসাবো তাহলে ইলিমেনটি পেয়ে যাবো')
console.log('hello js')
console.log(document)

const allHeadins = document.getElementsByTagName('h1')
// for(let i=0; i<allHeadins.length; i++){
//     h1 = allHeadins[i];
//     console.log(h1)
// }

for(const h1 of allHeadins){
    console.log(h1.innerText)
}

// option-1: getElementsByTagName
const licollection = document.getElementsByTagName('li')
    // console.log(licollection)

        for (let i = 0; i < licollection.length; i++) {
        const li = licollection[i];
        console.log(li.innerText);
        }
        
        // for(const li of licollection){
        //     console.log(li)
        // }
         
// option-2:getElementById        
const fruitsTitle = document.getElementById('fruits-title') 
fruitsTitle.innerText = ('Fruits changed by js')       

// option-3:getElementsByClassName
const places = document.getElementsByClassName('important-palces')
    // console.log(places)

    // for(let i= 0; i<places.length; i++){
    //     const placesArry = places[i]
    //     console.log(placesArry) 
    // }

    for(const placesArry of places){
        console.log(placesArry);
    }

// querySelector
const element = document.querySelector('.fruits-container li')
console.log(element)

// querySelectorAll
const someli = document.querySelectorAll('.fruits-container li');
console.log(someli);

for(const li of someli){
    // console.log(li)
    console.log(li.innerText);
}

const titl =  document.getElementById('fruits-title')
