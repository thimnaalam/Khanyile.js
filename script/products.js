let products = [
    {
    id: 1,
    name: 'OatsBread',
    amount: 35,
    image:"https://i.postimg.cc/63dyHm59/super-seeded-oat-bread-2.jpg"
    },
    {
    id: 2,
    name: 'Crunchies',
    amount: 12,
    image:"https://i.postimg.cc/DfBYDYXy/crunchies-12.jpg"
    },
    {
        id: 3,
        name: 'Chocolate Cake',
        amount: 650,
        image:"https://i.postimg.cc/Y9XfXZy5/german-chocolate-cake-177122-1.jpg"
        
        },
        {
            id: 4,
            name: 'Brownies',
            amount: 9,
            image:"https://i.postimg.cc/8c04C9RR/crazy-brownies-1.jpg"
            },
            {
                id: 5,
                name: 'ArtisanBread',
                amount:18,
                image:"https://i.postimg.cc/RV1L3g7x/homemade-artisan-bread.jpg"
                },
                {
                    id: 6,
                    name: 'Santa',
                    amount:50,
                    image:"https://i.postimg.cc/fWK6sR6s/best-breakfast-santa-fe-cafe-tune-up-cafe-fwx-298bbf750723481eabb95d3edbe7895d.jpg"
                    }
                    
];
localStorage.setItem("products",JSON.stringify(products));
function displayProducts(productsArray) {
    let cardContainer = document.querySelector(".row-cols-1")
    cardContainer.innerHTML = "";

    productsArray.forEach((product, index) => {
        console.log(product)
        let card = document.createElement("div");
        card.innerHTML = `
        
        
        
        `
        
    });

}