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

// fetch("https://www.dummyjson.com/products")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     const tableBody = document.getElementById("data");
//     for (const key in data) {
//       if (Object.hasOwnProperty.call(data, key)) {
//         const row = tableBody.insertRow(-1);
//         const cell1 = row.insertCell(0);
//         const cell2 = row.insertCell(1);
//         const cell3 = row.insertCell(2);
//         const cell4 = row.insertCell(3);
//         cell1.innerHTML = data[key].id;
//         cell2.innerHTML = data[key].name;
//         cell3.innerHTML = data[key].description;
//         cell4.innerHTML = data[key].price;
//       }
//     }
//   })
//   .catch(error => console.error(error));

fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
          const products = data.products;
    
          const tbody = document.querySelector('#products-table tbody');
          products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${product.id}</td>
              <td>${product.title}</td>
              <td>${product.description}</td>
              <td>${product.price}</td>
              <td>${product.discountPercentage}</td>
              <td>${product.rating}</td>
              <td>${product.stock}</td>
              <td>${product.brand}</td>
              <td>${product.category}</td>
              <td><img src="${product.thumbnail}" alt="${product.title} thumbnail"></td>
            `;
            tbody.appendChild(row);
          });
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données de l\'API', error);
        });


