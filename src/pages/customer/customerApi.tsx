import Customer from "./Customer";

export function searchCustomers(){
  if(!localStorage["customers"]){
    localStorage["customers"] = "[]";
  }

  let customers = localStorage["customers"];
  customers = JSON.parse(customers);
  return customers;
}

export function removeCustomer(id: string){
  let customers = searchCustomers();
  let indice = customers.findIndex((customer: Customer) => customer.id === id);
  customers.splice(indice,1)
  localStorage["customers"] = JSON.stringify(customers);

}

export function saveCustomer(customer: Customer){
  let customers = searchCustomers();
  customers.push(customer)
  localStorage["customers"] = JSON.stringify(customers);
}