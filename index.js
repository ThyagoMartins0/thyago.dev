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
