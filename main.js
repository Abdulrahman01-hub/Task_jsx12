const accordions = document.querySelectorAll(".accordion-item");

accordions.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
// document.querySelectorAll(".accordion-header").forEach(button => {
//     button.addEventListener("click", () => {
//         const item = button.parentElement;
//         item.classList.toggle("active");
//     });
// });