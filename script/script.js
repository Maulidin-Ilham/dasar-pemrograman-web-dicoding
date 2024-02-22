const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = form.querySelector('input[type="email"]').value;
  const name = form.querySelector('input[type="text"]').value;
  window.alert(`Thank you for subscribing, ${name}:))`);
  form.reset();
});
