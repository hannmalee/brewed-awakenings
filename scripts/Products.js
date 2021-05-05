import { getProducts } from "./database.js" // lets us get data from the database

const products = getProducts() // we don't want to edit any data from the database, so we make a copy of it to edit
// (kinda like trimming a branch, rather than chopping down the whole tree)



document.addEventListener( // hey webpage, we need you to listen for events
    
    "click", // what kind of event? this kind <--
    (clickEvent) => { // this captures the event. but what does the event do when initialized? (what is the function?)
    const itemClicked = clickEvent.target // already javascript builtin; sets up a variable to store what was clicked

    if (itemClicked.id.startsWith("product")) { //itemClicked is a variable you are targeting; product is the paramater. 
        // ie: if we click the item that starts with product... (this is referencing the id in the html towards the 
        // bottom of this module.
       const [, productId] = itemClicked.id.split("--") // splits the string (see html "product--${product.id}" below) 
       // into two strings and stores them into an array. 

        for (const product of products) { // iterates through the array of products and assigns the individual objects 
            // as an object with the variable name of product
        
            if (product.id === parseInt(productId)) { // parseInt: converts string into integer. product.id = "1", 
                // parseInt changes to 1; since productId is a string, not an interger, we needed a way to convert 
                // it so that we can compare values with product.id (we need to compare apples to apples (read: integers to integers))
                window.alert(`${product.name} costs $${product.price}`) // if the previous statement is true, let's display that price. 
                // since every object in the products array (in the database) contains a property of price, we won't run into any issues displaying. 
            }
        }
    }
}
)
export const Products = () => { // lets use our data from the database to string interpolate, but only with a COPY of the database
    let html = "<ul>" // puts the unordered list tag on the beginning html for formatting purposes

    for (const product of products) { // iterates through the products array, assigning each individual object as "product"
        html += `<li id="product--${product.id}">${product.name}</li>` // lets ADD (+=) this to the html via string interpolation
    }

    html += "</ul>" // ADDS the closing tag for the unordered list to the html

    return html // return tells the function what to respond with when called
}

