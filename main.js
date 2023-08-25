const form = document.querySelector('form')
const nameInput = document.getElementById('nomeInput')
const cpfInput = document.getElementById('CPFInput')
const telefone = document.getElementById('TelInput')
const emailInput = document.getElementById('EmailInput')

const nomehelp = document.getElementById('nomehelp')
const cpfhelp = document.getElementById('cpfhelp')
const telhelp = document.getElementById('telhelp')
const emailhelp = document.getElementById('emailhelp')

function isValidEmail(email){
    const regExp = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/)
    if(regExp.test(email)){
        return true;
    }
        return false;
    }

form.addEventListener('submit', (event)=> {
    event.preventDefault()
    if (nameInput.value.length<3||nameInput==="") {
    nomehelp.textContent="Verifique se seu nome está correto"
    nomehelp.style.display="block"
    }else {
        nomehelp.style.display="none"
    }
    if (cpfInput.length==false) {
        cpfhelp.textContent="Verifique se seu CPF está correto"
        cpfhelp.style.display="block"
    }
    else if (cpfInput.value.length<11) {
    cpfhelp.textContent="Verique se você digitou os 11 digitos do seu CPF"
    cpfhelp.style.display="block"
    }
    else {
        cpfhelp.style.display="none"
    }
    if (telefone.value.length<9||telefone=="") {
        telhelp.textContent="Verifique se você digitou os 9 números do seu Telefone-celular"
        telhelp.style.display="block"
    }
    if (emailInput.value===""||!isValidEmail(emailInput.value)) {
emailhelp.textContent = "preencha o email corretamente"
emailhelp.style.display = "block"
return;
    } else{
emailhelp.style.display = "none"
    }

    form.submit();
})

form.onsubmit = function(event){

    if(emailInput.value===""||!isValidEmail(emailInput.value) ||
    nameInput.value.length<3||nameInput==="" || 
    cpfInput.length==false || cpfInput.value.length<11 ||
    telefone.value.length<9||telefone==""
    ){
alert("Favor preencher as informações corretamente");
event.preventDefault();
    }
}