// get element "pagina-status-info.html"
const statusInfo = document.getElementById('num-solicitacao');
const button = document.getElementById('id-button');

//get element "index.html"
const form = document.querySelector('form');
const nameInfo = document.getElementById('exampleInputEmail2');
const emailInfo = document.getElementById('exampleInputEmail1');
const cpflInfo = document.getElementById('exampleInputPassword2');
const telInfo = document.getElementById('exampleInputPassword1');


const nomeHelp = document.getElementById('nomeHelp');
const cpfHelp = document.getElementById('cpfHelp');
const telHelp = document.getElementById('telHelp');
const ajudaEmail = document.getElementById('ajudaEmail');

//API método Post async
form.addEventListener("submit", async () => {
   
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
  
    try {
      const response = await fetch('http://localhost:3000/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });

//display block "pagina-status-info.html"
const numOrder = document.getElementById('num-solicitacao')


button.onclick = function(event) {
    statusInfo.style.display = "block";
  event.preventDefault()
}


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
        || nameInfo === ""||nameInfo.value.length < 3 
        || cpflInfo.length == false || cpflInfo.value.length < 11
        || telInfo == "" || telInfo.value.length <9) {
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
    } else{
      alert('pedido registrado')
    }
}










