// include-floating-contact.js
document.addEventListener("DOMContentLoaded", function() {
  fetch("/partials/floating-contact.html")
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML("beforeend", data);
    });
});