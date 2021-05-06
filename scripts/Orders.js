import { getProducts, getEmployees, getOrders } from "./database.js" // links the database to the module

// Get copy of state for use in this module; we get a copy so that we don't modify the original data
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
const findProduct = (order, allProducts) => { // function, (parameters); 
    let orderProduct = null // lets start with nothing 

    for (const product of allProducts) { // iterates through the allProducts array and assigns the variable 
        // of product to every object in the array
        if (product.id === order.productId) { // lets compare the primary key of product to the foreign 
            // key of order
            orderProduct = product // assigns the product to orderProduct variable
        }
    }

    return orderProduct // since this is a function, we have to have a return variable
}

// Function whose responsibility is to find the employee for an order
const findEmployee = (order, allEmployees) => {
    let orderEmployee = null // lets start with nothing

    for (const employee of allEmployees) { // lets iterate through the allEmployees array
        if (employee.id === order.employeeId) { // we're gonna set a condition to compare the 
            // values of pk employee and fk order
            orderEmployee = employee // when we get a match, it's already assigned to employee
            // but we're gonna set it to the variable of orderEmployee
        }
    }

    return orderEmployee // gotta have returns for functions
}

export const Orders = () => { // woohoo another function
    let html = "<ul>" // unordered list

    for (const order of orders) { // iterates through orders array
        const employee = findEmployee(order, employees) // let's use the findEmployee function with 
        // the parameters of order (obj) and employees (arr)
        const product = findProduct(order, products) // lets use the findProduct function and pass 
        // the order (obj) and products (arr) into the parameteres
        if (employee !== null && product !== null) {  // data will display as null if employee 
            // foreign key does not have a matching primary key

            html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
        } // run this html interpolation if the conditions are met
        else {
            html += `<li>${product.name} was sold by a former employee on ${new Date(order.timestamp).toLocaleDateString()}</li>`
            // if the first conditions aren't met, run this html
        }
    }

    html += "</ul>" // gotta add that closing unordered list tag to the html

    return html // functions gotta have returns 
}

