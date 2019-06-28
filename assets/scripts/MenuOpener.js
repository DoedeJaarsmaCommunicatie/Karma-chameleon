function toggleMenu() {
    document.querySelector('.menubar').classList.toggle('active');
}

document.querySelector('.js-open-sites').addEventListener('click', () => {
    document.querySelector('.sites-wrapper').classList.add('active');
});

document.querySelector('.sites-wrapper').addEventListener('click', function (e) {
    if (e.target !== this) {
        return;
    }
    document.querySelector('.sites-wrapper').classList.remove('active');
})
