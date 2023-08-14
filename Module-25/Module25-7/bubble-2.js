document.getElementById('item-2').addEventListener('click', function(event){
    console.log('Item-2 click')
    //stopPropagation event babbul টা স্টপ করবা কী ভাবে। answer হলো stopPropagarion করতে হবে
    // event.stopPropagation()
    event.stopImmediatePropagation
});
document.getElementById('item-2').addEventListener('click', function(event){
    console.log('Item-2 click')
});
document.getElementById('item-2').addEventListener('click', function(event){
    console.log('Item-2 click')
});
document.getElementById('item-2').addEventListener('click', function(event){
    console.log('Item-2 click')
});



document.getElementById('list-ul').addEventListener('click', function(){
    console.log('ul clicke')
});

document.getElementById('list-container').addEventListener('click', function(){
    console.log('section container clicke')
});

document.getElementById('body').addEventListener('click', function(){
    console.log('body of the html  clicked')
});
