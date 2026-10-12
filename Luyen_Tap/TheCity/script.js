function valid(event) {
  event.preventDefault();

  const name = event.target.name.value.trim();
  const phone = event.target["phone-num"].value.trim();
  const email = event.target.email.value.trim();

  const phoneRegex = /^(\+84|0)[1-9]\d{8}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (name === "") {
    alert("Vui long nhap ten!");
  } else if (phone === "") {
    alert("Vui long nhap so dien thoai!");
  } else if (!phoneRegex.test(phone)) {
    alert("So dien thoai khong hop le!");
  } else if (email === "") {
    alert("Vui long nhap email!");
  } else if (!emailRegex.test(email)) {
    alert("Email khong hop le!");
  } else {
    alert("Submit thanh cong!");
  }
}