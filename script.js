document.querySelector('.burger').addEventListener('click',function(){

    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('burger-active');

});


document.querySelector(".bir").addEventListener("click", function(){
    addToCart("1984", 1.5);
});
document.querySelector(".eki").addEventListener("click", function(){
    addToCart("The Hobbit", 2.);
});
document.querySelector(".uw").addEventListener("click", function(){
    addToCart("To Kill a Mockingbird", 2.5);
});
document.querySelector(".tort").addEventListener("click", function(){
    addToCart("Pride and Prejudice", 3.);
});
document.querySelector(".bes").addEventListener("click", function(){
    addToCart("Moby-Dick", 1.);
});
document.querySelector(".alti").addEventListener("click", function(){
    addToCart("War and Peace", 1.5);
});
document.querySelector(".seven").addEventListener("click", function(){
    addToCart("The Great Gatsby", 2.);
});
document.querySelector(".sekiz").addEventListener("click", function(){
    addToCart("The Catcher in the Rye", 2.5);
});
document.querySelector(".dokuz").addEventListener("click", function(){
    addToCart("Brave New world", 1.5);
});
document.querySelector(".on").addEventListener("click", function(){
    addToCart("Jane Eyre", 1.5);
});
document.querySelector(".eleven").addEventListener("click", function(){
    addToCart("Crime punishment ", 1.5);
});
document.querySelector(".twelve").addEventListener("click", function(){
    addToCart("Anna Karenina", 1.5);
});
document.querySelector(".onuw").addEventListener("click", function(){
    addToCart("alchemist", 1.5);
});
document.querySelector(".ontort").addEventListener("click", function(){
    addToCart("The miserablesThe", 1.5);
});
document.querySelector(".onbes").addEventListener("click", function(){
    addToCart("Don Quixote", 1.5);
});


let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    showCart();
};

function showCart() {
let box = document.querySelector(".cart-box");
if (!box) {
    box = document.createElement("div");
    box.className = "cart-box";
    document.body.appendChild(box);
};

box.innerHTML = "<h3>Your Rental Cart</h3>";
total = 0;

for (let i = 0; i < cart.length; i++) {
    box.innerHTML += `
        <p>${cart[i].name} - $${cart[i].price}</p>
    `;
    total += cart[i].price;
};

box.innerHTML += `<p><b>Total: $${total.toFixed(2)}</b></p>`;
};