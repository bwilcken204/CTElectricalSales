const button = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');
if (button && nav) {
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
}

const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
filters.forEach((filter) => filter.addEventListener('click', () => {
  filters.forEach((item) => item.classList.remove('active'));
  filter.classList.add('active');
  const choice = filter.dataset.filter;
  cards.forEach((card) => {
    card.hidden = choice !== 'all' && !card.dataset.category.split(' ').includes(choice);
  });
}));

document.querySelectorAll('[data-year]').forEach((node) => node.textContent = new Date().getFullYear());
