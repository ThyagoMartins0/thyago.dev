function mostrarBotoes() {
  var botoesContainer = document.getElementById('botoesContainer');

  // Verifica o estado atual do contêiner de botões
  if (botoesContainer.style.display === 'none' || botoesContainer.style.display === '') {
      // Se estiver oculto, exibe os botões
      botoesContainer.style.display = 'block';
  } else {
      // Se estiver visível, oculta os botões
      botoesContainer.style.display = 'none';
  }
}

/* ------------------- */
window.onload = () => {
  topo.classList.toggle ("hide-top");
}

/*-------------------*/
function scrollToSection(navbar, about) {
  // Atraso de 2 segundos antes de iniciar a rolagem
  setTimeout(function() {
      // Obtém o elemento alvo com base no ID
      const targetElement = document.getElementById(about);

      // Usa o método scrollIntoView para rolar até o elemento alvo
      targetElement.scrollIntoView();
  }, 2000); // 2000 milissegundos = 2 segundos
}


