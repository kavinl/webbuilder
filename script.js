function updateOutput() {
    const title = document.getElementById("title").value.replace(/\s/g, '%20');
    const subtitle = document.getElementById("subtitle").value.replace(/\s/g, '%20');
    const body = document.getElementById("body").value.replace(/\s/g, '%20');
    const link = document.getElementById("link").value.replace(/\s/g, '%20');
    const imagelink = document.getElementById("image-link").value;
  
    // Create the final output with a clear message and clickable link
    const outputDiv = document.getElementById("output");
  
    // **Security:** Avoid embedding raw URLs in innerHTML. Create an anchor element instead.
    const generatedLink = document.createElement('a');
    generatedLink.href = `https://mobile-web-hazel.vercel.app/?title=${title}&subtitle=${subtitle}&body=${body}&link=%20${link}&image=${imagelink}`;
    generatedLink.textContent = 'https://mobile-web-hazel.vercel.app/?title=${title}&subtitle=${subtitle}&body=${body}&link=%20${link}&image=${imagelink}';
    generatedLink.target = '_blank'; // Open in a new tab
  
    // Clear previous content (optional)
    outputDiv.textContent = '';
  
    // Add the clickable link to the outputDiv
    outputDiv.appendChild(generatedLink);
  }
  