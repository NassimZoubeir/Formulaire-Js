// Appel de l'API et récupération des données
fetch("https://www.dummyjson.com/products")
.then(response => response.json())
.then(data => {
// Manipulation des données ici
})
.catch(error => console.error(error));


// Appel de l'API et récupération des données
fetch("https://www.dummyjson.com/products")
.then(response => response.json())
.then(data => {
  const tableBody = document.getElementById("data");
  data.forEach(product => {
    const row = tableBody.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.innerHTML = product.id;
    cell2.innerHTML = product.title;
    cell3.innerHTML = product.description;
    cell4.innerHTML = product.price;
  });
})
.catch(error => console.error(error));