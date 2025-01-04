/**
 * Change preferred theme colour
 * @param {'light' | 'dark'} theme - set preferred theme
 */
function changeTheme (theme) {
  const HTMLElement = document.querySelector('html')

  HTMLElement.dataset.bsTheme = theme
}

/**
 * Theme change
 */
const themePreferred = window.matchMedia('(prefers-color-scheme: dark)');
const themeSelect = document.getElementById('selectTheme')

// preferred dark theme
if (themePreferred.matches) {
  themeSelect.value = 'dark'
  changeTheme(themeSelect.value)
}

// toggle dark theme
themeSelect.addEventListener('input',  () => {
  changeTheme(themeSelect.value)
})
