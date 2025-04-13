// active menu ____________________________****
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section"); 
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    let scrollY = window.scrollY; 

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; 
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
  setActiveLink(); 
});

// header scrolling __________________****

let lastScrollTop = 0;
const header = document.querySelector('header');

// Scroll event listener
window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > 200) {
    if (currentScroll > lastScrollTop) {
      // Scroll down
      header.style.transition = 'transform 0.3s ease-in-out';
      header.style.transform = 'translateY(-100%)';
    } else {
      // Scroll up
      header.style.transition = 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out';
      header.style.transform = 'translateY(0)';

      // Check for dark theme
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      if (isDark) {
        header.style.backgroundColor = '#1F2937'; 
      } else {
        header.style.backgroundColor = 'white';
      }

      header.classList.add('scrolled');
    }
  } else {
    // Reset when less than 200px
    header.style.transition = 'none';
    header.style.transform = 'translateY(0)';
    header.style.backgroundColor = '';
    header.classList.remove('scrolled');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


// fullscreen search-bar popup________________****

document.addEventListener('DOMContentLoaded', () => {
  const openSearch = document.getElementById('open-search');
  const closeSearch = document.getElementById('close-search');
  const searchOverlay = document.getElementById('search-overlay');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const body = document.body;

  let scrollPosition = 0;

  const openOverlay = () => {
    scrollPosition = window.scrollY;
    body.style.top = `-${scrollPosition}px`;
    body.classList.add('fixed', 'w-full', 'overflow-hidden');

    searchOverlay.classList.remove('scale-0', 'opacity-0');
    searchOverlay.classList.add('scale-100', 'opacity-100');
  };

  const closeOverlay = () => {
    searchOverlay.classList.remove('scale-100', 'opacity-100');
    searchOverlay.classList.add('scale-0', 'opacity-0');

    body.classList.remove('fixed', 'w-full', 'overflow-hidden');
    body.style.top = '';
    window.scrollTo(0, scrollPosition);

    // Clear the search input after close (optional)
    searchInput.value = '';
  };

  openSearch.addEventListener('click', openOverlay);
  closeSearch.addEventListener('click', closeOverlay);

  // Handle form submit
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page reload
    const query = searchInput.value.trim();

    if (query) {
      console.log('Searching for:', query);
      // Optional: here you can fetch search results, redirect, etc.
      closeOverlay(); // close after search
    }
  });
});

// Dark theme _________________________****
const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

// Load from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme") || "light";
  html.setAttribute("data-theme", saved);
  toggleBtn.textContent = saved === "dark" ? "Light" : "Dark";
});

toggleBtn.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  toggleBtn.textContent = next === "dark" ? "Light" : "Dark";
});

// image change-- light -- Dark ______________*********
function updateImageBasedOnTheme() {
  const img = document.getElementById('themeImage');
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  img.src = isDark
    ? './assets/images/special-dark.png'
    : './assets/images/special-light.png';

    img.className = isDark 
    ? 'h-[60vh] lg:h-[80vh] max-w-full md:max-w-fit bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(56.63,_39.80,_86.06,_0.50)_2%,_rgba(56.63,_39.80,_86.06,_0)_74%)] rounded-full   '
    : 'h-[50vh] lg:h-[70vh] max-w-full   bg-zinc-200/50 rounded-full shadow-[0px_0px_50px_15px_rgba(222,235,242,1.00)]';
    
}


// Call on load
updateImageBasedOnTheme();

// Optional: if theme can change dynamically, listen for mutation
const observer = new MutationObserver(updateImageBasedOnTheme);
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['data-theme'],
});

//  /* featured Carousel */ ____________________****
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

   
   // featured increment & decrement button_______________****
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

 // Sidebar Elements__________________****
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



// Add to Cart ____________________****

const cartIcon = document.getElementById('cart-icon');
const cartPanel = document.getElementById('cart-panel');
const cartOverlay = document.getElementById('cart-overlay');
const closeCart = document.getElementById('close-cart');

cartIcon.addEventListener('click', () => {
  cartPanel.classList.remove('-translate-x-full');
  cartOverlay.classList.add('opacity-100');
  cartOverlay.classList.remove('opacity-0', 'pointer-events-none');
});

closeCart.addEventListener('click', () => {
  cartPanel.classList.add('-translate-x-full');
  cartOverlay.classList.remove('opacity-100');
  cartOverlay.classList.add('opacity-0', 'pointer-events-none');
});

cartOverlay.addEventListener('click', () => {
  cartPanel.classList.add('-translate-x-full');
  cartOverlay.classList.remove('opacity-100');
  cartOverlay.classList.add('opacity-0', 'pointer-events-none');
});
