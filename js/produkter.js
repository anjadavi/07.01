let productId = 1528
let productcontainer = document.querySelector(".produkt-container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
    .then(response => response.json())
    .then(data => {
        productcontainer.innerHTML = `
        <section class="produkt-image">
            <img src="img/overdel.webp" alt="FERRARI BLACK ZIP-UP">
        </section>

        <section class="produkt-info">
            <h1>Product Information</h1>
            <p><strong>Model name</strong><br>${data.productdisplayname}, ${data.variantname}</p>
            <p><strong>Color</strong><br>${data.basecolour}</p>
            <p><strong>Inventory number</strong><br>${productId}</p>
            <br>
            <br>
            <h1>${data.brandname}</h2>
            <p>${data.brandbio}</p>
        </section>

        <aside class="purchase-box">
            <h2>FERRARI BLACK ZIP-UP</h2>
            <label for="size">Choose a size</label>
            <select id="size">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </select>
            <button class="add-to-basket">Add to basket</button>
        </aside>
        `
    })

    
    const productId = new URLSearchParams(window.location.search).get("id");
const productcontainer = document.querySelector(".produkt-container");

let overskrift = document.querySelector("h2")
overskrift.innerHTML = mycategory;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${productId}`)
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