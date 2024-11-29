fetch("product.json")

.then(function(response) {
    return response.json();
})

.then(function(products){

    let display = document.querySelector("#displaydata");

    let store = "";

    for(let product of products){
        store += `
            <tr>
            <td> <img class="image" src=' ${product.image}'> </td> 
            <td> '${product.name}'</td>
            <td> '${product.price}'</td>
            <td> '${product.inventory}'</td>
            <td> '${product.productCode}'</td> </tr>
        `;
    }

    display.innerHTML = store;
})