document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById
    ('aumentar-fonte');
    const diminuirFonteBotao = document.getElementById
    ('diminuir-fonte');
    const alternaContraste = document.getElementById
    ('alterna-contraste');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
         })
    
   diminuirFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
        }) 

const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
})

alternaContraste.addEventListener('click', function(){
    document.body.classList.toggle('alto-contraste')
})

    })

ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#tropicalia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });