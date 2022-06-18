const thankyou = document.querySelector('.thankyou')
const ratingCard = document.querySelector('.rating-card')
const btnRating = document.querySelector('.rating-card__btn')
const submitBtn = document.querySelector('.rating-card__submitBtn')
const badge = document.querySelector('.thankyou-card__badge')

// Event listener for rating buttons
btnRating.addEventListener('click', (e) => {
    if(e.target.className == 'btnRate'){
        const btnVal = e.target.textContent;
        updateDOM(btnVal);
    }
})

// Event Listener for submit button
submitBtn.addEventListener('click', (e) => {
    if (!badge.textContent.includes(`You`))
    {
        submitBtn.disable();
    }
    thankyou.classList.toggle('active')
    ratingCard.classList.remove('active')
})

// Updates the thankyou card
function updateDOM(btnVal){
    badge.textContent = `You selected ${btnVal} out of 5`
}