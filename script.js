function getPin(){
    let random = Math.random() * 10000;
    let pin = (random + "").split('.')[0];
    if(pin.length === 4){
        return pin;
    }else{
       return getPin();
    }
}

function generatorPin(){
    const displayPin = document.getElementById('displayPin');
    displayPin.value = getPin();
}

document.getElementById('digit-container').addEventListener('click',function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        if(digit === "C"){
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = '';
        }
        if(digit === "<"){
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = typedInput.value.substring(0, typedInput.value.length - 1);
        }
    }else{
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})

// Compare pin function
function verifyPin(){
    const pin = document.getElementById('displayPin').value;
    const typedInput = document.getElementById('typed-pin').value;
    if(pin === typedInput){
        // const correctPin = document.getElementById('correct-pin');
        // correctPin.style.display = 'block';
        // const inCorrectPin = document.getElementById('incorrect-pin');
        // inCorrectPin.style.display = 'none';
        displayMatch('block','none');
    }else{
        // const inCorrectPin = document.getElementById('incorrect-pin');
        // inCorrectPin.style.display = 'block';
        // const correctPin = document.getElementById('correct-pin');
        // correctPin.style.display = 'none';
        displayMatch('none','block');
    }
}

function displayMatch(correct,incorrect){
        const correctPin = document.getElementById('correct-pin');
        correctPin.style.display = correct;
        const inCorrectPin = document.getElementById('incorrect-pin');
        inCorrectPin.style.display = incorrect;
}
