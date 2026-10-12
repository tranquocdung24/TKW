const submit = document.getElementById("submit")
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
const rateRegex = /^\d+$/

submit.addEventListener("click", (event) => {
  event.preventDefault()
  const email = document.getElementById("email").value.trim()
  const com = document.getElementById("com").value.trim()
  const rate = document.getElementById("rate").value.trim()

  if (email === "" || com === "" || rate === "") {
    alert("Vui long khong de trong!")
  }
  else if (!emailRegex.test(email)) {
    alert("Email khong dung dinh dang!")
  }
  else if (!rateRegex.test(rate)) {
    alert("Rate phai la so!")
  }
  else {
    alert("Gui thanh cong!")    
  }
})