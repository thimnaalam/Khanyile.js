

let cart = JSON.parse(localStorage.getItem('checkout')) || []
//  product data sample  
let products = JSON.parse(localStorage.getItem('products')) ||
 [
    // product data
    {
        id: 1,
        name: 'Super-seeded-oat-bread',
        amount: 35,
        image: "https://i.postimg.cc/63dyHm59/super-seeded-oat-bread-2.jpg"
    },
    {
        id: 2,
        name: 'Crunchies',
        amount: 12,
        image: "https://i.postimg.cc/DfBYDYXy/crunchies-12.jpg"
    },
    {
        id: 3,
        name: 'German Chocolate Cake',
        amount: 650,
        image: "https://i.postimg.cc/Y9XfXZy5/german-chocolate-cake-177122-1.jpg"

    },
    {
        id: 4,
        name: 'Crazy Brownies',
        amount: 9,
        image: "https://i.postimg.cc/8c04C9RR/crazy-brownies-1.jpg"
    },
    {
        id: 5,
        name: 'Homemade-artisan-bread',
        amount: 18,
        image: "https://i.postimg.cc/RV1L3g7x/homemade-artisan-bread.jpg"
    },
    {
        id: 6,
        name: 'Santa-fe-cafe-tune-up-cafe breakfast',
        amount: 50,
        image: "https://i.postimg.cc/fWK6sR6s/best-breakfast-santa-fe-cafe-tune-up-cafe-fwx-298bbf750723481eabb95d3edbe7895d.jpg"
    },
    {
        id: 7,
        name: 'Chocolate Lamington',
        amount: 12,
        image: "https://i.postimg.cc/tTdMz6jg/lamington-recipe-ft.jpg"
    },
    {
        id: 8,
        name: 'Scones',
        amount: 6,
        image: "https://i.postimg.cc/tTDzTNbF/Me-Feb-2.jpg"
    },
    {
        id: 9,
        name: 'Breakfast with coffee',
        amount: 40,
        image: "https://i.postimg.cc/k4MxkRSG/the-best-coffee-and-breakfast.jpg"
    }
];
localStorage.setItem('products', JSON.stringify(products))

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const productList = document.getElementById('productList');

    // Initial rendering of products
    renderProducts(products);

    // Event listeners
    searchInput.addEventListener('input', filterProducts);
    sortSelect.addEventListener('change', sortProducts);

    // Functions
    function renderProducts(products) {
        productList.innerHTML = '';
        // ?
        if (products.length) {
            products.forEach(product => {
                const li = document.createElement('li');
                li.classList.add('product-item');
                li.innerHTML = `
                <div class="card " id="1">
                <img src="${product.image}" class="card-img-top" alt="OatsBread" loading="lazy">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">R${product.amount} </p>
                </div>
                <div class="d-grid d-md-block ">
                    <button class="btn btn-primary" id="Bcart" type="button" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
                  </div>
            </div>
                `;
                productList.appendChild(li);
            });
        } else {
            productList.innerHTML = 'Product was not found';
        }
    }

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    }

    function sortProducts() {
        const sortBy = sortSelect.value;
        const sortedProducts = [...products].sort((a, b) =>
            a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0
        );
        renderProducts(sortedProducts);
    }
});
// Add to cart
function addToCart(item) {
    if(item) {
        cart.push(item)
        localStorage.setItem('checkout', JSON.stringify(cart))
    }
}
