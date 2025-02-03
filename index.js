const listContainer = document.querySelector(".forside-grid-container");
console.log("hello");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
    .then((response) => response.json())
    .then(showCategories);
    
    function showCategories(categories) {
        console.log(categories);

        const markup = categories
        .map(
            (category) =>
        `
    <a class= "category" href="produktliste.html?category=${category.category}">${category.category}</a>
    `
)
    .join("");
    console.log(markup);
    listContainer.innerHTML = markup;
        
    }
