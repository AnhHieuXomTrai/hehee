function caculateBMI(weigth, height) {
  const bmi = weigth / (height * height);
  let category = "";
  if (bmi < 18.5) {
    category = "Thieu can";
  } else if (bmi < 24.9) {
    category = "Binh Thuong";
  } else if (bmi > 30) {
    category = "Thua can";
  } else {
    category = "Beo phi";
  }
  return `BMI:${bmi.toFixed(2)}-phan loai ${category}`;
}
console.log(caculateBMI(70, 1.75));

function createBook(title, author, year, price) {
  const discountkey = "calculateDiscount";
  return {
    title,
    author,
    year,
    price,

    getBookInfo() {
      return `Sach:"${this.title}"-Tac  gia:"${this.author}"-Nam:"${
        this.year
      }"-Gia:"${this.price.toLocaleString()}₫"`;
    },
    [discountkey](discount) {
      const finalPrice = this.price - (this.price * discount) / 100;
      return `Gia giam${discount}%:${finalPrice.toLocaleString()}₫`;
    },
  };
}
const book = createBook("Vua Co Bac", "TIen Bip", 2025, 300000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));
