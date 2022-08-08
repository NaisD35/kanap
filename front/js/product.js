
let params = (new URL(document.location)).searchParams;
let idProduct = params.get('id'); 

fetch('http://localhost:3000/api/products/'+ idProduct)

.then(function(response) {
    return response.json();
}).then(function(data) {

    let product = data;
    
    let name = product.name;
    let desc = product.description;
    let colors = product.colors;
    let img = product.imageUrl;
    let alt = product.altTxt;
    let price = product.price;
    let quantity = document.querySelector('input').value;
    
    const inputQuantity = document.getElementById('quantity');
    inputQuantity.addEventListener('change', () => {
        quantity = document.getElementById('quantity').value;
        console.log(quantity);
        objJson.quantite = quantity;
    });
    
    document.title = name;
    document.getElementById('title').innerHTML = name; 
    document.getElementById('price').innerHTML = price;
    document.getElementById('description').innerHTML = desc;
    document.getElementById('colors').innerHTML = colors;
    document.querySelector('.item__img img').src = img;
    document.querySelector('.item__img img').alt = alt;
    
    for (let i = 0; i < colors.length; i++) {
        document.getElementById('colors').innerHTML += '<option value="'+ colors[i] +'">'+ colors[i] +'</option>';
    }
    
    let chosenColor = document.querySelector('#colors').value;
    console.log(chosenColor);
    
    
    const selectCouleur = document.getElementById('colors')
    
    selectCouleur.addEventListener('change', () => {
        chosenColor = document.querySelector('#colors').value;
        objJson.couleur = chosenColor;
    })
    
    let objJson = {
        nom : name,
        couleur : chosenColor,
        prix : price,
        image : img,
        altTxt : alt,
        quantite : quantity,
        id : idProduct
    }

    

    const button = document.getElementById('addToCart');
    let cart = localStorage.getItem("obj");
    let cartJson = JSON.parse(cart);
    let itemQuantity = document.getElementById('quantity');

    itemQuantity.addEventListener('change', () => {
        changedQuantity = itemQuantity.value;
        alert("La quantité a bien été modifiée à" +' '+ changedQuantity + '.');
    });

    button.addEventListener('click', () => {
        alert('Très bon choix ! Votre produit a bien été ajouté au panier !');
        let objLinea = JSON.stringify(objJson);
        console.log(objJson)

        if (cart != null && cart.id != idProduct && cart.couleur != colors.includes(cart.couleur)) {
            localStorage.setItem("obj", objLinea);
            console.log("Le panier n'est pas vide");

        } else if (cart.id === idProduct && cart.couleur === colors.includes(cart.couleur)) {

        }
        else {
            localStorage.setItem("obj", objLinea); //ajout au panier//
            console.log('Le panier est vide. ACHETE.');
        }
    });

               
            
        
        
})
.catch(function(error) {

    console.log('pas ok :(');
});


    
