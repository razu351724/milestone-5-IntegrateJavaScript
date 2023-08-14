const sections = document.querySelectorAll('section');
// console.log(sections)

// for(let i=0; i<sections.length; i++){
//    const section = sections[i];
//    console.log(section);
// }

for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBlock = '10px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow'

//এই জায়গাই বুঝছি না এবং বান হচ্ছে না।
const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text')

