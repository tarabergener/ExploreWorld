export function checkoutData() {
  const bookingData = JSON.parse(localStorage.getItem("bookingData"));
  const container = document.getElementById("checkoutInfo");

  if (bookingData) {
    container.innerHTML = `
        <p><strong>Date:</strong> ${bookingData.date}</p>
        <p><strong>Departure:</strong> ${bookingData.departure.location}</p>
        <p><strong>Arrival:</strong> ${bookingData.arrival.location}</p>
        <p><strong>Price:</strong> ${bookingData.price}</p>`;
  } else {
    container.innerHTML = `<p>No booking data found.</p>`;
  }
}
