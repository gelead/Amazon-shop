const cart = {
  cartItems: undefined,
  saveToStorage() {
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  },
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      delivaryOptionId: "1",
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      delivaryOptionId: "2",
    },
  ],
  addtocart(productId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: 1,
        delivaryOptionId: "1",
      });
    }
    this.saveToStorage();
  },

  removeCart(productId) {
    const newCart = [];
    this.cartItems.forEach((cartItem) => {
      if (productId !== cartItem.productId) {
        newCart.push(cartItem);
      }
    });
    this.cartItems = newCart;
    this.saveToStorage();
  },
  updateDelivaryOption(productId, delivaryOptionId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.delivaryOptionId = delivaryOptionId;
    this.saveToStorage();
  },
};

