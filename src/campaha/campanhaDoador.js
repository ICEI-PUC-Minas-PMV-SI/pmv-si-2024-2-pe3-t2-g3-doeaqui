document.addEventListener('DOMContentLoaded', () => {
    const campanhas = [
        { id: 1, nome: "Campanha 1", descricao: "Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1", doacoes: ['roupa', 'comida'], dtInicio: '01/01/2025', dtFim: '01/01/2025', pontosDeColeta: ['ponto1', 'ponto2', 'ponto3'] },
        { id: 2, nome: "Campanha 2", descricao: "Descrição da Campanha 2", doacoes: ['brinquedos', 'livros'], dtInicio: '01/02/2025', dtFim: '01/03/2025', pontosDeColeta: ['ponto4', 'ponto5'] },
        { id: 3, nome: "Campanha 3", descricao: "Descrição da Campanha 3", doacoes: ['alimentos não perecíveis', 'água'], dtInicio: '15/01/2025', dtFim: '15/02/2025', pontosDeColeta: ['ponto6', 'ponto7', 'ponto8', 'ponto9'] },
        { id: 4, nome: "Campanha 4", descricao: "Descrição da Campanha 4", doacoes: ['material escolar'], dtInicio: '01/03/2025', dtFim: '01/04/2025', pontosDeColeta: ['ponto10', 'ponto11'] },
        { id: 5, nome: "Campanha 5", descricao: "Descrição da Campanha 5", doacoes: ['calçados', 'roupa'], dtInicio: '10/02/2025', dtFim: '10/03/2025', pontosDeColeta: ['ponto12', 'ponto13', 'ponto14'] }
    ];
    if(usuarioLogado.tipoUsuario === TIPOS_USUARIO.DOADOR ){
        document.querySelector('.btn-nova-campanha').hidden = true;
    }

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
                <div class="campanha-title">
                    <h3>${campanha.nome}</h3>
                </div>
                <div class="datas">
                    <div><b> Data de Inicio:</b> ${campanha.dtInicio}</div>
                    <div> <b> Data de Fim:</b> ${campanha.dtFim}</div>
                </div>
                <div class="doacoes">
                    <b>Doações coletadas:</b>
                    <div>                    
                        ${campanha.doacoes.map(doacao => `<span class="badge-doacao">${doacao}</span>`).join('')}       
                    </div>
                </div>
                <div class="campanha-descricao">                
                    <p>${campanha.descricao}</p>
                </div>
                <div class="pontosDeColeta">
                    ${campanha.pontosDeColeta.map(ponto => `<span class="badge-ptDoacao">${ponto}</span> `).join('')}
                </div>
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