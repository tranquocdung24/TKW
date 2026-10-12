const form = document.getElementById("contactForm");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(field, message) {
	document.getElementById(field + "Error").textContent = message;
}

function getValue(field) {
	return document.getElementById(field).value.trim();
}

form.addEventListener("submit", function (e) {
	e.preventDefault();
	let valid = true;

	// Xóa lỗi cũ
	["fullname", "email", "message"].forEach(function (f) { setError(f, ""); });

	if (getValue("fullname") === "") {
		setError("fullname", "Vui lòng nhập họ tên");
		valid = false;
	}

	const email = getValue("email");
	if (email === "") {
		setError("email", "Vui lòng nhập email");
		valid = false;
	} else if (!emailRegex.test(email)) {
		setError("email", "Email không hợp lệ");
		valid = false;
	}

	if (getValue("message") === "") {
		setError("message", "Vui lòng nhập nội dung");
		valid = false;
	}

	if (valid) {
		alert("Gửi thành công!");
		form.reset();
	}
});