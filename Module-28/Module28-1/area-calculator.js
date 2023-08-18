function calculatorTringleArea(){
    // get triangle base value
    const baseField  = document.getElementById('triangle-base');
    const baseValueTextString = baseField.value;
    const baseValueText = parseFloat(baseValueTextString);
    console.log( baseValueText);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightFieldTextString = heightField.value;
    const heightFieldText = parseFloat(heightFieldTextString);
    console.log(heightFieldText)

    const area = 0.5 * baseValueText * heightFieldText
    console.log(area)

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}

function calculateRectangleArea(){
    // get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthFieldTextString = widthField.value;
    const widthFieldText = parseFloat(widthFieldTextString)
    console.log(widthFieldText)

    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldTextString = lengthField.value;
    const lengthFieldText = parseFloat(lengthFieldTextString)
    console.log(lengthFieldText)

    // validate input
    if(isNaN(widthFieldText) || isNaN(lengthFieldText)){
        // console.log('width is not a number')
        alert('please insert a number') 
        return // বাচ্চা তুমি আর সামনে আগালে মার দেব
    }

    // clculate area
    const rectangleArea =widthFieldText * lengthFieldText;

    // show rectangle area
    const areainnerText = document.getElementById('rectangle-area');
    areainnerText.innerText = rectangleArea;
} 
// এত সময় যা করলাম বাংলা সিস্টেমে করলাম ^

