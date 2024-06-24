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

    
let brs = document.getElementById("bars");//for the bars

let menu = brs.addEventListener("click", ()=>{
    let menu_cnt = document.querySelector(".menubarnav");
    menu_cnt.classList.add("active");

    // let mount = document.getElementById("body");
    // mount.classList.toggle("stick");
  


// accordion
    let accordioncloser = document.querySelector(".close-bar");
    let closeaccordion = accordioncloser.addEventListener("click", ()=>{
        menu_cnt.classList.remove("active");
    });
  });



  // loader

  window.addEventListener("load", ()=>{
    const loader = document.querySelector(".loader");

    //extra time to avoid extra loading of pictures after page loads
    setTimeout(() => {
      loader.classList.add("loader-hidden");
    }, 1000);

    loader.addEventListener("transitionend", ()=>{
      document.body.removeChild("loader-hidden");
    });
  });