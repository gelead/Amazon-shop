
const carts = [{
    delivarydate: 'Delivery date: Tuesday, June 21',
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    priceCents: 1090,
    quantity: 2
},
{
    delivarydate: 'Delivery date: Wednesday, June 15',
    image: 'images/products/intermediate-composite-basketball.jpg',
    name: "Intermediate Size Basketball",
    priceCents: 2095,
    quantity: 1
}]

let cartHTML = ''

carts.forEach((cartItem) => {
    let html = `
     <div class="cart-item-container">
            <div class="delivery-date">
              ${cartItem.delivarydate}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${cartItem.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${cartItem.name}
                </div>
                <div class="product-price">
                  $${(cartItem.priceCents / 100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `
    cartHTML += html
})

document.querySelector('.js-order-summary').innerHTML = cartHTML