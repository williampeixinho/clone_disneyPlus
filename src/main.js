document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('[data-tab-id]');

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
    });
});
