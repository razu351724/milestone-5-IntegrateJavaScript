// step-1: add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('The button baap Er Bank')
    // step-2: get the email addrss inside the email input field;
    // always remember to use .value to get text from an input field;
    const emailField = document.getElementById('user-email')
    const email = emailField.value
    // console.log(email)
    // step-3:get pasword
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element 
    const paswordFidld = document.getElementById('user-password')
    const password =paswordFidld.value
    // console.log(password)

    // DANGER: DO NOT VERIFY email password on the client side
    // step-4: verify email and password and check wheter valid user or not
    if(email === 'razu351724@gmail.com' && password === '123456'){
        // console.log('valid user')
        window.location.href = 'bank.html'
    }else{
        // console.log('invlid user')
        alert('tui password vule gesos!! Toke ami teijjo sontan gosona korlam')
    }
})