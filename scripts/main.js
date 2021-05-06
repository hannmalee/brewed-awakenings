import { Employees } from "./Employees.js" // we need to import all this data (lines 1,2,3)
//  from the database in order to be able to reference it
import { Orders } from "./Orders.js"
import { Products } from "./Products.js"

const mainContainer = document.querySelector("#container")  // links to index.html


//this allows us to convert our javascript code into HTML. Lines 9-28 is the glue between our
//  index.html and the rest of our modules
const applicationHTML = `
<h1>Brewed Awakenings</h1> 
<article class="details">
    <section class="detail--column-list-details__employees">
        <h2>Employees</h2>
        ${Employees()}
    </section>
    <section class="detail--column-list-details__products">
        <h2>Products</h2>
        ${Products()}
    </section>
</article>

<article class="orders">
    <h2>Orders</h2>
    ${Orders()}
</article>
`

mainContainer.innerHTML = applicationHTML // sets lines 12-27 (applicationHTML) to the mainContainer 
// element (see index.html) as the innerHTML property (of the mainContainer element)

