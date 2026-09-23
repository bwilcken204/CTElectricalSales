const button = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');
if (nav && !nav.querySelector('a[href="/markets/"]')) {
  const contact = nav.querySelector('.nav-cta');
  const markets = Object.assign(document.createElement('a'), { href: '/markets/', textContent: 'Markets' });
  const meterSight = Object.assign(document.createElement('a'), { href: '/meter-sight/', textContent: 'Meter Sight' });
  nav.insertBefore(markets, contact);
  nav.insertBefore(meterSight, contact);
  if (location.pathname.startsWith('/markets/')) markets.setAttribute('aria-current', 'page');
  if (location.pathname.startsWith('/meter-sight/')) meterSight.setAttribute('aria-current', 'page');
}
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
