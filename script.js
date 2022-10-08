const form = document.querySelector('.form');

form.addEventListener('click', () => {
    if (form.style.background == 'black') {
        form.style = `
            background: red;
            border-radius: 250px;
            transition: 1s;
        `
    }
    else {
        form.style = `
            background: black;
            border-radius: none;
            transition: 1s;
        `
    }
});