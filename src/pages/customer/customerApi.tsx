export function searchCustomers(){
  if(!localStorage["customers"]){
    localStorage["customers"] = "[]";
  }

  let customers = localStorage["customers"];
  customers = JSON.parse(customers);
  return customers;
}

export function deleteCustomer(id: string){

}

export function saveCustomer(customer: any){
  let customers = searchCustomers();
  customers.push(customer)
  localStorage["customers"] = JSON.stringify(customers);
}