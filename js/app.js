// set 4 desite
function getPin(){
    const pin = getRandomPin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // when less then 4 you can function recall
        return getPin();
    }
}

//get random pin
function getRandomPin(){
    const randomPin = Math.round(Math.random() * 10000);
    return randomPin;
    
}

// click pin generate btn
document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    
    //display pin generate.
    const getPinDisplay = document.getElementById('display-pin');
    getPinDisplay.value = pin;
})



// calculator number clicked
document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const getCalDisplay = document.getElementById('typed-numbers')
    const getCalNumber = getCalDisplay.value;

    if(number === 'C'){
        getCalDisplay.value = '';
    }
    else if(number === '<'){
        const disits = getCalNumber.slice(0, -1);
        getCalDisplay.value = disits;
    }
    else{
        const displayValue = getCalNumber+ number;
        getCalDisplay.value = displayValue
    }


})

//get display value
function getCalDisplayNumber (displayId){
    const getDisplay = document.getElementById(displayId);
    const getNumber = getDisplay.value;
    return getNumber;
}


//calculator submit clicked and matched pin generator
document.getElementById('verify-pin').addEventListener('click', function(){
    // get pin display number
    const pinDisplayNumber = getCalDisplayNumber ('display-pin');
    //get calculator display number
    const calDisplayNumber = getCalDisplayNumber ('typed-numbers');


    //get pin-success fild
    const pinSuccess = document.getElementById('pin-success');
    //get pin-failure fild
    const pinFailure = document.getElementById('pin-failure');
    //get action fild
    const action = document.getElementById('action');

    if(pinDisplayNumber === calDisplayNumber){
        pinSuccess.style.display = 'block';
        pinFailure.style.display = 'none';
        action.style.display = 'none';
    }
    else{
        pinFailure.style.display = 'block'
        pinSuccess.style.display = 'none';
        action.style.display = 'block';
    }
})