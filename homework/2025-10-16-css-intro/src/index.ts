import "./styles.css"
// Select all h2 headings and add a click event
const headings = document.querySelectorAll("h2");

headings.forEach((h) => {
  const heading = h as HTMLHeadingElement;
  heading.addEventListener("click", () => {
    // Toggle between two background colors
    if (heading.style.backgroundColor === "rgb(25, 0, 76)") {
      heading.style.backgroundColor = "white";
      heading.style.color="#19004c";
    } else {
      heading.style.backgroundColor = "#19004c";
      heading.style.color = "white";
    }
  });
});