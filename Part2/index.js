





const idInput = document.getElementById("idInput");
const colorInput = document.getElementById("colorInput");

function setCard(){
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}


function resetCard(){
    const blankCard = document.getElementById(idInput.value);
    blankCard.style.color = 'RGB(128, 128, 128)';
}


function resetAllCards(){
    const hearts = document.getElementById("hearts");
    const clubs = document.getElementById("clubs");
    const spades = document.getElementById("spades");
    const diamonds = document.getElementById("diamonds");
    hearts.style.color = 'RGB(128, 128, 128)';
    clubs.style.color = 'RGB(128, 128, 128)';
    spades.style.color = 'RGB(128, 128, 128)';
    diamonds.style.color = 'RGB(128, 128, 128)';
}









