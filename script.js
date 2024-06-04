// Define uma variável global currentIndex com o valor inicial 0
let currentIndex = 0;

// Função para abrir o modal
function openModal(modalId) {
    // Seleciona o elemento do modal pelo ID
    const modal = document.getElementById(modalId);
    // Adiciona a classe 'open' ao modal para exibi-lo
    modal.classList.add('open');
    // Chama a função showItem passando o índice atual
    showItem(currentIndex);
}

// Função para fechar o modal
function closeModal(modalId) {
    // Seleciona o elemento do modal pelo ID
    const modal = document.getElementById(modalId);
    // Remove a classe 'open' do modal para ocultá-lo
    modal.classList.remove('open');
}

// Função para exibir o item do carousel
function showItem(index) {
    // Seleciona o elemento do carousel interno
    const carouselInner = document.querySelector('.carousel-inner');
    // Define a transformação CSS para exibir o item desejado
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

// Função para avançar para o próximo slide do carousel
function nextSlide() {
    // Obtém o número total de itens no carousel
    const totalItems = document.querySelectorAll('.carousel-item').length;
    // Atualiza o índice atual para o próximo item, considerando a circularidade
    currentIndex = (currentIndex + 1) % totalItems;
    // Chama a função showItem passando o novo índice atual
    showItem(currentIndex);
}

// Função para voltar para o slide anterior do carousel
function prevSlide() {
    // Obtém o número total de itens no carousel
    const totalItems = document.querySelectorAll('.carousel-item').length;
    // Atualiza o índice atual para o slide anterior, considerando a circularidade
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    // Chama a função showItem passando o novo índice atual
    showItem(currentIndex);
}

// Evento executado quando o DOM é completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Exibe o primeiro item do carousel ao carregar a página
    showItem(0);
});
