<template lang="">
  <div>
    <div class="desktop flex flex-col justify-center">
      <div class="mySlides">
        <img :src="currentImageUrl" id="image-show" />
      </div>

      <div class="row">
        <div class="column" v-for="item in dummyData" :key="item.id">
          <img
            class="demo cursor"
            :src="item.imgUrl"
            style="width: 100%"
            @click="changeImageUrl(item.imgUrl)"
            alt="iPhone Product"
          />
        </div>
      </div>

      <Button
        cta="Lihat lebih banyak"
        bgColor="transparent"
        borderColor="#015CA1"
        textColor="#015CA1"
        bgHover="#f4f4f4"
      ></Button>
    </div>

    <div class="mobile flex flex-col justify-center">
      <VueSlickCarousel
        class="image-slider"
        v-if="dummyData"
        v-bind="settingsImageSlider"
      >
        <div class="mySlides" v-for="item in dummyData" :key="item.id">
          <img :src="item.imgUrl" />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import Button from "@/components/Buttons/Button";

export default {
  components: {
    VueSlickCarousel,
    Button,
  },
  data() {
    return {
      settingsImageSlider: {
        dots: false,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
  computed: {
    ...mapGetters(["currentImageUrl", "dummyData"]),
  },
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c);
    },
    zoomOnHover() {
      let container = document.querySelector("div.mySlides");
      let img = document.querySelector("img#image-show");

      container.addEventListener("mousemove", onZoom);
      container.addEventListener("mouseover", onZoom);
      container.addEventListener("mouseleave", offZoom);

      function onZoom(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = "scale(2.5)";
        img.style.cursor = "crosshair";
      }

      function offZoom(e) {
        img.style.transformOrigin = `center center`;
        img.style.transform = "scale(1)";
      }
    },
    ...mapActions(["changeImageUrl"]),
    showSlides(n) {
      let i;
      let dots = document.getElementsByClassName("demo");
      if (n > this.products.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = this.products.length;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      dots[this.slideIndex - 1].className += " active";
    },
  },
  mounted() {
    this.zoomOnHover();
  },
};
</script>
<style>
.mySlides {
  overflow: hidden;
  margin-bottom: 20px;
}

.mySlides img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.row {
  display: flex;
  margin-bottom: 20px;
}

/* Add a transparency effect for thumnbail images */
.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}

.mobile {
  display: none;
}

@media only screen and (max-width: 768px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
  }
}
</style>
