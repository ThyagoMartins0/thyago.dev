function changeLanguage(lng) {
    i18next.changeLanguage(lng, updateContent);
  }
  
  function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      element.innerHTML = i18next.t(key);
    });
  }
  
  i18next
    .use(i18nextXHRBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
      fallbackLng: 'en',
      backend: {
        loadPath: 'assets/locale/{{lng}}.json'
      }
    }, function(err, t) {
      // Initialize the content
      updateContent();
    });
  
  document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('language-select');
    selectElement.addEventListener('change', (event) => {
      event.preventDefault(); // Evita o comportamento padrão
      changeLanguage(event.target.value);
    });
  });