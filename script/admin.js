
// admin
document.addEventListener('DOMContentLoaded', function () {
    const adminProductList = document.getElementById('adminProductList');
    
    // Initial rendering of products in the admin table
    renderAdminProducts(products);

    // Function to render products in the admin table
    function renderAdminProducts(products) {
        adminProductList.innerHTML = '';
        products.forEach(product => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.amount}</td>
                <td><img src="${product.image}" alt="${product.name}" style="max-width: 50px;"></td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editProduct(${product.id})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Delete</button>
                </td>
            `;
            adminProductList.appendChild(tr);
        });
    }

    // Function to open the Add Product Modal
    function openAddProductModal() {
      
        $('#addProductModal').modal('show');
    }
    document.getElementById('addProductButton').addEventListener('click', openAddProductModal);

    // Function to edit a product
    function editProduct(productId) {
       
    const productIndex = products.findIndex(product => product.id === productId);

    if (productIndex !== -1) {
        const productToEdit = products[productIndex];

        // Display a modal or form with the current values
        // For simplicity, I'm using a prompt, but you might use a Bootstrap modal
        const updatedName = prompt("Enter the updated product name", productToEdit.name);
        const updatedAmount = prompt("Enter the updated product amount", productToEdit.amount);
        const updatedImage = prompt("Enter the updated product image URL", productToEdit.image);

        // Update the product in the array
        products[productIndex] = {
            ...productToEdit,
            name: updatedName,
            amount: parseFloat(updatedAmount),
            image: updatedImage,
        };

        // Save the updated products array to localStorage
        localStorage.setItem('products', JSON.stringify(products));

        // Re-render the product list
        renderAdminProducts(products);
    } else {
        console.error('Product not found');
    }
    }
    editProduct();

    // Function to delete a product
    function deleteProduct(productId) {
       /// Code to handle product deletion
        /// You may want to ask for confirmation before deleting
        // Ask for confirmation
    const confirmDelete = confirm("Are you sure you want to delete this product?");

    if (confirmDelete) {
        // Find the product in the array based on productId
        const productIndex = products.findIndex(product => product.id === productId);

        if (productIndex !== -1) {
            // Remove the product from the array
            products.splice(productIndex, 1);

            // Save the updated products array to localStorage
            localStorage.setItem('products', JSON.stringify(products));

            // Re-render the product list
            renderAdminProducts(products);
        } else {
            console.error('Product not found');
        }
    }
    }
    deleteProduct();
});

