// ===============================
// VARIAVEIS PRINCIPAIS
// ===============================

let perguntasDoNivel = [];
let numeroPergunta = 0;
let pontos = 0;

let nome = "";
let escola = "";
let idade = "";
let nivel = "facil";



// ===============================
// FUNCOES DO QUIZ
// ===============================

function pegar(id) {
  return document.getElementById(id);
}

function mostrarTela(nomeTela) {
  pegar("homeScreen").classList.remove("is-active");
  pegar("questionScreen").classList.remove("is-active");
  pegar("resultScreen").classList.remove("is-active");
  pegar(nomeTela).classList.add("is-active");
}

function embaralhar(lista) {
  return lista.sort(function () {
    return Math.random() - 0.5;
  });
}

function comecarQuiz(evento) {
  evento.preventDefault();

  nome = pegar("playerName").value.trim().toUpperCase();
  escola = pegar("playerSchool").value.trim().toUpperCase();
  idade = pegar("playerAge").value.trim();
  nivel = document.querySelector("input[name='level']:checked").value;

  perguntasDoNivel = embaralhar([...perguntas[nivel]]);
  numeroPergunta = 0;
  pontos = 0;

  pegar("scorePill").textContent = "⭐ 0";
  mostrarTela("questionScreen");
  mostrarPergunta();
}

function mostrarPergunta() {
  let perguntaAtual = perguntasDoNivel[numeroPergunta];
  let respostasEmbaralhadas = embaralhar([...perguntaAtual.respostas]);
  let areaRespostas = pegar("answersGrid");

  pegar("questionCounter").textContent = "PERGUNTA " + (numeroPergunta + 1) + " DE " + perguntasDoNivel.length;
  pegar("questionText").textContent = perguntaAtual.texto;
  pegar("hintText").textContent = "SELECIONE A RESPOSTA CORRETA";
  pegar("feedbackText").textContent = "";
  pegar("progressFill").style.width = (numeroPergunta / perguntasDoNivel.length) * 100 + "%";

  areaRespostas.innerHTML = "";

  for (let i = 0; i < respostasEmbaralhadas.length; i++) {
    let resposta = respostasEmbaralhadas[i];
    let botao = document.createElement("button");

    botao.className = "answer-btn";
    botao.type = "button";
    botao.dataset.certa = resposta.certa;

    botao.innerHTML = `
      <span class="answer-art">
        <img src="${imagens[resposta.imagem]}" alt="${resposta.texto}" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
        <span class="image-placeholder" style="display:none;">IMAGEM</span>
      </span>
      <span class="answer-label">${resposta.texto}</span>
    `;

    botao.onclick = function () {
      responder(botao);
    };

    areaRespostas.appendChild(botao);
  }

  falarPergunta();
}

function responder(botaoClicado) {
  let botoes = document.querySelectorAll(".answer-btn");

  for (let i = 0; i < botoes.length; i++) {
    botoes[i].disabled = true;

    if (botoes[i].dataset.certa === "true") {
      botoes[i].classList.add("is-correct");
    }
  }

  if (botaoClicado.dataset.certa === "true") {
    pontos++;
    pegar("feedbackText").textContent = "MUITO BEM! VOCE ACERTOU! 🎉";
  } else {
    botaoClicado.classList.add("is-wrong");
    pegar("feedbackText").textContent = "QUASE! VAMOS APRENDER JUNTOS! 💙";
  }

  pegar("scorePill").textContent = "⭐ " + pontos;
  pegar("progressFill").style.width = ((numeroPergunta + 1) / perguntasDoNivel.length) * 100 + "%";

  setTimeout(function () {
    numeroPergunta++;

    if (numeroPergunta < perguntasDoNivel.length) {
      mostrarPergunta();
    } else {
      mostrarResultado();
    }
  }, 1400);
}

function falarPergunta() {
  if (!window.speechSynthesis) {
    return;
  }

  window.speechSynthesis.cancel();

  let texto = perguntasDoNivel[numeroPergunta].texto;
  let fala = new SpeechSynthesisUtterance(texto);

  fala.lang = "pt-BR";
  fala.rate = 0.85;

  window.speechSynthesis.speak(fala);
}

function mostrarResultado() {
  let porcentagem = Math.round((pontos / perguntasDoNivel.length) * 100);
  let nomeFinal = nome || "AVENTUREIRO";

  pegar("finalScore").textContent = pontos + "/" + perguntasDoNivel.length;
  pegar("finalPercent").textContent = porcentagem + "%";
  pegar("studentMessage").textContent = "PARABENS, " + nomeFinal + "!";
  pegar("schoolResult").textContent = escola || "-";
  pegar("ageResult").textContent = idade || "-";
  pegar("levelResult").textContent = nivel.toUpperCase();

  if (porcentagem >= 80) {
    pegar("resultFace").textContent = "🤩";
    pegar("resultTitle").textContent = "VOCE E UM EXPLORADOR DE BRUSQUE!";
  } else if (porcentagem >= 50) {
    pegar("resultFace").textContent = "😊";
    pegar("resultTitle").textContent = "CONTINUE APRENDENDO SOBRE BRUSQUE!";
  } else {
    pegar("resultFace").textContent = "🥰";
    pegar("resultTitle").textContent = "CADA TENTATIVA ENSINA UMA COISA NOVA!";
  }

  mostrarConquistas();
  mostrarTela("resultScreen");
}

function mostrarConquistas() {
  let conquistas = ["🌉", "🌿", "✈️", "🎨", "🧵", "⭐"];
  let quantidade = Math.max(2, Math.ceil(pontos / 2));
  let area = pegar("badgeRow");

  area.innerHTML = "";

  for (let i = 0; i < quantidade; i++) {
    let item = document.createElement("span");
    item.className = "badge";
    item.textContent = conquistas[i];
    area.appendChild(item);
  }
}

function voltarParaHome() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }

  mostrarTela("homeScreen");
}

// ===============================
// CLIQUES DOS BOTOES
// ===============================

pegar("startForm").addEventListener("submit", comecarQuiz);
pegar("speakButton").addEventListener("click", falarPergunta);
pegar("homeButton").addEventListener("click", voltarParaHome);
pegar("quizHomeButton").addEventListener("click", voltarParaHome);

pegar("playAgainButton").addEventListener("click", function () {
  perguntasDoNivel = embaralhar([...perguntas[nivel]]);
  numeroPergunta = 0;
  pontos = 0;

  pegar("scorePill").textContent = "⭐ 0";
  mostrarTela("questionScreen");
  mostrarPergunta();
});
