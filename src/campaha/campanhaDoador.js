document.addEventListener('DOMContentLoaded', () => {
    const campanhas = [
        { id: 1, nome: "Campanha 1", descricao: "Descrição da Campanha 1" },
        { id: 2, nome: "Campanha 2", descricao: "Descrição da Campanha 2" },
        { id: 3, nome: "Campanha 3", descricao: "Descrição da Campanha 3" },
        { id: 4, nome: "Campanha 4", descricao: "Descrição da Campanha 4" },
        { id: 5, nome: "Campanha 5", descricao: "Descrição da Campanha 5" },
    ];

    const listaCampanhas = document.getElementById('lista-campanhas');
    const detalhesCampanha = document.getElementById('detalhes-campanha');
    const pesquisarCampanha = document.getElementById('pesquisar-campanha');

    function renderizarCampanhas(campanhasFiltradas) {
        listaCampanhas.innerHTML = '';
        campanhasFiltradas.forEach(campanha => {
            const campanhaElement = document.createElement('div');
            campanhaElement.classList.add('campanha-item');
            campanhaElement.textContent = campanha.nome;
            campanhaElement.addEventListener('click', () => selecionarCampanha(campanha));
            listaCampanhas.appendChild(campanhaElement);
        });
    }

    function selecionarCampanha(campanha) {
        detalhesCampanha.innerHTML = `
            <h3>${campanha.nome}</h3>
            <p>${campanha.descricao}</p>
        `;
        document.querySelectorAll('.campanha-item').forEach(item => {
            item.classList.remove('active');
        });
        event.target.classList.add('active');
    }

    pesquisarCampanha.addEventListener('input', (e) => {
        const termoPesquisa = e.target.value.toLowerCase();
        const campanhasFiltradas = campanhas.filter(campanha => 
            campanha.nome.toLowerCase().includes(termoPesquisa)
        );
        renderizarCampanhas(campanhasFiltradas);
    });

    renderizarCampanhas(campanhas);
});