import { cart, removeCart, updateDelivaryOption } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { moneyformater } from "../utils/moneyformat.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { delivaryOptions, getDelivaryOption} from "../../data/delivaryOptions.js";
import { renderPaymentSummary } from './paymentSummary.js';
export function renderOrderSummary() {
  let cartHTML = "";
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = getProduct(productId);
    const delivaryOptionId = cartItem.delivaryOptionId;
    const delivaryOption = getDelivaryOption(delivaryOptionId);
    const today = dayjs();
    const delivarydate = today.add(delivaryOption.delivaryDays, "days");
    const dateString = delivarydate.format("dddd, MMMM D");

    cartHTML += `<div class="cart-item-container js-cart-item-container-${
      matchingProduct.id
    }">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${moneyformater(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${
                      cartItem.quantity
                    }</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${
                    matchingProduct.id
                  }">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
              ${delivaryOptionHTML(matchingProduct, cartItem)}
              </div>
            </div>
          </div>
    `;
  });

  function delivaryOptionHTML(matchingProduct, cartItem) {
    let html = "";
    delivaryOptions.forEach((delivaryOption) => {
      const today = dayjs();
      const delivarydate = today.add(delivaryOption.delivaryDays, "days");
      const dateString = delivarydate.format("dddd, MMMM D");
      const priceString =
        delivaryOption.delivaryPrice === 0
          ? "FREE"
          : `$${moneyformater(delivaryOption.delivaryPrice)}`;
      const isChecked =
        delivaryOption.id === cartItem.delivaryOptionId ? "checked" : "";
      html += `
      <div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}" data-delivary-option-id="${delivaryOption.id}">
      <input type="radio" ${isChecked}
        class="delivery-option-input"
        name="${matchingProduct.id}">
      <div>
        <div class="delivery-option-date">
          ${dateString}
        </div>
        <div class="delivery-option-price">
        ${priceString}
          - Shipping
        </div>
      </div>
    </div>
    `;
    });
    return html;
  }

  document.querySelector(".js-order-summary").innerHTML = cartHTML;

  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeCart(productId);

      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.remove();
      renderPaymentSummary();
    });
  });

  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, delivaryOptionId } = element.dataset;
      updateDelivaryOption(productId, delivaryOptionId);
      renderOrderSummary();
      renderPaymentSummary();
    });
  });
}
