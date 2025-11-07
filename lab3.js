const multiply = (a, b) => a * b;
const isPositive = (number) => number >= 0;
const getRandomNumber = () => Math.random();

console.log("Multiply(5, 3):", multiply(5, 3));
console.log("IsPositive(-10):", isPositive(-10));
console.log("Random Number:", getRandomNumber());

// document.addEventListener("click", () => {
//   console.log("Clicked!");
// });
function createUser(name = "nguoi la oi", age = 18, isAdmin = false) {
  return {
    name: name,
    age: age,
    isAdmin: isAdmin,
  };
}

console.log(createUser("hieu", 21, true));
console.log(createUser("hiu"));

console.log(createUser());

console.log(createUser(undefined, 25));
/**
 * @param {...Array<any>} arrays
 * @returns {Array<any>}
 */
const mergeArrays = (...arrays) => {
  return [].concat(...arrays);
};

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

console.log("mergeArrays:", mergeArrays(arr1, arr2, arr3));

/**
 * @param {string} customerName
 * @param {...string} products
 * @returns {object} .
 */
const shoppingCart = (customerName, ...products) => {
  const totalItems = products.length;

  return {
    customer: customerName,
    products: products,
    totalItems: totalItems,
    orderDate: new Date().toLocaleDateString("vi-VN"),
  };
};
console.log("don hang 1:", shoppingCart("Hoang trung hieu", "Iphone 17"));

console.log("-----------------------------------------");

console.log("don hang 2:", shoppingCart("le van luyen"));
