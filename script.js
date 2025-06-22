function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  alert(Thank you, ${name}! We have received your message.);
}