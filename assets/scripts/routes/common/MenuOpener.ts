export default {
    addEvent() {
        const menuOpenerButton = document.querySelector('.js-open-sites');

        if(!menuOpenerButton) {
            console.warn(`No button found with class .js-open-sites`);
            return;
        }

        menuOpenerButton
            .addEventListener('click', () => {
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
