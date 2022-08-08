fetch('http://localhost:3000/api/products')

.then(function(response) {
    return response.json();
}).then(function(data) {
    let products = data;
    
    let container = document.getElementById('items');

    return products.map(function(product) {
        let img = product.imageUrl;
        let colors = product.colors;
        let price = product.price;
        let desc = product.description;
        let id = product._id;
        let name = product.name;
        let alt = product.altTxt;

        container.innerHTML += 
        '<a href="./product.html?id='+ id +'">' + 
            '<article>' + 
            '<img src='+ img +' alt="'+ alt +'">' + 
            '<h3 class="productName">'+ name +'</h3>' + 
            '<p class="productDescription">'+ desc +'</p>' + 
            '</article>' + 
        '</a>';

        console.log(container)

        //console.log(name +' '+ price)
    })

})
.catch(function(error) {

    console.log('pas ok :(');
})