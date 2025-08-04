document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;
        
        if (posicaoAtual < alturaHero ) {
            ocutaElementosDoHeader();
        }
        else {
            exibeElementosDoHeader();
        }
        
    })
    
    function ocutaElementosDoHeader() {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }

    function exibeElementosDoHeader() {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }
    
    //Faq
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.dataset.tabButton;

            // Esconde todas as abas
            tabs.forEach(tab => {
                tab.style.display = 'none';
            });

            // Remove classe ativa dos botões
            buttons.forEach(btn => {
                btn.classList.remove('shows__tabs__button--is-active');
            });

            // Mostra a aba selecionada
            const tabToShow = document.querySelector(`[data-tab-id="${target}"]`);
            if (tabToShow) {
                tabToShow.style.display = 'grid'; // ou 'block'
            }

            // Marca o botão como ativo
            button.classList.add('shows__tabs__button--is-active');
        });
        
        for (let i = 0; i < questions.length; i++) {
            questions[i].addEventListener('click',abreOuFechaResposta);
        };

        function abreOuFechaResposta(elemento) {
        const classe = 'faq__questions__item--is-open';
            const elementoPai = elemento.target.parentNode;

            elementoPai.classList.toggle(classe);
        }

    });
});
