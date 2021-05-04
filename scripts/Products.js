import { getProducts } from "./database.js"

const products = getProducts()



document.addEventListener(
    
    "click", // 
    (clickEvent) => {
    const itemClicked = clickEvent.target // already javascript builtin; item clicked

    if (itemClicked.id.startsWith("product")) { //itemClicked is a variable you are targeting; see line 29; 
       const [, productId] = itemClicked.id.split("--") // splits the string in line 29 into two strings and storing into an array. 

        for (const product of products) { // iterates through the array of products and assigns the individual objects as an object with the name of product
        
            if (product.id === parseInt(productId)) { // parseInt: converts string into integer. product.id = "1", parseInt changes to 1
                window.alert(`${product.name} costs $${product.price}`)
            }
        }
    }
}
)
export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>` //html representation; 
    }

    html += "</ul>"

    return html
}

