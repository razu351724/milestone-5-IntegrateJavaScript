function handleClick(data){
    console.log(data.parentNode.childNodes) // ছেলে বলা হচ্ছে তোমার পিতা কে
    // console.log(data.parentNode.childNodes ) // পিতা কে বলা হচ্ছে তোমার ছেলেমেয়ে কয়জন 
    console.log(data.parentNode.childNodes[3].innerText) // পিতা কে বলা হচ্ছে তোমার প্রথম ছেলেকে দাও, এবং কি পরা আছে দেখাও
} 

// const number = ['gias', 'hero', 'bd'];
// console.log(number[0])