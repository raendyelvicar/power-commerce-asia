<template lang="">
  <div class="channel w-full">
    <Button
      cta="Tambah Toko"
      bgColor="#ff0000"
      borderColor="#ff0000"
      bgHover="#ff3636"
      textColor="#ffffff"
      class="add-channel flex justify-center items-end"
      style="margin: 20px 10px"
      @clickableEvent="showModal(true)"
    >
    </Button>
    <a-modal
      title="Tambah Toko"
      centered
      :visible="modalVisibility"
      :footer="null"
      :width="765"
      @cancel="showModal(false)"
    >
      <div class="flex flex-col justify-center items-center w-full m-auto">
        <form
          class="w-full flex flex-col justify-center items-center"
          id="channel-form"
        >
          <div
            class="formSlide fade w-full m-4"
            :style="[this.indexTab == 1 ? { display: 'block' } : null]"
          >
            <div class="group">
              <h3 class="form-title text-lg">Gudang</h3>
              <input type="text" class="w-full" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Pilih Klien</label>
            </div>

            <div class="group">
              <h3 class="form-title text-lg">Saluran</h3>
              <div class="channel-group">
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
                <img src="@/assets/images/channel/blibli.jpg" />
              </div>
            </div>
          </div>

          <div
            class="formSlide fade w-full m-4"
            :style="[this.indexTab == 1 ? { display: 'block' } : null]"
          ></div>

          <div class="flex flex-row justify-center items-center w-full">
            <Button
              :cta="cancelBtn"
              bgColor="transparent"
              borderColor="transparent"
              textColor="#ff0000"
              bgHover="#dbdbdb"
              class="flex justify-center items-center text-base w-full mx-2"
              id="prevBtn"
              @clickableEvent="nextTab(-1)"
            />
            <Button
              :cta="nextBtn"
              bgColor="#ff0000"
              borderColor="#ff0000"
              bgHover="#ff3636"
              textColor="#ffffff"
              class="flex justify-center items-center text-base w-full mx-2"
              id="nextBtn"
              @clickableEvent="nextTab(1)"
            />
          </div>
        </form>
      </div>
    </a-modal>
  </div>
</template>
<script>
import Button from "@/components/Buttons/Button";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Button,
  },
  data() {
    return {
      indexTab: 1,
      cancelBtn: "",
      nextBtn: "",
    };
  },
  computed: {
    ...mapGetters(["modalVisibility"]),
  },
  methods: {
    ...mapActions(["showModal"]),
    nextTab(n) {
      this.indexTab += n;

      var tab = document.getElementsByClassName("formSlide");

      if (this.indexTab > tab.length) {
        //...the form gets submitted:
        document.getElementById("channel-form").submit();
        return false;
      } else if (this.indexTab < 1) {
        this.showModal(false);
        this.indexTab = 1;
      }

      this.showTab(this.indexTab);
    },
    showTab(n) {
      let i;
      let slides = document.getElementsByClassName("formSlide");

      if (n > slides.length) {
        this.indexTab = 1;
      }
      if (n < 1) {
        this.indexTab = slides.length;
      }

      if (n == slides.length) {
        this.cancelBtn = "Kembali";
        this.nextBtn = "Sambungkan";
      } else if (n > 1 && n < slides.length) {
        this.cancelBtn = "Kembali";
        this.nextBtn = "Selanjutnya";
      } else if (n == 1) {
        this.cancelBtn = "Batal";
        this.nextBtn = "Selanjutnya";
      }
    },
    validateForm() {
      // This function deals with validation of the form fields
      var x,
        y,
        i,
        valid = true;
      x = document.getElementsByClassName("tab");
      y = x[this.currentTab].getElementsByTagName("input");
      // A loop that checks every input field in the current tab:
      for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
          // add an "invalid" class to the field:
          y[i].className += " invalid";
          // and set the current valid status to false:
          valid = false;
        }
      }
      // If the valid status is true, mark the step as finished and valid:
      if (valid) {
        document.getElementsByClassName("step")[this.currentTab].className +=
          " finish";
      }
      return valid; // return the valid status
    },
  },
  beforeMount() {
    this.showTab(this.indexTab);
  },
};
</script>
<style>
.formSlide {
  display: none;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

#rcDialogTitle0.ant-modal-title {
  font-size: 24px;
}

.channel-group {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  margin: auto;
  height: 300px;
  overflow-y: scroll;
}

.channel-group img {
  width: 70%;
  margin: auto;
}
</style>
