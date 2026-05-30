const linhas = document.querySelectorAll('.linha-item');
linhas.forEach(linha => {
  linha.addEventListener('click', function() {
    this.style.boxShadow = '0 6px 16px rgba(26,115,232,0.15)';
    setTimeout(() => {
      this.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
    }, 200);
  });
});
