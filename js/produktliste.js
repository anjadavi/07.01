const myCategory = new URLSearchParams(window.location.search).get("category");

const produktContainer = document.querySelector(".liste-grid-container");
let overskrift = document.querySelector("h2");
overskrift.innerHTML = myCategory;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) => 
        `<article class="produkt-kort ${product.soldout && "sold-out"}">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="zip-up">
                ${product.soldout > 0 ? `<span class="overlay">SOLD OUT</span>` : ""}
                <p><b>${product.productdisplayname}</b></p>
                ${product.discount > 0 ? `<p class="old-price"> DKK ${product.price} </p>` : ""}
                ${product.discount > 0 ? `<p class="new-price">NU DKK ${product.price - product.discount},- <span class="discount">-${product.discount},-</span></p>`: ""}
                <p class="price">DKK ${product.price},-</p>
                <a href="produkter.html?id=${product.id}" class="read-more">READ MORE</a>
            </article>
        `
    )

    .join("");
  produktContainer.innerHTML = markup;
}
