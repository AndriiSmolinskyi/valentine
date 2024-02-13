const button = document.getElementById('randomButton');

button.addEventListener('mouseover', () => {
    const screenWidth = window.innerWidth - button.clientWidth;
    const screenHeight = window.innerHeight - button.clientHeight;

    const randomX = Math.random() * screenWidth;
    const randomY = Math.random() * screenHeight;

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});


const btnblock = document.querySelector('.block')
const yourValentine = document.querySelector('.your')

const yes = document.querySelector('#yesBtn')
const we = document.querySelector('.wegif')
const love = document.querySelector('.love')

yes.addEventListener('click', () => {
    btnblock.style.display = 'none'
    yourValentine.style.display = 'none'
    we.style.display = 'block'
    love.style.display = 'block'
})
