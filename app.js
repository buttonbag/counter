// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


//color change
const colorChange = () => {
    if (count > 0) {
        value.style.color = "green"
    } else if (count < 0) {
        value.style.color = "red"
    } else if (count === 0) {
        value.style.color = "blue"
    }
}
btns.forEach((btn) => {
    const logClick = (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else if (styles.contains('reset')) {
            count = 0;
        }
        colorChange();
        value.textContent = count;
    }
    btn.addEventListener('click', logClick);
});

//keypress
const logKey = (e) => {
    if (e.code == 'ArrowUp') {
        count++;
    }
    else if (e.code == 'ArrowDown') {
        count--;
    } else if (e.code == 'ArrowLeft' || e.code == 'ArrowRight') {
        count = 0;
    }
    colorChange();
    value.textContent = count;
}
document.addEventListener('keydown', logKey);