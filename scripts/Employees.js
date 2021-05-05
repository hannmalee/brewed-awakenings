import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()


document.addEventListener(

    "click", // 
    (clickEvent) => {
        const itemClicked = clickEvent.target // already javascript builtin; item clicked


        if (itemClicked.id.startsWith("employee")) { //itemClicked is a variable you are targeting; 
            const [, employeeId] = itemClicked.id.split("--") // splits the string in line 29 into two strings and storing into an array. 
            for (const employee of employees) { // we are iterating through the array of employee and plucking out each object to name employee

                if (employee.id === parseInt(employeeId)) { // we then convert the string of employeeId to an integer and if that is equal to the id property of the employee object, move to next line

                    let orderArray = [] // let's create an array to store some objects
                    const employeeOrders = orders.filter((order) => { // let's filter through the orders array, assiginging each object to the variable of order; then set that to employeeOrders
                        if (order.employeeId === employee.id) { // as we are filtering through, we are looking for instances where the employee.id has the same value as the employeeId located within the orders array. 
                            orderArray.push(order.employeeId) // here, we are pushing the property of employeeId (located within the order object) into the orderArray using the push method. 
                        }
                    }
                    )
                    window.alert(`${employee.name} has sold ${orderArray.length} orders. `) //now that we have updated the array to display the appropriate data, we will use string interpolation to retrieve the data and display it in the html (in a window alert). 
                }
            }
        }


    }


)





export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

