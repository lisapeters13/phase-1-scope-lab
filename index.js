// Write your solution in this file!
var customerName = "bob";

function getCustomerName() {
    return customerName;
  }

  console.log(getCustomerName());


  function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }
  
  var bestCustomer;

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
  }
  
  const leastFavoriteCustomer = "john";
  function changeLeastFavoriteCustomer() {
     leastFavoriteCustomer = "Alice";
  }
  console.log(leastFavoriteCustomer); // Output: "John"
  changeLeastFavoriteCustomer(); // This will throw an error
  console.log(leastFavoriteCustomer); // Output: "John"

  