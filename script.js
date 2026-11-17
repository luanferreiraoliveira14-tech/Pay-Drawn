function setup() {
    let notificacao = document.querySelector('.notificacao-envio');
    if (!notificacao) {
        notificacao = document.createElement('div');
        notificacao.className = 'notificacao-envio';
        document.body.appendChild(notificacao);
    }

    let timeoutNotificacao;

    
    const botoesComprar = document.querySelectorAll('.btn-comprar');
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', function() {
            this.classList.add('clicado');

            
            const secao = this.closest('.item-destaque');
            const titulo = secao ? secao.querySelector('h2').textContent : 'Produto';

            
            notificacao.textContent = `${titulo} será enviado`;
            notificacao.classList.add('visivel');

            
            clearTimeout(timeoutNotificacao);
            timeoutNotificacao = setTimeout(() => {
                notificacao.classList.remove('visivel');
            }, 900);
        });
    });


const campoPesquisa = document.querySelector('.caixa input[type="text"]');
    const secoes = document.querySelectorAll('.item-destaque');

    if (campoPesquisa) {
        campoPesquisa.addEventListener('input', function() {
            const termo = this.value.toLowerCase().trim();

            secoes.forEach(secao => {
                const titulo = secao.querySelector('h2').textContent.toLowerCase();

                if (titulo.includes(termo)) {
                    secao.style.display = 'flex';
                } else {
                    secao.style.display = 'none';
                }
            });
        });
    }

}

document.addEventListener('DOMContentLoaded', setup);