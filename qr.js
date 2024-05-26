let qrinput = document.getElementById('qr-input');
let qrimg = document.getElementById('qr-image');
let qrbutton = document.getElementById('qr-button');

qrbutton.addEventListener('click', () => {
    let inputValue = qrinput.value;


    // Get access of API of qr code from goqrcode
    if(!inputValue){
        alert('Please enter a valid url or text');
        return;
    } else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.alt = `QR Code for ${inputValue}`;
    }
});