const fName = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
  let messages = []
  
 
  if (fName.value === '' ||  fName.value == null) {
    messages.push("Name is required");
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join('  ')
  } 
  
  if (email.value.length < 2) {
    messages.push("Enter valid email");
  } else {
    alert("Thank you for your message!");
  }
  
  

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(' ')
  }
})

