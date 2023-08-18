// function handleClick(data){
//     console.log(data)
// } 

document.getElementById('box-btn').addEventListener('click', function(e){
    console.log(e.target) // তারগেট মানে যেটাতে ক্লিক করবো সেটাই দেবে. এই সেম কাজ করে onclick="handleClick(this) হলো this
})