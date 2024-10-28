// Seleciona todos os links de redes sociais
const socialLinks = document.querySelectorAll('.contato-icones a');

// Adiciona um evento para cada link para abrir em uma nova aba
socialLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const url = this.getAttribute('href');
        window.open(url, '_blank');
    });
});