let products = JSON.parse(localStorage.getItem('products')) || []
function displayProduct(){
    let Table = document.getElementById("table");
    let tBody = Table.querySelector("tBody");
    tBody.innerHTML = "";

    products.forEach((product, index) =>   {
        let row = document.createElement("tr");
       row.innerHTML = `
       <td>${product.id}</td>
       <td>${product.name}</td>
       <td>${product.amount}</td>
       <td><img src="${product.image}" style="max-width: 50px; max-height:50px;"
       </td>
       <td>
       <button onclick="editProduct(${index})">Edit</button>
       <button onclick="deleteProduct(${JSON.stringify(index)})">Delete</button>
       <button onclick="addProduct(${index})">Add</button>
       </td>
       `;
       tBody.appendChild(row);
    });
}
function editProduct(index){
    let newPId = prompt("Enter id:", products[index].id);
    let newPName = prompt("Enter name:", products[index].name);
    let newPAmount = prompt("Enter amount:", products[index].amount);
    let newPImage = prompt("Enter image:", products[index].image);
    
    if (newPId && newPName && newPAmount &&  newPImage  ){
        products[index] = {
            id : newPId,
            name : newPName,  
            amount : parseFloat(newPAmount),
            image : newPImage
        };
        displayProduct()
        updateProductPage();

    }
}
// confirm delete 
function deleteProduct(index){
    if (index){
        products.splice(index, 1)
        localStorage.setItem('products', JSON.stringify(products))
        displayProduct()
    }
}
function openModal(index){
    let theModal = document.getElementById("Pmodal");
    let productId = document.getElementById("productId");
    let productName = document.getElementById("productName");
    let productAmount = document.getElementById("productAmount");
    let productImage = document.getElementById("productImage");
    
    productId.textContent = "Id: " + products[index].id;
    productName.textContent = "Name: " + products[index].name;
    productAmount.textContent = "Amount: " + products[index].amount;
    productImage.src =  products[index].image;

    theModal.style.display ="block";

}
function closeModal() {
   
    document.getElementById("myModal").style.display = "none";
}
function updateProductPage() {
    
    console.log("Product page updated!");
}

displayProduct();
    



