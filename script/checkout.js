// footer
let currentDate = new Date().getUTCFullYear();
document.querySelector('#currentDate').textContent = currentDate;

let dataWrapper = document.querySelector('[data-checkout]')
let checkoutData = JSON.parse(localStorage.getItem('checkout')) || []

// Group By
function displayData() {
    let data = Object.groupBy(checkoutData, item => item.id)
    dataWrapper.innerHTML = ""
    for(let key in data) {
        dataWrapper.innerHTML +=`
            <tr>
                <td>${data[key][0].name}</td>
                <td>${data[key].length}</td>
                <td>R${data[key][0].amount}</td>
                <td>R${eval(`${data[key][0].amount}*${data[key].length}`)}</td>
            </tr>
        ` 
    }
    
}
displayData();
// Clear
// function clearCart (){
//     localStorage.removeItem("checkout")
//     checkOut = [];
//     displayCheckoutItems();
//     Message();
// }
// function buyNow(){
//     clearCart();

// }
// function Message(){
//     document.getElementById("Message").style.display
// }