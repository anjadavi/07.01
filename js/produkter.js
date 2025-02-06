let produktContainer = document.querySelector(".produkt-container");
const myId = new URLSearchParams(window.location.search).get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${myId}`)
  .then((response) => response.json())
  .then((data) => {
    produktContainer.innerHTML = `
    <section class="produkt-image">
    <a href="index.html">Home</a> > <a href="produktliste.html?category=${data.category}">${data.category}</a> > ${data.productdisplayname}
           <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="Billede af produkt">
        </section>

        <section class="produkt-info">
            <h1>Product Information</h1>
            <p><strong>Model name</strong><br>${data.productdisplayname}, ${data.variantname}</p>
            <p><strong>Color</strong><br>${data.basecolour}</p>
            <p><strong>Inventory number</strong><br>${data.id}</p>
            <br>
            <br>
            <h1>${data.brandname}</h1>
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
 
`;
  });

