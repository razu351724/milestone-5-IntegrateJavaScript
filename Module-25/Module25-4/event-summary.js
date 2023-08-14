function handleOnClick(){
    // console.log('button clicked')
    const handlerStatus = document.getElementById('handlerstatus'); 
    handlerStatus.innerText = 'Hendled by function attached on onclick attribute'
}

// option 2
document.getElementById('event-lisenter').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handlerstatus');
    handlerStatus.innerText = 'Text updated by add Event listener button'
})
