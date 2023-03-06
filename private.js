// Appel de l'API et récupération des données

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


