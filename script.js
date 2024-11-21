let shoppingCart = []; //Creates array for shopping cart
let appleButton = document.querySelector('#add-apple'); //Gets fruit button
let bananaButton = document.querySelector('#add-banana');
let orangeButton = document.querySelector('#add-orange');
let cartList = document.querySelector('#cart-items'); //Gets cart ul

console.log(shoppingCart);

appleButton.addEventListener("click", () => {
    shoppingCart.push("Apple");
    let li = document.createElement("li");
    li.textContent = "Apple";
    cartList.appendChild(li);
});

bananaButton.addEventListener("click", () => {
    shoppingCart.push("Banana");
    let li = document.createElement("li");
    li.textContent = "Banana";
    cartList.appendChild(li);
});

orangeButton.addEventListener("click", () => {
    shoppingCart.push("Orange");
    let li = document.createElement("li");
    li.textContent = "Orange";
    cartList.appendChild(li);
});