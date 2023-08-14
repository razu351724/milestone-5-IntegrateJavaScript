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

const licollection = document.getElementsByTagName('li')

        for (let i = 0; i < licollection.length; i++) {
        const li = licollection[i];
        console.log(li.innerText);
        }
        
        // for(const li of licollection){
        //     console.log(li)
        // }