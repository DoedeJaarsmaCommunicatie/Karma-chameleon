function toggleMenu() {
  document.querySelector('.menubar').classList.toggle('active');
}

document.querySelector('.js-open-sites').addEventListener('click', function () {
  document.querySelector('.sites-wrapper').classList.add('active');
});
document.querySelector('.sites-wrapper').addEventListener('click', function (e) {
  if (e.target !== this) {
    return;
  }

  document.querySelector('.sites-wrapper').classList.remove('active');
});

try {
  document.querySelector('.filter-opener').addEventListener('click', function () {
    document.querySelector('.product-filter').classList.toggle('active');
  });
  document.querySelector('.product-filter').addEventListener('click', function (e) {
    if (!e.target.classList.contains('product-filter')) return;
    document.querySelector('.product-filter').classList.remove('active');
  });
} catch (e) {// do nothing
}
