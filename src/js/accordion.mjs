export function accordion() {
  document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".accordion-item");
      const open = item.classList.contains("active");

      // Close all items
      document
        .querySelectorAll(".accordion-item")
        .forEach((i) => i.classList.remove("active"));

      // Open clicked item if it was closed
      if (!open) {
        item.classList.add("active");
      }
    });
  });
}
