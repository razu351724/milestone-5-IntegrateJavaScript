// reusable function --> reduce duplicate code

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    console.log(base)

    const height = getInputValue('parallelogram-height');
    console.log(height)

    // validate
    if(isNaN(base) || isNaN(height)){
        alert ('please provied a number')
        return
    }

    const areaText = base * height; 

    // const area = document.getElementById('parallelogram-area');
    // area.innerText = areaText

    setElementInnerText('parallelogram-area', areaText)

    // add to calculation
    addToCalculationEntry('parallelogram', areaText)
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);
}

// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputText = inputField.value;
    const inputTextValue = parseFloat(inputText);
    return inputTextValue;
}

// reusable set text span, p, div, etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// add to calculation entry
/*
1. get the element  where where you want to add the dynamic HTML
2. creat an  element you want to add
3. if needed add some class
4. set inner HTML. it could be dynamic Template string
5. append the created element as a child of the parent
 */

function addToCalculationEntry( areaType, areaText){
    console.log(areaType+ '' +areaText)
    const calculationEntry = document.getElementById('calculation-entry')

    const p = document.createElement('p');
    p.innerText = ` ${areaType} ${areaText} cm<sup>2</sum> <button class="btn btn-success btn-sm">Convert</button>`;

    calculationEntry.appendChild(p);
}

// Data validation
/*
1. set the proper type of the input field. (number, data, emil, text)
2. check tyep using typeof 
3.NaN means : Not a Number. isNaN is checking whecking whether the input is not a number or not 
*/