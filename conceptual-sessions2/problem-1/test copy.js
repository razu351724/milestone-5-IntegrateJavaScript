function test1(){
    // document.getElementById('info1').innerText = 'banglesh'
    setText('info1', 'I love bangladesh')
    const sum = toNumber('input1')
    console.log(sum)
}

function test2(){
    document.getElementById('info2').innerText = 'banglesh'
}

function test3(){
    document.getElementById('info3').innerText = 'banglesh'
}

//commen function all work
function setText(id,text){
    document.getElementById(id).innerText =text;
}


function toNumber(id){
    const result = document.getElementById(id).value;
    return parseInt(result);
}
