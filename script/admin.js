// footer
let currentDate = new Date().getUTCFullYear();
document.querySelector('currentDate').textContent = currentDate;
//table
// document.addEventListener('DOMContentLoaded', function () {
//     const productTableBody = document.querySelector('#productTable tbody');
//     const addProductForm = document.getElementById('addProductForm');

//     let products = JSON.parse(localStorage.getItem('products')) || [];

//     // Initial rendering of products
//     renderProducts();

//     // Event listeners
//     addProductForm.addEventListener('submit', addNewProduct);

//     // Functions
//     function renderProducts() {
//         productTableBody.innerHTML = '';
//         products.forEach(product => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${product.id}</td>
//                 <td>${product.name}</td>
//                 <td>${product.amount}</td>
//                 <td><img src="${product.image}" alt="${product.name}" style="max-height: 50px;"></td>
//                 <td>
//                     <button onclick="editProduct(${product.id})">Edit</button>
//                     <button onclick="deleteProduct(${product.id})">Delete</button>
//                 </td>
//             `;
//             productTableBody.appendChild(row);
//         });
//     }

//     function addNewProduct(event) {
//         event.preventDefault();

//         const newName = document.getElementById('newProductName').value;
//         const newAmount = parseFloat(document.getElementById('newProductAmount').value);
//         const newImage = document.getElementById('newProductImage').value;

//         if (newName && !isNaN(newAmount) && newAmount >= 0 && newImage) {
//             const newProduct = {
//                 id: products.length + 1,
//                 name: newName,
//                 amount: newAmount,
//                 image: newImage,
//             };

//             products.push(newProduct);
//             saveProductsToLocalStorage();
//             renderProducts();

//             // Clear the form fields
//             addProductForm.reset();
//         } else {
//             alert('Please fill in all the fields with valid data.');
//         }
//     }

//     function editProduct(productId) {
//         // Implement edit functionality as needed
//         console.log('Edit product with ID:', productId);
//     }

//     function deleteProduct(productId) {
//         const confirmDelete = confirm('Are you sure you want to delete this product?');
//         if (confirmDelete) {
//             products = products.filter(product => product.id !== productId);
//             saveProductsToLocalStorage();
//             renderProducts();
//         }
//     }

//     function saveProductsToLocalStorage() {
//         localStorage.setItem('products', JSON.stringify(products));
//     }
// });