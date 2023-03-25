const btnSend = document.querySelector("#Btn");
btnSend.addEventListener("click", enviar);



function start() {
  const novaMsn = document.createElement("div");
  novaMsn.className = "msg-esq";
  novaMsn.innerHTML = `<p>${'Olá sou o robo de autoatendimento, <br>no que posso ajudar?!'}</p>`;
  const Me = document.querySelector("#me")
  Me.appendChild(novaMsn)

  return
}
setTimeout(start, 2000)


//Deixei o evento apenas, pois vi na aula do professor,mas depois vi que nao fazia sentido 
async function enviar(event) {
  // type submite atualiza a pagina, isso esta tirando esse evento
  event.preventDefault();

  const inputMsn = document.querySelector("#msn");
  if (inputMsn.value === "") {
    alert("Error: Caixa de texto está vazia!!!");
    return
  }
  adicionarMensagemQueEnviei(`${inputMsn.value}`);

  // apos colocar a mensagem do usuario o bot vai esperar 2(segundos) e vai analisar a mensagem
  // se voce nao passar a mensagem que voce adicionou oque vai acontecer é que a mensagem no #msn sempre sera vazia na hora que o bot for ler
  setTimeout(analisarMensagem(`${inputMsn.value}`), 2000)

  //logo apos definir a mensagem que o bot vai ler voce limpa ele
  // mas esse valor já foi enfiado ali em cima então nao vai dar problema (é importante que ele esteja entre ``)
  // pesquisar diferença entre let, const e var ajuda a entender o pq do ``
  inputMsn.value = "";
};


//função onde vai os valores para que o bot possa entender e responder 
function analisarMensagem(mensagem) {
  console.log('tamo aqui', mensagem);
  const mensagemVazia = mensagem == "";

  if (mensagemVazia) {
    // caso a mensagem esteja vazia entao ele retorna
    // ou seja nao executa mais nada da funcao
    // o nome disso é early return e é interessante pensar assim desde sempre
    return;
  }
  //aqui notei que nao me da o retorno corretamente, as vezez tem uns bugs 
  if (mensagem == "1") {
    adicionarMensagemDoBot('Você ganhou um pix de 0,5 centavos');
    return;
  };
  if (mensagem == "2") {
    adicionarMensagemDoBot('Você ganhou um desconto de 1%');
    return;
  };
  if (mensagem === "boa noite") {
    adicionarMensagemDoBot('Boa Noite no que posso ajudar?!')
    return
  };
  if (mensagem === "bom dia") {
    adicionarMensagemDoBot('Bom dia, Sou sou o robo de autoatendimento, <br>hoje o dia está lindo assim como você!!')
    return
  };
  if (mensagem == "3") {
    adicionarMensagemDoBot('NÃO TEM FOTO DE LADRÃO AQUI!!!')
    return
  };

  if (mensagem === "qual teu nome?") {
    adicionarMensagemDoBot('Irineu')
    return
  };
  if (mensagem === "quero desconto") {
    adicionarMensagemDoBot('Você ganhou um desconto de 1%')
    return
  };
  if (mensagem === "o que o charles e?") {
    adicionarMensagemDoBot('Charles é um DBA, meio fanta!')
    return
  };
  if (mensagem === "o que o hahn e?") {
    adicionarMensagemDoBot('Pedro Hahn, é muito fanta!')
    return
  };
  if (mensagem === "tudo bem?") {
    adicionarMensagemDoBot('Olá! Estou bem, obrigado por perguntar.<br> Como posso ajudá-lo hoje?')
    return
  };
  if (mensagem === "tudo bem") {
    adicionarMensagemDoBot('Quem bom, que está bem ai,mas <br>acho que cê quis perguntar "tudo bem?"<br>Estou bem, obrigado por perguntar.<br> Como posso ajudá-lo hoje?')
    return
  };

  // caso ele n tenha escolhido nem o valor como 1 ou como 2
  // e tambem a mensagem nao esteja vazia
  // entao ele chega aqui
  adicionarMensagemDoBot('Desculpa, não entendi. <br>Digite um numero correspondente:<br>1-Para receber um pix <br>2-Para ganhar um desconto <br>3-Para receber uma foto do Presidente');

};

/*** UTILITARIOS  */


//fiz essas duas funções no intuinto de diminuir o codigo, ja que vai ser criada muitas divs

function adicionarMensagemDoBot(mensagem) {
  const novaMsn = document.createElement("div");
  novaMsn.className = "msg-esq";
  novaMsn.innerHTML = `<p>${mensagem}</p>`;

  const Me = document.querySelector("#me")
  Me.appendChild(novaMsn)

  const chat = document.getElementById("modal");
  chat.scrollTop = chat.scrollHeight
}
function adicionarMensagemQueEnviei(inputMsn) {
  const novaMsn = document.createElement("div");
  novaMsn.className = "msg-dir";
  novaMsn.innerHTML = `<p>${inputMsn}</p>`;

  const Me = document.querySelector("#me")
  Me.appendChild(novaMsn)
}