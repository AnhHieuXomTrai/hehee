//1
function getFirstLast(array) {
  if (array.length === 0) return [];
  if (array.length === 1) return [array[0]];
  return [array[0], array[array.length - 1]];
}

console.log(getFirstLast([1, 2, 3, 4]));
//2
function swapElements(arr) {
  if (arr.length < 4) return arr;
  const temp = arr[1];
  arr[1] = arr[3];
  arr[3] = temp;
  return arr;
}

console.log(swapElements([1, 2, 3, 4, 5]));
//3
const user = {
  id: 1,
  personalInfo: {
    name: "htt",
    contact: {
      email: "htt@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
  const {
    personalInfo: {
      name,
      contact: { email },
    },
  } = user;

  return { name, email };
}

console.log(getUserInfo(user));
//4
function createProduct({ name, price, category = "general", inStock = true }) {
  return { name, price, category, inStock };
}

const product = createProduct({ name: "Iphone", price: 999 });
console.log(product);
//5
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(2000).then(() => console.log("2 seconds passed"));
//6
function fetchMultipleData(urls) {
  return Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
}

fetchMultipleData(["/api/user/1", "/api/user/2"]).then((users) =>
  console.log(users)
);
