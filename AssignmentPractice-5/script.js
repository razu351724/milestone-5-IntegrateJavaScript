total = 0;
function mouchClickBtn(target){
    const cardName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = cardName;
    const selectedItemContainer = document.getElementById('selectedItem');
    selectedItemContainer.appendChild(li);
    const price = target.childNodes[3].childNodes[5].childNodes[0].innerText
    total = parseFloat(total) + parseFloat(price);
    const databuby = document.getElementById('totalPrice').innerText = total;
    document.getElementById('totalAmount').innerText = databuby ;


    const purchaseButton = document.getElementById('makePurchase');
    if (total > 0) {
        purchaseButton.removeAttribute('disabled');
    } else {
        purchaseButton.setAttribute('disabled', true);
    }

    const applybutton = document.getElementById('applybtn');  
    if (total > 200) {
        applybutton.removeAttribute('disabled');
    } else {
        applybutton.setAttribute('disabled', true);
    }
}


document.getElementById('applybtn').addEventListener('click',function(){

    const discountInput = document.getElementById('discountInput').value
    
    if(discountInput === 'SELL200'){
    
    var discountPercentage = 20
    var discountedPrice = (total * (discountPercentage / 100));
    const tofixtDiscountedPrice = discountedPrice.toFixed(2);
    document.getElementById('discount').innerText = tofixtDiscountedPrice;
    const tataolAmount = total - tofixtDiscountedPrice;
    document.getElementById('totalAmount').innerText =tataolAmount;
    
    }else{
        alert('Please use promo code')
    }
    discountInput.value = '';
})

document.getElementById('container').addEventListener('click',function(){
    window.location.href = 'index.html';
})
