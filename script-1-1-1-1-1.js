const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "E se de repente ainda no ano de 2024 nós sofrermos um apagão mundial?! Como você reagiria?",
        alternativas: [
            {
                texto: "Isso é preocupante!",
                afirmacao: " "
            },
            {
                texto: "Genial, uma experiência e tanto!",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Um apagão mundial, ou a perda generalizada de energia elétrica em escala global, teria várias consequências graves para a sociedade. O que você faria?",
        alternativas: [
            {
                texto: "Iria em busca de estudos e conhecimento para ajudar.",
                afirmacao: ""
            },
            {
                texto: "Não faria questão de ajudar, afinal não somos preparados para lidar com isso.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Você está animado para passar mais tempo ao ar livre, aproveitando a natureza sem as distrações da tecnologia?",
        alternativas: [
            {
                texto: "Claro, seria uma experiência única!",
                afirmacao: ""
            },
            {
                texto: "Não, odeio ficar ao ar livre.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Se o apagão acontecer, você está preparado para enfrentar semanas sem energia elétrica?",
        alternativas: [
            {
                texto: "Sim, posso viver tranquilamente sem energia elétrica.",
                afirmacao: ""
            },
            {
                texto: "Não, é impossível sobreviver sem energia eleétrica.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Se acontecer um apagão mundial, você conseguiria viver uma vida mais simples e sem internet? ",
        alternativas: [
            {
                texto: "Sim! Mal posso esperar por isso!",
                afirmacao: ""
            },
            {
                texto: "Não, amo muito a minha internet!",
                afirmacao: " "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "A ideia de um apagão global é mais uma especulação ou tema de ficção científica do que uma previsão baseada em fatos concretos. Embora algumas teorias levantem a possibilidade de um evento tão catastrófico, a maioria dos especialistas concorda que tais cenários são mais hipotéticos do que baseados em fatos verificáveis.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();