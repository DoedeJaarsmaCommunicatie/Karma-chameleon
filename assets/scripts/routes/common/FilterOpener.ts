export default () => {
    try {
        document
            .querySelector('.filter-opener')
            .addEventListener('click', () => {
                document.querySelector('.product-filter').classList.toggle('active');
            });

        document
            .querySelector('.product-filter')
            .addEventListener('click', e => {
                if (!(e.target as Element).classList.contains('product-filter') ) return;
                document.querySelector('.product-filter').classList.remove('active');
            })
    } catch ( e ) {
        // do nothing
    }

};
