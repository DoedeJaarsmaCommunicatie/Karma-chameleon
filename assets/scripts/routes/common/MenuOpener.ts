export default {
    toggleMenu() {
        document.querySelector('.menubar').classList.toggle('active');
    },

    addEvent() {
        document.querySelector('.js-open-sites').addEventListener('click', () => {
            document.querySelector('.sites-wrapper').classList.add('active');
        });

        document.querySelector('.sites-wrapper').addEventListener('click', function (e) {
            if (e.target !== this) {
                return;
            }
            document.querySelector('.sites-wrapper').classList.remove('active');
        })

    }
}
