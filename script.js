const revealItems = document.querySelectorAll('.reveal');

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  }
);

revealItems.forEach((item) => io.observe(item));

const chips = document.querySelectorAll('.chip');
const timelineItems = document.querySelectorAll('.timeline-item');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const year = chip.dataset.year;

    chips.forEach((target) => target.classList.remove('active'));
    chip.classList.add('active');

    timelineItems.forEach((item) => {
      const visible = year === 'all' || item.dataset.year === year;
      item.classList.toggle('hidden', !visible);
    });
  });
});
