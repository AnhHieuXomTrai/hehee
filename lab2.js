for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

const student = {
  name: "Hieu",
  age: 20,
};
student.grade = "B";
student.age = 20;
console.log(student);

const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};
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

console.log(productCard);

