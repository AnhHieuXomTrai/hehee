//1
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
//2
const student = {
  name: "Hieu",
  age: 20,
};
student.grade = "B";
student.age = 20;
console.log(student);
//3
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};
//4
const emailTemplate = `
Xin chào ${user.firstName} ${user.lastName},

Cảm ơn 

Thông tin:
- Sản phẩm: ${user.product}
- Giá: ${user.price.toLocaleString()}₫
- Ngày đặt hàng: ${user.orderDate}
`;

console.log(emailTemplate);
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};
//5
const finalPrice = product.price * (1 - product.discount / 100);
const productCard = `
  <div class="product-card">
    <h2>${product.name}</h2>
    <p>Giá gốc: <del>${product.price.toLocaleString()}₫</del></p>
    <p>Giảm giá: ${product.discount}%</p>
    <p><strong>Giá sau giảm: ${finalPrice.toLocaleString()}₫</strong></p>
    <p>Trạng thái: 
      <span style="color: ${product.inStock ? "green" : "red"};">
        ${product.inStock ? "Còn hàng" : "Hết hàng"}
      </span>
    </p>
  </div>
`;
//6
console.log(productCard);

const width = 100;
const height = 200;
const color = "red";

const rectangle = {
  width,
  height,
  color,
  calculateArea() {
    return this.width * this.height;
  },
  describe() {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};
//7
const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

const config = {
  [`api_${env}_${version}`]: "https://api.example.com",

  ...features.reduce((obj, feature) => {
    obj[`feature_${feature}`] = true;
    return obj;
  }, {}),

  [`get${env.charAt(0).toUpperCase() + env.slice(1)}Config`]() {
    return `Configuration for ${env} environment, version ${version}`;
  },
};

console.log(config);
console.log(config.api_production_v2);
console.log(config.feature_auth);
console.log(config.getProductionConfig());



