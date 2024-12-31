const input = document.querySelector('.slider__input');
const img = document.querySelector('.slider__image');

input.addEventListener('input', _.debounce(
    () => {
        const inputValue = Number(document.querySelector('.slider__input').value);
    
        if(inputValue >= 50) {
            let userInput = inputValue % 50;
            let imgStyle = Number(300 + (userInput * 10));
        
            img.style.height = `${imgStyle}px`
            img.style.width = `${imgStyle}px`
        } else if(inputValue <= 50) {
            let userInput = 50 - inputValue;
            let imgStyle = Number(300 - (userInput * 10));
        
            img.style.height = `${imgStyle}px`
            img.style.width = `${imgStyle}px`
        } else {
            return;
        }
    }, 500
));