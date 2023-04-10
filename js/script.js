const botaoMenu = document.getElementById('botao-menu');
botaoMenu.addEventListener("click", menuAtivo);
botaoMenu.addEventListener("touchstart", menuAtivo);
function menuAtivo(menu) {
    if(menu.type === 'touchstart') {
        menu.preventoDefault()
    }

    let navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");

    const active = navMenu.classList.contains('active')
    menu.currentTarget.setAttribute('aria-expanded', active)

    if(active) {
        menu.currentTarget.setAttribute('aria-label','Fechar menu')
    } else{
        menu.currentTarget.setAttribute('aria-label','Abrir menu')
    }
}

const button = document.querySelectorAll(".botao-carrosel");
const cardsMentor = document.querySelectorAll('.card-mentor');
let pontoInicial = 0;
const maxItens = cardsMentor.length;
button.forEach(botao => {
    botao.addEventListener("click", ()=> {
        const isLeft = botao.classList.contains('button-control-left');
        if(isLeft) {pontoInicial--} else {pontoInicial++};

        if(pontoInicial >= maxItens) {
            pontoInicial = 0
        } else if (pontoInicial < 0) {
            pontoInicial = maxItens - 1
        }

        cardsMentor[pontoInicial].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

const buttonMetodologia = [...document.querySelector(".box-buttons").children];
const boxDescricao = [...document.querySelector(".box-descricao").children];
const primeiraMetodologia = document.querySelector("#button-01");
function esconderSecoes () {
    boxDescricao.forEach(secao => {secao.style.display = "none"});
    buttonMetodologia.forEach(button=> {button.classList.remove("ativo")})
}
function secaoAlvo (id) {
    const secaoCurrent = document.querySelector("#" + id);
    secaoCurrent.style.display = "block"
}
function selecionarSecao () {
    buttonMetodologia.forEach(btn=> {
        btn.addEventListener("click", (target)=> {
            esconderSecoes()
            const targetSecao = target.currentTarget;
            secaoAlvo(targetSecao.dataset.id);
            targetSecao.className += " ativo"
        })
    })
}
function execute() {
    esconderSecoes()
    selecionarSecao()
    primeiraMetodologia.click()
}
window.addEventListener("load", execute())

const botaoFeedback = document.querySelectorAll(".botao-feedback_arrow");
const cardFeedback = document.querySelectorAll('.card-feedback');
const cardMax = cardFeedback.length;
botaoFeedback.forEach(botao => {
    botao.addEventListener("click", ()=> {
        const isLeft = botao.classList.contains('button-control-left');
        if(isLeft) {pontoInicial--} else {pontoInicial++};

        if(pontoInicial >= cardMax) {
            pontoInicial = 0
        } else if (pontoInicial < 0) {
            pontoInicial = cardMax - 1
        }

        cardFeedback[pontoInicial].scrollIntoView({
            inline: "start",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

const tiposDePlanos = [...document.querySelector(".buttons-plano").children];
const cardsPlanos =[...document.querySelectorAll(".card-plano")];
const planoAnual = document.querySelector("#plano-anual");
function esconderPlanos(){
    cardsPlanos.forEach(plano => {plano.style.display = "none"});
    tiposDePlanos.forEach(btn => {btn.classList.remove("ativo")})
}
function planoAlvo(id){
    const planoCurrent = document.querySelector("#" + id);
    planoCurrent.style.display = "block"
}
function selecionarPlano () {
    tiposDePlanos.forEach(btn=>{
        btn.addEventListener("click", (target)=> {
            esconderPlanos()
            const targetPlano = target.currentTarget;
            planoAlvo(targetPlano.dataset.id);
            targetPlano.className += " ativo"
        })
    })
}
function start() {
    esconderPlanos()
    selecionarPlano()
    planoAnual.click()
}
window.addEventListener("click", start())

const buttonType = [...document.querySelector(".bloco-conteudo").children];
const listaPerguntas = [...document.querySelector('.container-question').children];
const primeiraPergunta = document.querySelector("#primeiro");
function esconderPerguntas() {
    listaPerguntas.forEach(pergunta => {pergunta.style.display = "none"});
    buttonType.forEach(button=> {button.classList.remove("ativo")});
}
function perguntaAlvo(id) {
    const blocoCurrent = document.querySelector("#" + id);
    blocoCurrent.style.display = "block"
}
function selecionarBlocoDePerguntas () {
    buttonType.forEach(btn=> {
        btn.addEventListener("click", (target)=>{
            esconderPerguntas()

            const targetQuestion = target.currentTarget;
            perguntaAlvo(targetQuestion.dataset.id);
            targetQuestion.className += " ativo"
        }) 
    })
}
function init () {
    esconderPerguntas()
    selecionarBlocoDePerguntas()
    primeiraPergunta.click()
}
window.addEventListener("load", init())

const dropdownResposta = document.querySelectorAll(".bloco-pergunta");
dropdownResposta.forEach(lista=> {
    lista.addEventListener("click", (e)=>{e.currentTarget.classList.toggle("active")})
})