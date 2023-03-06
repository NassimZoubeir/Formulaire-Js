// Appel de l'API et récupération des données

// fetch("https://www.dummyjson.com/products")
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//   const tableBody = document.getElementById("data");
//   data.forEach(product => {
//     const row = tableBody.insertRow(-1);
//     const cell1 = row.insertCell(0);
//     const cell2 = row.insertCell(1);
//     const cell3 = row.insertCell(2);
//     const cell4 = row.insertCell(3);
//     cell1.innerHTML = product.id;
//     cell2.innerHTML = product.name;
//     cell3.innerHTML = product.description;
//     cell4.innerHTML = product.price;
//   });
// })
// .catch(error => console.error(error));

fetch("https://www.dummyjson.com/products")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const tableBody = document.getElementById("data");
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const row = tableBody.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        cell1.innerHTML = data[key].id;
        cell2.innerHTML = data[key].name;
        cell3.innerHTML = data[key].description;
        cell4.innerHTML = data[key].price;
      }
    }
  })
  .catch(error => console.error(error));


