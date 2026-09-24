const button = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');
if (nav) {
  const contact = nav.querySelector('.nav-cta');
  const links = [
    { href: '/markets/', label: 'Markets' },
    { href: '/meter-sight/', label: 'Meter Sight' },
    { href: '/about/', label: 'About' }
  ];
  links.forEach(({ href, label }) => {
    let link = nav.querySelector(`a[href="${href}"]`);
    if (!link) {
      link = Object.assign(document.createElement('a'), { href, textContent: label });
      nav.insertBefore(link, contact);
    }
    if (location.pathname.startsWith(href)) link.setAttribute('aria-current', 'page');
  });
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

document.querySelectorAll('.site-footer nav').forEach((footerNav) => {
  if (footerNav.querySelector('a[href="/manufacturers/"]') && !footerNav.querySelector('a[href="/about/"]')) {
    footerNav.append(Object.assign(document.createElement('a'), { href: '/about/', textContent: 'About our team' }));
  }
});
