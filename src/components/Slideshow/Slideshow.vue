<template lang="">
  <div class="container">
    <div class="mySlides">
      <img :src="currentImageUrl" />
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
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentImageUrl", "dummyData"]),
  },
  methods: {
    zoomOnHover() {
      const container = document.getElementsByClassName("mySlides");
      const img = document.querySelector("img");
      container.addEventListener("mousemove", onZoom);
      container.addEventListener("mouseover", onZoom);
      container.addEventListener("mouseleave", offZoom);

      function onZoom(e) {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = "scale(2.5)";
      }

      function offZoom(e) {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = "scale(2.5)";
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
};
</script>
<style scoped>
/* Hide the images by default */
.mySlides {
  height: 400px;
  width: 400px;
  overflow: hidden;
  margin-bottom: 20px;
}

.mySlides img {
  transform-origin: center center;
  object-fit: cover;
  height: 100%;
  width: 100%;
}

/* Add a pointer when hovering over the thumbnail images */
.cursor {
  cursor: pointer;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.row {
  display: flex;
  width: 50%;
}

/* Add a transparency effect for thumnbail images */
.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}
</style>
