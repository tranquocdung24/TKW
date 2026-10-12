var form = document.getElementById("dang-nhap");
var emailError = document.getElementById("emailError");
var passError = document.getElementById("passError");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const emailRegex = /^[a-zA-Z\d\.]+@[a-zA-Z\d]+\.[a-zA-Z]{2,}$/;
  const passRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,}$/;
  
  passError.textContent = "";
  emailError.textContent = "";

  let Email = document.getElementById("email").value.trim();
  let Pass = document.getElementById("password").value.trim();
  let check = true;

  if (Email === "") {
    emailError.textContent = "Email không được để trống!";
    emailError.style.color = "red";
    check = false;
  }
  else if (!emailRegex.test(Email)) {
    emailError.textContent = "Định dạng email không hợp lệ!";
    emailError.style.color = "red";
    check = false;
  }

  if (Pass === "") {
    passError.textContent = "Mật khẩu không được để trống!";
    passError.style.color = "red";
    check = false;
  }
  else if (!passRegex.test(Pass)) {
    passError.textContent = "Mật khẩu tối thiểu 8 ký tự gồm chữ, số, ký tự đặc biệt!";
    passError.style.color = "red";
    check = false;
  }

  if (check) {
    alert("Đăng nhập thành công!");
  }
})