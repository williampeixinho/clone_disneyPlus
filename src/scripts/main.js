document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    const tabButtons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    function verificaPosicaoHeader() {
        const alturaHero = heroSection.clientHeight;
        const posicaoAtual = window.scrollY;

        if (posicaoAtual > alturaHero) {
            header.classList.remove('header--is-hidden');
        } else {
            header.classList.add('header--is-hidden');
        }
    }

    function removeBotaoAtivo() {
        tabButtons.forEach(button => {
            button.classList.remove('shows__tabs__button--is-active');
        });
    }

    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');
        tabsContainer.forEach(tab => {
            tab.classList.remove('shows__list--is-active');
        });
    }

    function abreOuFechaResposta(elemento) {
        const classe = 'faq__questions__item--is-open';
        const elementoPai = elemento.target.parentNode;
        elementoPai.classList.toggle(classe);
    }

    window.addEventListener('scroll', verificaPosicaoHeader);
    
    verificaPosicaoHeader();

    tabButtons.forEach(button => {
        button.addEventListener('click', (evento) => {
            const abaAlvo = evento.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            escondeTodasAbas();
            removeBotaoAtivo();
            aba.classList.add('shows__list--is-active');
            evento.target.classList.add('shows__tabs__button--is-active');
        });
    });

    questions.forEach(question => {
        question.addEventListener('click', abreOuFechaResposta);
    });
});