function toggleMenu() {
  document.querySelector('.menubar').classList.toggle('active');
}

document.querySelector('.filter-opener').addEventListener('click', function () {
  document.querySelector('.product-filter').classList.toggle('active');
});
document.querySelector('.product-filter').addEventListener('click', function (e) {
  if (!e.target.classList.contains('product-filter')) return;
  document.querySelector('.product-filter').classList.remove('active');
});
