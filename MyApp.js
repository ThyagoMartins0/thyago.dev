// MyApp.js
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

function MyApp() {
  return (
    <div>
      <h1>Bem-vindo ao meu aplicativo</h1>
      {/* Outros componentes ou conteúdo */}
      <Analytics />
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("language-select");
  
  // Função para carregar o arquivo de idioma e aplicar as traduções
  async function loadTranslations(lang) {
    try {
      const response = await fetch(`/locale/${lang}.json`);
      const translations = await response.json();
      applyTranslations(translations);
    } catch (error) {
      console.error("Error loading translations:", error);
    }
  }

  // Função para aplicar as traduções à página
  function applyTranslations(translations) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const keys = el.getAttribute("data-i18n").split(".");
      let translation = translations;
      keys.forEach((key) => {
        translation = translation[key] || "";
      });
      el.innerText = translation;
    });
  }

  // Evento para trocar o idioma quando o usuário muda no seletor
  languageSelect.addEventListener("change", (event) => {
    const selectedLang = event.target.value;
    loadTranslations(selectedLang);
  });

  // Carregar o idioma padrão (baseado no navegador ou fallback)
  const defaultLang = navigator.language.startsWith("pt") ? "pt" : "en";
  languageSelect.value = defaultLang;
  loadTranslations(defaultLang);
});


export default MyApp;
