document.querySelectorAll('.nav-dropdown').forEach((dropdown) => {
  dropdown.addEventListener('toggle', () => {
    if (dropdown.open) {
      document.querySelectorAll('.nav-dropdown[open]').forEach((other) => {
        if (other !== dropdown) other.removeAttribute('open');
      });
    }
  });
});

document.addEventListener('click', (event) => {
  document.querySelectorAll('.nav-dropdown[open]').forEach((dropdown) => {
    if (!dropdown.contains(event.target)) dropdown.removeAttribute('open');
  });
});
