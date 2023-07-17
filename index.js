let statusInfo = document.getElementById('num-solicitacao');
let button = document.getElementById('id-button');

button.onclick = function(event){
    statusInfo.style.display = "block"
    event.preventDefault();
}