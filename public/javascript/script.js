const avail    = document.querySelectorAll('#avail');
const dat      = document.querySelectorAll('#dat');
const quantity = document.querySelectorAll('#quantity');
const serial = document.querySelectorAll('#serial');


avail.forEach(avail=> {
    let val = avail.innerText;
    
    if ((val === 'Out Of Stock') || (val === 'Out-of-Stock')) {
        avail.classList.add('outofstock');
    }
    else if(val === 'Seasonal'){
        avail.classList.add('seasonal');
    }
});

dat.forEach(dat => {
    console.log(dat.innerText);
    if ((dat.innerText === '') || (dat.innerText === '0000-00-00')) { 
        dat.innerText = '-'
    }
    else{
        let date = new Date(dat.innerText);
        dat.innerText = date.toDateString();
    }
});


quantity.forEach(quantity=> {
    if((quantity.innerText === '') || (quantity.innerText === '0')){
        quantity.innerText = '-'
    }
});


serial.forEach(serial=> {
    if((serial.innerText === '') || (serial.innerText === '0') || (serial.innerText === null )){
        serial.innerText = '-'
    }
});