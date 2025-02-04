const mycategory = new URLSearchParams(window.location.search).get("category");
const productcontainer = document.querySelector(".liste-grid-container");

let overskrift = document.querySelector("h2")
overskrift.innerHTML = mycategory;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);

  const markup = products
    .map(
      (product) =>
        `<article class="produkt-kort">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="zip-up">
                <p><b>${product.productdisplayname}</b></p>
                <p class="price">DKK ${product.price},-</p>
                <a href="produkter.html" class="read-more">READ MORE</a>
            </article>`
    )
    .join("");
  console.log(markup);
  productcontainer.innerHTML = markup;
}
