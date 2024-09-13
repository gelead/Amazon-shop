function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export let cart = JSON.parse(localStorage.getItem('cart')) || [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    delivaryOptionId: '1'
    
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
    delivaryOptionId: '2'
  },
];

export function addtocart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      delivaryOptionId: '1'
    });
  }
  saveToStorage();
}

export function removeCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (productId !== cartItem.productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage();
}
export function updateDelivaryOption(productId, delivaryOptionId){
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  
  matchingItem.delivaryOptionId = delivaryOptionId
  saveToStorage()
}