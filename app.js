//Custom Webpage Section Scroll Algorithm

const scroll_arrow = document.getElementById("scroll_arrow");
const section_ids = [
  "#section1",
  "#section2",
  "#section3",
  "#section4",
  "#section5",
  "#section6",
  "#main-footer",
];

// for (let i = 0; i < section_ids.length; i++) {
  scroll_arrow.addEventListener("click", () => {
    scroll_arrow.href = section_ids[1];
    console.log(scroll_arrow.href);
  });
// }

