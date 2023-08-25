// let statusInfo = document.getElementById('num-solicitacao');
// let button = document.getElementById('id-button');

// button.onclick = function(event){
//     statusInfo.style.display = "block"
//     event.preventDefault();
// }
const form = document.querySelector('form');
const nameInfo = document.getElementById('exampleInputEmail2');
const emailInfo = document.getElementById('exampleInputEmail1');
const cpflInfo = document.getElementById('exampleInputPassword2');
const telInfo = document.getElementById('exampleInputPassword1');


const nomeHelp = document.getElementById('nomeHelp');
const cpfHelp = document.getElementById('cpfHelp');
const telHelp = document.getElementById('telHelp');
const ajudaEmail = document.getElementById('ajudaEmail');


function isValidEmail(email) {
    const regExp = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/)

    if (regExp.test(email)) {
        return true;
    }
    return false;

}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInfo.value.length < 3 || nameInfo === "") {
        nomeHelp.textContent = "Preencha o nome corretamente"
        nomeHelp.style.display = "block"
    } else {
        nomeHelp.style.display = "none"
    }

    if (cpflInfo.value.length == false) {
        cpfHelp.textContent = "campo cpf precisa estar preenchido"
        cpfHelp.style.display = "block"
    } else if (cpflInfo.value.length < 11) {
        cpfHelp.textContent = "cpf precisa ter 11 digitos"
        cpfHelp.style.display = "block"
    }
    else {
        cpfHelp.style.display = "none"
    }


    if (telInfo.value.length < 9 || telInfo == "") {
        telHelp.textContent = "O número de telefone precisa ter 9"
        telHelp.style.display = "block"
    } else {
        telHelp.style.display = "none"
    }


    if (emailInfo.value === "" || !isValidEmail(emailInfo.value)) {
        ajudaEmail.textContent = "Preencha o email corretamente"
        ajudaEmail.style.display = "block"
        return;
    } else { ajudaEmail.style.display = "none" }

    
    form.submit();
});

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
    }
}

