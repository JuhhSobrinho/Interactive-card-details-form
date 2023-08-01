export function main() {
    const botao = document.querySelector(".botao");

    const cardNumber = document.querySelector("#cardNumber");
    const cardHolder = document.querySelector("#cardholder-name");
    const mmCard = document.querySelector("#mm-card");
    const yyCard = document.querySelector("#yy-card");
    const cvcCard = document.querySelector("#cvc-card");


    const holderCard = document.querySelector("#name-card");
    const numberCard = document.querySelector("#number-card");
    const mm = document.querySelector("#mm");
    const yy = document.querySelector("#yy");
    const cvc = document.querySelector("#cvc");

    const border = document.querySelectorAll(".dados");
    const errorBlank = document.querySelectorAll(".error-blank");



    cardNumber.addEventListener('input', () => {

        if (cardNumber.value === '') {
            let vazio = '0000 0000 0000 0000';
            numberCard.innerHTML = vazio;
        } else if (cardNumber.value !== null && cardNumber.value !== undefined && cardNumber.value !== ""){
            numberCard.innerHTML = cardNumber.value.toString().match(/.{1,4}/g).join(' ');
        }

    });

    cardHolder.addEventListener('input', () => {
        holderCard.innerHTML = cardHolder.value;
        
        if (cardHolder.value === '') {
            let vazio = 'jane appleseed';
            holderCard.innerHTML = vazio;
        }
    });

    mm.addEventListener('input', () => {
        mmCard.innerHTML = mm.value;

        if (mm.value === '') {
            let vazio = '00';
            mmCard.innerHTML = vazio;
        }
    });

    yy.addEventListener('input', () => {
        yyCard.innerHTML = '/' + yy.value;

        if (yy.value === '') {
            let vazio = '/00';
            yyCard.innerHTML = vazio;
        }
    });

    cvc.addEventListener('input', () => {
        cvcCard.innerHTML = cvc.value;

        if (cvc.value === '') {
            let vazio = '000';
            cvcCard.innerHTML = vazio;
        }
    })



    botao.addEventListener('click', () => {

        let cardAdd = true;

        for (let i = 0; i < border.length; i++) {
          const elementBorder = border[i];
          const elementError = i === 4 ? errorBlank[errorBlank.length - 1] : errorBlank[i];

          
          if (elementBorder.value === '') {
            elementBorder.style.boxShadow = '0 0 5px red';
            elementError.style.display = 'flex';
            cardAdd = false;
          } else {
            elementBorder.style.boxShadow = '0 0 0px red';
            elementError.style.display = 'none';
          }
          
        }
        
        if (cardAdd) {
            console.log("funfo");
        }

    });
}