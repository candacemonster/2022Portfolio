// Light & Dark Theme
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

  // Set the initial theme
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Update icons based on the current theme
  if (currentTheme === 'dark') {
      feather.replace({ class: 'icon-light' });
  } else {
      feather.replace({ class: 'icon-dark' });
  }

  // Event listener for the theme toggle button
  themeToggle.addEventListener('click', function () {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      
      // Set the new theme
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);

      // Update icons based on the new theme
      if (newTheme === 'dark') {
          feather.replace({ class: 'icon-light' });
      } else {
          feather.replace({ class: 'icon-dark' });
      }
  });
});