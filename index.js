// get element "pagina-status-info.html"
const statusInfo = document.getElementById('num-solicitacao');
const button = document.getElementById('id-button');

//get element "index.html"
const form = document.querySelector('form');
const nameInfo = document.getElementById('nomeInput');
const emailInfo = document.getElementById('EmailInput').value
const cpflInfo = document.getElementById('CPFInput');
const telInfo = document.getElementById('TelInput');

const nomeHelp = document.getElementById('nomeHelp');
const cpfHelp = document.getElementById('cpfHelp');
const telHelp = document.getElementById('telHelp');
const ajudaEmail = document.getElementById('ajudaEmail');

// get modal paginá indexe.html
const closeModal = document.getElementById('close-modal');
const fade = document.getElementById('fade');
const openModal = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const modalInfo = document.getElementById('modal-info');

cpflInfo.addEventListener("keypress", () => {
  let inpuCpfLenght = cpflInfo.value.length
  if (inpuCpfLenght === 3 || inpuCpfLenght === 7) {
    cpflInfo.value += ".";
  } else if (inpuCpfLenght === 11) {
    cpflInfo.value += "-";
  }
})

telInfo.addEventListener("keypress", () => {
  let limaparValor = telInfo.value.replace(/\D/g, "").substring(0, 11);

  let numArray = limaparValor.split("");

  let numFormatado = "";

  if (numArray.length > 0) { 
  //slice() extrai parte da array
  //join() une os elementos da array em uma única string
  numFormatado += `(${numArray.slice(0, 2).join("")})`;}

  if (numArray.length > 2) { 
  //slice() extrai parte da array
  //join() une os elementos da array em uma única string
  numFormatado += ` ${numArray.slice(2, 7).join("")}`;}

  if (numArray.length > 2) { 
  //slice() extrai parte da array
  //join() une os elementos da array em uma única string
  numFormatado += `-${numArray.slice(7, 10).join("")}`;}

  telInfo.value = numFormatado;
})


//regExp validação de email
function isValidEmail(email) {
  const regExp = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/)

  if (regExp.test(email)) {
    return true;
  }
  return false;

}

//validação de email
form.onsubmit = function (event) {
  if (emailInfo.value === "" || !isValidEmail(emailInfo.value)
    || nameInfo === "" || nameInfo.value.length < 3
    || cpflInfo.length == false || cpflInfo.value.length < 11
    || telInfo == "" || telInfo.value.length < 9) {
    nomeHelp.textContent = "Preencha o nome corretamente"
    nomeHelp.style.display = "block"

    cpfHelp.textContent = "campo cpf precisa estar preenchido"
    cpfHelp.style.display = "block"

    telHelp.textContent = "O número de telefone precisa ter 9"
    telHelp.style.display = "block"


    ajudaEmail.textContent = "Preencha o email corretamente"
    ajudaEmail.style.display = "block"

    alert("favor preencher as informações corretamente");
    event.preventDefault()
  } else {
    alert('pedido registrado')
  }
}


//POSTA COM MODAL
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  try {
    const response = await fetch('http://localhost:3000/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formObject),
    });

    const pedido = await response.json();
    console.log('Dados do pedido:', pedido);

    if (pedido) {

      let modalContent = `
        <h4>Uhull!! &#129395; obrigado por contratar nossos planos!!</h4>
        <p>Número do seu pedido:# <strong>${pedido.id}</strong></p>
        <p>Nome: <strong>${pedido.name}</strong></p>
        <p>CPF: <strong>${pedido.cpf}</strong></p>
        <p>Email: <strong>${pedido.email}</strong></p>
        <p>Telefone: <strong>${pedido.phone}</strong></p>
        <p>Cidade: <strong>${pedido.adress}</strong></p>
        <p>Para saber mais, clique aqui: <a href="pagina-status-info.html">Status de solicitação</a></p>
      `;

      modalInfo.innerHTML = modalContent;
    } else {
      modalInfo.innerHTML = '<p>Nenhum pedido correspondente encontrado.</p>';
    }
  } catch (error) {
    console.error('Erro ao obter dados do pedido:', error);
  }
});

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide")
}

[closeModal, openModal, fade].forEach((elm) => {
  elm.addEventListener("click", () => toggleModal())
})

//display block "pagina-status-info.html"
const numOrder = document.getElementById('num-solicitacao')

button.onclick = function (event) {
  statusInfo.style.display = "block";
  event.preventDefault()
}












