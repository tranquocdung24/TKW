function valid(e) {
  e.preventDefault();

  const form = e.target;

  if (!form['first-name'].value.trim()) {
    alert('Tên không được bỏ trống');
  } 
  else if (!form['last-name'].value.trim()) {
    alert('Họ không được bỏ trống');
  } 
  else if (!form.gender.value) {
    alert('Vui lòng chọn giới tính');
  } 
  else if (!/^[a-zA-Z\d\.%]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/.test(form.email.value)) {
    alert('Email không hợp lệ!');
  } 
  else if (form.email.value !== form['confirm-email'].value) {
    alert('Email xác nhận không khớp!');
  } 
  else if (!form['location'].value.trim()) {
    alert('Địa chỉ không được bỏ trống');
  } 
  else if (!form['district'].value.trim()) {
    alert('Quận/huyện không được bỏ trống');
  } 
  else if (!form['city'].value.trim()) {
    alert('Thành phố/tỉnh không được bỏ trống');
  } 
  else if (!form['codeZip'].value.trim()) {
    alert('Mã Zip không được bỏ trống');
  } 
  else if (!/^(\+84|0)[0-9]{9,10}$/.test(form['phone-num'].value)) {
    alert('Số điện thoại không hợp lệ!');
  } 
  else {
    // Nếu tất cả các điều kiện trên đều thỏa mãn, tiến hành gửi form thực sự
    alert('Đăng ký thành công!');
    form.submit(); 
  }
}