JavaScript

function updateOutput() {
    const title = document.getElementById("title").value.replace(/\s/g, '%20');
    const subtitle = document.getElementById("subtitle").value.replace(/\s/g, '%20');
    const body = document.getElementById("body").value.replace(/\s/g, '%20');
    const link = document.getElementById("link").value.replace(/\s/g, '%20');
    const imagelink = document.getElementById("image-link").value;
  
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
      <h2>https://mobile-web-hazel.vercel.app/?title=${title}&subtitle=${subtitle}&body=${body}&link=%20${link}&image=${imagelink}</p>

    
    `;
  }