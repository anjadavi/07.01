const productcontainer = document.querySelector(".liste-grid-container");
let markup = "";

fetch(`https://kea-alt-del.dk/t7/api/products/`)
    .then((response) => response.json())
    .then((data) => showList(data));
    
    function showList(products) {
        console.log(products);
        products.map(product=>{
    })
    products.map((data) => {
        markup += `<article class="produkt-kort">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="zip-up">
                <p><b>${data.productdisplayname}</b></p>
                <p class="price">DKK ${data.price},-</p>
                <a href="produkter.html" class="read-more">READ MORE</a>
            </article>`;
        })
    .join("");
    console.log(markup);
    productcontainer.innerHTML = markup;
        
    }
