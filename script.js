JavaScript
function updateOutput() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <h2>Hello, ${name}!</h2>
    <p>${message}</p>
  `;
}