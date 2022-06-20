<template lang="">
  <div>
    <div class="desktop flex flex-col justify-center">
      <div class="magnifier">
        <img :src="currentImageUrl" id="image-show" />
      </div>

      <div class="image-thumbnail">
        <div class="row">
          <div class="column" v-for="item in dummyData" :key="item.id">
            <img
              class="image-row"
              :src="item.imgUrl"
              @click="changeImageUrl(item.imgUrl)"
              alt="iPhone Product"
            />
          </div>
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
        <div class="magnifier" v-for="item in dummyData" :key="item.id">
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
      let container = document.querySelector("div.magnifier");
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
  },
  mounted() {
    this.zoomOnHover();
  },
};
</script>
<style>
.magnifier {
  overflow: hidden;
  margin-bottom: 20px;
}

.magnifier img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.image-thumbnail {
  position: relative;
  min-height: 60px;
}

.row {
  display: flex;
  flex-direction: row;
  position: absolute;
  margin-bottom: 20px;
}

.column {
  position: relative;
  display: inline-block;
  opacity: 1;
  margin: 0 2px;
  padding: 2px;
  width: initial;
  height: initial;
  background: none;
  overflow: hidden;
  box-sizing: border-box;
}

button.button {
  position: relative;
}

/* Add a transparency effect for thumnbail images */
.image-row {
  float: left;
  opacity: 0.6;
  display: block;
  background: none;
  width: initial;
  height: initial;
  max-width: 100%;
  border: 0px;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  animation-name: fade;
  animation-duration: 800ms;
}

.image-row:hover {
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

/* Landscape */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
  .image-thumbnail {
    height: 140px;
  }
}

@media only screen and (min-width: 1440px) {
  .image-thumbnail {
    height: 80px;
  }
}
</style>
