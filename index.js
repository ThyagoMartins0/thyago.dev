const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
let autoPlayInterval;
let isTransitioning = false;

function goToItem(index) {
  if (isTransitioning) return;

  const previousItem = currentItem;
  currentItem = index;

  isTransitioning = true;
  items[previousItem].classList.remove("current-item");
  items[currentItem].classList.add("current-item", "transitioning");

  setTimeout(() => {
    items[previousItem].classList.remove("transitioning");
    isTransitioning = false;
  }, 700); // Tempo da transição, em milissegundos (ajuste conforme necessário)
}

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    let nextItem = currentItem + 1;
    if (nextItem >= maxItems) {
      nextItem = 0;
    }
    goToItem(nextItem);
  }, 1700); // Intervalo de 3 segundos (3000 milissegundos)
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    stopAutoPlay();

    const isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    goToItem(currentItem);
    startAutoPlay();
  });
});

startAutoPlay(); // Iniciar o autoplay quando a página carregar

$(document).ready(function () {
  $(".slick-slider").slick({
    // Configurações do Slick Carousel
    arrows: true,
    dots: false,
    // Outras opções de configuração aqui
  });
});

/**
 * Slick carousel
 * @description  Enable Slick carousel plugin
 */
if (plugins.slick.length) {
  for (var i = 0; i < plugins.slick.length; i++) {
    var $slickItem = $(plugins.slick[i]);

    $slickItem
      .slick({
        slidesToScroll:
          parseInt($slickItem.attr("data-slide-to-scroll"), 10) || 1,
        asNavFor: $slickItem.attr("data-for") || false,
        dots: $slickItem.attr("data-dots") === "true",
        infinite: isNoviBuilder
          ? false
          : $slickItem.attr("data-loop") === "true",
        focusOnSelect: true,
        fade: $slickItem.attr("data-fade") === "true",
        arrows: $slickItem.attr("data-arrows") === "true",
        swipe: $slickItem.attr("data-swipe") === "true",
        autoplay: $slickItem.attr("data-autoplay") === "true",
        vertical: $slickItem.attr("data-vertical") === "true",
        centerMode: $slickItem.attr("data-center-mode") === "true",
        centerPadding: $slickItem.attr("data-center-padding")
          ? $slickItem.attr("data-center-padding")
          : "0.50",
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 0,
            settings: {
              slidesToShow: parseInt($slickItem.attr("data-items"), 10) || 1,
            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: parseInt($slickItem.attr("data-sm-items"), 10) || 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: parseInt($slickItem.attr("data-md-items"), 10) || 1,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: parseInt($slickItem.attr("data-lg-items"), 10) || 1,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: parseInt($slickItem.attr("data-xl-items"), 10) || 1,
            },
          },
        ],
      })
      .on("afterChange", function (event, slick, currentSlide, nextSlide) {
        var $this = $(this),
          childCarousel = $this.attr("data-child");

        if (childCarousel) {
          $(childCarousel + " .slick-slide").removeClass("slick-current");
          $(childCarousel + " .slick-slide")
            .eq(currentSlide)
            .addClass("slick-current");
        }
      });
  }
}
