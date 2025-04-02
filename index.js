// active menu ____________________________
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section"); // যেই সেকশনগুলো detect করতে হবে
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    let scrollY = window.scrollY; // স্ক্রল পজিশন

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Offset ঠিক করার জন্য
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("text-blue-500", "font-bold");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("text-blue-500", "font-bold");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink(); // পেজ লোড হলে একবার চালাবে
});


// header scrolling __________________

let lastScrollTop = 0;
const header = document.querySelector('header');
const navbar = document.querySelector('.navbar');

// Scroll event listener
window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Only apply functionality when scrolled 200px or more
  if (currentScroll > 200) {
    // Scroll down (when user scrolls down)
    if (currentScroll > lastScrollTop) {
      // header smoothly chole jabe
      header.style.transition = 'transform 0.3s ease-in-out';
      header.style.transform = 'translateY(-100%)'; // হেডারটি উপরে চলে যাবে
    } else {
      // Scroll up (when user scrolls up)
      // header smoothly asbe & bg-white hobe
      header.style.transition = 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out';
      header.style.transform = 'translateY(0)'; // হেডারটি আবার আসবে
      header.style.backgroundColor = 'white'; // ব্যাকগ্রাউন্ড সাদা হবে

      // Add scrolled class to header
      header.classList.add('scrolled');
    }
  } else {
    // Reset header to default state when scrolled less than 200px
    header.style.transition = 'none';
    header.style.transform = 'translateY(0)';
    header.style.backgroundColor = ''; // ডিফল্ট ব্যাকগ্রাউন্ড কালার
    header.classList.remove('scrolled'); // Remove scrolled class
  }

  // Prevent negative scroll (when scrolling back to top)
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

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
