
document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const type = checkbox.dataset.type;
    const cards = document.querySelectorAll('.card.' + type);
    cards.forEach(card => {
      card.style.display = checkbox.checked ? 'block' : 'none';
    });
  });
});
