// LOGIN & SIGNUP PAGE (page0.html)

document.addEventListener("DOMContentLoaded", () => {

  const loginForms = document.querySelectorAll("form");

  loginForms.forEach(form => {
    form.addEventListener("submit", () => {
      alert("Login successful! Redirecting...");
    });
  });


  // LOGOUT BUTTON

  window.logout = function () {
    if (confirm("Are you sure you want to logout?")) {
      window.location.href = "page0.html";
    }
  };


  // TICKETS PAGE (page3.html)

  const ticketPrices = {
    "General Admission": 1500,
    "VIP Access": 3500,
    "Backstage Pass": 5000
  };

  const form = document.querySelector("form");
  const ticketSelect = document.querySelector("select");
  const paymentSelect = document.getElementById("payment");
  const qrSection = document.querySelector(".qr-section");
  const table = document.querySelector("table");

  // Hide QR section at start
  if (qrSection) {
    qrSection.style.display = "none";
  }

  // Show QR when payment method changes
  if (paymentSelect) {
    paymentSelect.addEventListener("change", () => {
      qrSection.style.display = "block";
    });
  }

  // Buy Ticket button logic
  if (form && table) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("input[type='text']").value;
      const email = form.querySelector("input[type='email']").value;
      const ticketType = ticketSelect.value;
      const paymentMethod = paymentSelect.value;
      const price = ticketPrices[ticketType];

      if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return;
      }

      const newRow = table.insertRow(-1);
      newRow.innerHTML = `
        <td>${new Date().toLocaleDateString()}</td>
        <td>${name}</td>
        <td>${ticketType}</td>
        <td>₱${price}</td>
        <td>${paymentMethod}</td>
      `;

      alert("Ticket purchased successfully!");
      form.reset();
      qrSection.style.display = "none";
    });
  }
});