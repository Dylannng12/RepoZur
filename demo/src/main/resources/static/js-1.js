fetch('https://localhost:8443/VerConsutlas')
  .then(response => response.json())
  .then(data => console.log(data));