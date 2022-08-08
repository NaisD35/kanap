
let objLinea = localStorage.getItem("obj");
let objJson = JSON.parse(objLinea);

console.log(objJson);

let nom = objJson.nom;
let colors = objJson.couleur;
let img = objJson.image;
let alt = objJson.altTxt;
let price = objJson.prix;
let quantite = objJson.quantite;

document.querySelector('h2').innerHTML = nom; 
document.getElementById('prix').innerHTML = price + ' €';
document.getElementById('couleur').innerHTML = colors;
document.querySelector('.cart__item__img img').src = img;
document.querySelector('.cart__item__img img').alt = alt;
document.querySelector('input').value = quantite;

let itemQuantity = document.querySelector('.itemQuantity');
let changedQuantity = "";
let changedPrice = "";

itemQuantity.addEventListener('change', () => {
    changedQuantity = itemQuantity.value;
    changedPrice = price * changedQuantity;
    document.getElementById('prix').innerHTML = changedPrice + '€';
});



