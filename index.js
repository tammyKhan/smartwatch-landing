// search-bar popup_____
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');

searchIcon.addEventListener('click', () => {
    searchBar.classList.remove('scale-0');
    searchBar.classList.add('scale-100');
});

document.addEventListener('click', (event) => {
    if (!searchBar.contains(event.target) && event.target !== searchIcon) {
        searchBar.classList.remove('scale-100');
        searchBar.classList.add('scale-0');
    }
});


//  /* featured Carousel */ ____________________
$(document).ready(function () {
  var owl = $(".featured_item").owlCarousel({
    autoplay: false, 
    slideSpeed: 1000,
    items: 3,
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1000: { items: 3 },
    },
  });

  //  Custom Navigation Buttons
  $("#customPrev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $("#customNext").click(function () {
    owl.trigger("next.owl.carousel");
  });
});

   
   // featured increment & decrement button_______________
      document.querySelectorAll(".plus-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          let countEl = this.parentElement.querySelector(".count");
          let count = parseInt(countEl.textContent);
          countEl.textContent = count + 1;
        });
      });
    
      document.querySelectorAll(".minus-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          let countEl = this.parentElement.querySelector(".count");
          let count = parseInt(countEl.textContent);
          if (count > 1) {
            countEl.textContent = count - 1;
          }
        });
      });

 // Sidebar Elements__________________
const sidebarContainer = document.getElementById("sidebarContainer");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay"); // Overlay Element
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");

// Open Sidebar Function
function openSidebar() {
  sidebarContainer.classList.remove("hidden");
  document.body.classList.add("noscroll"); // Disable body scroll

  setTimeout(() => {
    sidebar.classList.remove("translate-x-full");
    overlay.classList.remove("opacity-0"); // Overlay Fade-in
    overlay.classList.add("opacity-100");
  }, 10);
}

// Close Sidebar Function
function closeSidebar() {
  sidebar.classList.add("translate-x-full");
  overlay.classList.remove("opacity-100"); // Overlay Fade-out
  overlay.classList.add("opacity-0");

  setTimeout(() => {
    sidebarContainer.classList.add("hidden");
    document.body.classList.remove("noscroll"); // Enable body scroll
  }, 300); // Wait for animation before hiding
}

// Event Listeners
openBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);

// Click Outside Sidebar to Close
sidebarContainer.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target)) {
    closeSidebar();
  }
});
