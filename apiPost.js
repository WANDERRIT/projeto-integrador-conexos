const form = document.querySelector('form');
const statusInfo = document.getElementById('num-solicitacao');
const button = document.getElementById('id-button');

button.onclick = function(evento){
    statusInfo.style.display = "block"
    evento.preventDefault();
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
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

