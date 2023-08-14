console.log('first file')

// সব li সিলেক্ট করতে চাইলে কী হবে
const allLi = document.getElementsByTagName('li')
console.log(allLi);

//ক্লাস দিয়ে সিলেক্ট করার সিস্টেম
//একে Array লাইক অভজেট বলা হয়
const allTitles = document.getElementsByClassName('section-title')
console.log(allTitles);

// কোনো একটি ইলিমেন্ট কে আইডি দিয়ে সিলেক্ট করার সিস্টেম
const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color = 'white'
secondSection.style.backgroundColor = 'tomato'

// document.querySelectorAll
// document.querySelector

// অ্যাড করার সিস্টেম । কোথায় অ্যাড করবো সেটা আগে লাগবে 
const secondList = document.getElementById('second-list');

// কী অ্যাড করবো? আমরা লিস্ট আইটেমকে অ্যাড করবো 
const li = document.createElement('li');
li.innerText = 'My dynamic item';

// দুটোর মধ্যে কানেকসন ঘটাবো
secondList.appendChild(li);