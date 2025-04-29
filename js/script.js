listaDeCapitais = [
    'Rio Branco',
    'Maceió',
    'Macapá',
    'Manaus',
    'Salvador',
    'Fortaleza',
    'Brasília',
    'Vitória',
    'Goiânia',
    'São Luís',
    'Cuiabá',
    'Campo Grande',
    'Belo Horizonte',
    'Belém',
    'João Pessoa',
    'Curitiba',
    'Recife',
    'Teresina',
    'Rio de Janeiro',
    'Natal',
    'Porto Alegre',
    'Porto Velho',
    'Boa Vista',
    'Florianópolis',
    'São Paulo',
    'Aracaju',
    'Palmas'
]




dicionarioCapitaisEstados = {
    "Acre": "Rio Branco",
    "Alagoas": "Maceió",
    "Amapá": "Macapá",
    "Amazonas": "Manaus",
    "Bahia": "Salvador",
    "Ceará": "Fortaleza",
    "Espírito Santo": "Vitória",
    "Goiás": "Goiânia",
    "Maranhão": "São Luís",
    "Mato Grosso": "Cuiabá",
    "Mato Grosso do Sul": "Campo Grande",
    "Minas Gerais": "Belo Horizonte",
    "Pará": "Belém",
    "Paraíba": "João Pessoa",
    "Paraná": "Curitiba",
    "Pernambuco": "Recife",
    "Piauí": "Teresina",
    "Rio de Janeiro": "Rio de Janeiro",
    "Rio Grande do Norte": "Natal",
    "Rio Grande do Sul": "Porto Alegre",
    "Rondônia": "Porto Velho",
    "Roraima": "Boa Vista",
    "Santa Catarina": "Florianópolis",
    "São Paulo": "São Paulo",
    "Sergipe": "Aracaju",
    "Tocantins": "Palmas",
    "Distrito Federal":"Brasília"
}




alert('Olá! Este é o Jogo das Capitais. O objetivo é testar se você sabe as capitais das unidades federativas do Brasil.')


let mudarTitulo = document.getElementById('titulo-pagina');
mudarTitulo.innerHTML = 'Jogo das Capitais';




let nomeJogador = prompt('Digite o seu nome de Jogador: ');
alert(`Seja bem-vindo ao jogo ${nomeJogador}`);




let localNomeJogador = document.getElementById('local-nome-jogador');
localNomeJogador.innerHTML += nomeJogador


let listaNumeroAleatorios = [];
let respostasCorretas = 0;
let respostasErradas = 0;
let contador = 0;


let estado;
let capitalCorreta;


let chave = Object.keys(dicionarioCapitaisEstados);
let telaPergunta = document.getElementById('tela-pergunta');
let areaRespostas = document.getElementById('area-respostas');


let respostasCorretasJogador = document.getElementById('respostas-corretas');
let respostasErradasJogador = document.getElementById('respostas-erradas');
respostasCorretasJogador.innerHTML = `Acertos: ${respostasCorretas}`;
respostasErradasJogador.innerHTML = `Erros: ${respostasErradas}`;


function proximaPergunta(){
    contador++;
    if (listaNumeroAleatorios.length >= 27) {
        telaPergunta.innerHTML = "Fim das perguntas!";
        areaRespostas.innerHTML = `Parabéns por completar o jogo!
        <button onclick="reiniciarJogo()" class="botao-reiniciar">Reiniciar</button>
        `;
        return;
    }
    while(true){
        let numeroAleatorio = Math.floor(Math.random() * 27);
        if (!listaNumeroAleatorios.includes(numeroAleatorio)){
            listaNumeroAleatorios.push(numeroAleatorio);
       
            estado = chave[numeroAleatorio];
            capitalCorreta = dicionarioCapitaisEstados[estado];
            if (estado != undefined && capitalCorreta != undefined){
                telaPergunta.innerHTML = `Pergunta número ${contador}: Qual é a capital de ${estado}?`;      
                gerarOpcoes()
                break;
            }
        }
    }
};




function gerarOpcoes(){
    let lista = []
    lista.push(capitalCorreta);


   
    while (lista.length < 4){
        let numeroAleatorio = Math.floor(Math.random() * 27);
        let estadoOpcao = chave[numeroAleatorio]
        let capitalOpcao = dicionarioCapitaisEstados[estadoOpcao]
        if (!lista.includes(capitalOpcao) && capitalOpcao != capitalCorreta){
            lista.push(capitalOpcao);
        }
    }


    lista.sort(() => Math.random() - 0.5)


    areaRespostas.innerHTML = '';
    lista.forEach(capital => {
        let botao = document.createElement('button');
        botao.textContent = capital;
        botao.classList.add('botao-resposta');
        botao.addEventListener('click', () => verificarResposta(capital));
        areaRespostas.appendChild(botao);
    })
}




function verificarResposta(respostaEscolhida) {
    if (respostaEscolhida == capitalCorreta){
        respostasCorretas++;
    } else{
        respostasErradas++;
    }


    respostasCorretasJogador.innerHTML = `Acertos: ${respostasCorretas}`;
    respostasErradasJogador.innerHTML = `Erros: ${respostasErradas}`;


    proximaPergunta();
}


function reiniciarJogo() {
    respostasCorretas = 0;
    respostasErradas = 0;
    contador = 0;
   
    respostasCorretasJogador.innerHTML = `Acertos: ${respostasCorretas}`;
    respostasErradasJogador.innerHTML = `Erros: ${respostasErradas}`;
   
    listaNumeroAleatorios = [];    


    telaPergunta.innerHTML = '';
    areaRespostas.innerHTML = '';




    proximaPergunta();
}


proximaPergunta();
