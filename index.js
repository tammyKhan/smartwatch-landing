
 /* featured Carousel */ 
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

   
   // featured increment & decrement button
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
    