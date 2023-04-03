class Customer {
    constructor(name, email, surname) {
        this.name = name;
        this.surname = surname;
        this.email = email;
      }
}


let global_customer_list = new Array();


function AddCustomer(name, email, surname){
    let cust = new Customer(name, email, surname);
    global_customer_list.push(cust);


    return cust;
}


function EditCustomer(name, surname, new_name, new_email, new_surname)
{
    for (let id = 0; id < global_customer_list.length; id++) {


        let cust = global_customer_list[id];


        if (cust.name === name &&
            cust.surname === surname){ 
                global_customer_list[id].name = new_name;
                global_customer_list[id].surname = new_surname;
                global_customer_list[id].email = new_email
                return 1;
            }
    }


    return -1;
}


function RemoveCustomer(name,surname)
{
    for (let id = 0; id < global_customer_list.length; id++) {


        let cust = global_customer_list[id];


        if (cust.name === name &&
            cust.surname === surname){
                global_customer_list.splice(id, 1);
                return 1;
             }
    }
    return -1;
}


function SearchCustomer (name, surname) {


    for (let id = 0; id < global_customer_list.length; id++) {


        let cust = global_customer_list[id];


        if (cust.name === name &&
            cust.surname === surname) { 
                console.log(`Customer found: name: ${cust.name}\n surname: ${cust.surname}\n`)
                return cust; 
            }
    }
    return -1;
}


function CustomerList() {
    console.log("\n" + "List of all customers:");
    
    for (let id = 0; id < global_customer_list.length; id++) {
        let cust = global_customer_list[id];
        console.log(`Name: ${cust.name}\n surname: ${cust.surname}\n email: ${cust.email}\n`);
    }
    console.log();
    return global_customer_list;
}


exports.RemoveCustomer = RemoveCustomer;
exports.EditCustomer = EditCustomer;
exports.AddCustomer = AddCustomer;
exports.SearchCustomer = SearchCustomer;
exports.CustomerList = CustomerList;
