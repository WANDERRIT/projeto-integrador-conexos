const numOrder = document.getElementById('num-solicitacao')
const formstatus = document.getElementById('form-status')
const button = document.getElementById('id-button');
const numSolicitacaoDiv = document.getElementById('num-solicitacao');
const statusInfo = document.getElementById('num-solicitacao');
const codigoPedidoInput = document.getElementById('codigo-pedido-input');
const codigoPedido = codigoPedidoInput.value
const url = 'http://localhost:3000/api/order/:id'


button.onclick = function (event) {
  statusInfo.style.display = "block";
  event.preventDefault();
}

fetch('http://localhost:3000/api/order')
  .then((response) => response.json())
  .then((data) => {
    // Aqui, 'data' conterá todos os IDs dos pedidos
    // Suponha que a estrutura de dados seja um array de objetos com uma propriedade 'id'

    const allOrderIds = data.map((order) => order.id);

    // Agora você pode usar 'allOrderIds' como quiser, por exemplo, em um menu suspenso
    // para que o usuário selecione o pedido desejado
  })
  .catch((error) => console.error('Erro ao obter IDs dos pedidos:', error));

button.addEventListener('click', (event) => {
  event.preventDefault()
  const orderId = document.getElementById('codigo-pedido-input').value;
  fetch(`http://localhost:3000/api/order/${orderId}`)
    .then((response) => response.json())
    .then((orderData) => {
      console.log(orderData)
      numOrder.innerHTML = `<h4>Solicitação <strong>${orderData.id}</strong></h4>
                            <P>Prezado(a) ${orderData.name}</P>
                            <p> O status da sua solicitação encontra-se em "${orderData.status}"</p>
                            <p>Para mais informações ligue (11) 257645456</p>
                            <p>Ou envie um email para SAC@infinity.com.br</p>
                            `;
    }).catch((error) => {
      console.error('Erro ao buscar detalhes do pedido:', error);
      // Você pode tratar erros aqui, por exemplo, exibindo uma mensagem de erro ao usuário
    });

})

