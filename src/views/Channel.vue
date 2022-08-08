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
            class="formSlide fade w-full"
            :style="[this.indexTab == 1 ? { display: 'block' } : null]"
          >
            <div class="group">
              <h3 class="form-title text-lg">Gudang</h3>

              <div class="select-holder">
                <select class="select" v-model="dataForm.clientName">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                </select>
                <div class="placeholder">Pilih Klien</div>
              </div>
            </div>

            <div class="group">
              <h3 class="form-title text-lg">Saluran</h3>
              <div class="channel-group p-2">
                <div
                  class="channel-container"
                  v-for="item in channel"
                  :key="item.id"
                  :id="'channel-' + item.id"
                  @click="selectChannel(item.id)"
                >
                  <div class="channel-img bg-white">
                    <img :src="item.src" :alt="item.alt" />
                  </div>
                  <p class="text-base">{{ item.name }}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="formSlide fade w-full"
            :style="[this.indexTab == 2 ? { display: 'block' } : null]"
          >
            <div
              class="desktop container flex flex-row justify-center items-center"
            >
              <div class="left w-50 p-4">
                <img :src="dataForm.channel ? dataForm.channel.src : '#'" />
              </div>
              <div class="right w-50">
                <div class="group">
                  <div class="input-holder">
                    <input
                      class="input"
                      type="text"
                      v-model="dataForm.storeName"
                    />
                    <div class="placeholder">Nama Toko</div>
                  </div>
                </div>

                <div class="group">
                  <div class="input-holder">
                    <input
                      class="input"
                      type="text"
                      v-model="dataForm.urlStore"
                    />
                    <div class="placeholder">URL Toko</div>
                  </div>
                </div>
                <div class="group">
                  <div
                    class="wrapper flex flex-row justify-evenly items-center p-2"
                  >
                    <label class="label-container">
                      Official Store
                      <input
                        type="radio"
                        name="picked"
                        class="mr-2"
                        value="official-store"
                        v-model="dataForm.type"
                      />
                      <span class="checkmark"></span>
                    </label>
                    <label class="label-container">
                      Power Merchant
                      <input
                        type="radio"
                        name="picked"
                        class="mr-2"
                        value="power-merchant"
                        v-model="dataForm.type"
                      />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div class="group text-xs font-bold">
                  <p class="mb-4">
                    Langkah-langkah integrasi Toko
                    {{
                      this.dataForm.channel ? this.dataForm.channel.name : ""
                    }}
                  </p>
                  <table>
                    <tr>
                      <td>1.</td>
                      <td>
                        Aliquip magna minim ipsum non ullamco magna ea pariatur
                        officia cupidatat velit nisi
                      </td>
                    </tr>
                    <tr>
                      <td>2.</td>

                      <td>
                        Aliquip magna minim ipsum non ullamco magna ea pariatur
                        officia cupidatat velit nisi
                      </td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>
                        Aliquip magna minim ipsum non ullamco magna ea pariatur
                        officia cupidatat velit
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div
              class="mobile container flex flex-col justify-center items-center"
            >
              <div class="left p-4">
                <img :src="dataForm.channel ? dataForm.channel.src : '#'" />
              </div>
              <div class="right">
                <div class="group">
                  <div class="input-holder">
                    <input
                      class="input"
                      type="text"
                      v-model="dataForm.storeName"
                    />
                    <div class="placeholder">Nama Toko</div>
                  </div>
                </div>

                <div class="group">
                  <div class="input-holder">
                    <input
                      class="input"
                      type="text"
                      v-model="dataForm.urlStore"
                    />
                    <div class="placeholder">URL Toko</div>
                  </div>
                </div>
                <div class="group">
                  <div
                    class="wrapper flex flex-row justify-evenly items-centers"
                  >
                    <label class="label-container text-sm">
                      Official Store
                      <input
                        type="radio"
                        name="picked"
                        class="mr-2"
                        value="official-store"
                        v-model="dataForm.type"
                      />
                      <span class="checkmark"></span>
                    </label>
                    <label class="label-container text-sm">
                      Power Merchant
                      <input
                        type="radio"
                        name="picked"
                        class="mr-2"
                        value="power-merchant"
                        v-model="dataForm.type"
                      />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div class="group text-xs font-bold">
                  <p class="mb-4">
                    Langkah-langkah integrasi Toko
                    {{
                      this.dataForm.channel ? this.dataForm.channel.name : ""
                    }}
                  </p>
                  <table>
                    <tr>
                      <td>1.</td>
                      <td>
                        Aliquip magna minim ipsum non ullamco magna ea pariatur
                        officia cupidatat velit nisi
                      </td>
                    </tr>
                    <tr>
                      <td>2.</td>

                      <td>
                        Aliquip magna minim ipsum non ullamco magna ea pariatur
                        officia cupidatat velit nisi
                      </td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>
                        Aliquip magna minim ipsum non ullamco magna ea pariatur
                        officia cupidatat velit
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-row justify-center items-center w-full">
            <Button
              :cta="formStatus == 0 ? 'Batal' : 'Kembali'"
              type="button"
              bgColor="transparent"
              borderColor="transparent"
              textColor="#ff0000"
              bgHover="#dbdbdb"
              class="flex justify-center items-center text-base w-full mx-2"
              id="prevBtn"
              @clickableEvent="nextTab(-1)"
            />
            <Button
              :cta="formStatus == 2 ? 'Submit' : 'Selanjutnya'"
              type="button"
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

    <a-modal
      centered
      :visible="afterSubmit"
      :footer="null"
      :width="400"
      @cancel="showMessage(false)"
    >
      <div class="flex flex-col justify-center items-center w-full m-auto">
        <div
          class="content w-full text-center flex flex-col justify-center items-center my-2"
        >
          <img
            class="w-50 mb-4"
            src="@/assets/images/success-icon.png"
            alt="success"
          />
          <div class="p">
            <h2 class="text-xl font-medium">Request Terkirim</h2>
            <p class="text-sm text-grey mb-4">
              Request anda sedang dalam proses mohon untuk menunggu dan akan ada
              email konfirmasi persetujuan integrasi dari toko ke email toko
              anda
            </p>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center w-full">
          <Button
            cta="Tambah Toko Lain"
            type="button"
            bgColor="#ff0000"
            borderColor="#ff0000"
            bgHover="#ff3636"
            textColor="#ffffff"
            class="flex justify-center items-center text-base w-full mx-2 my-2"
            @clickableEvent="compose(showMessage(false), showModal(true))"
          />
          <Button
            cta="Selesai"
            type="button"
            bgColor="transparent"
            borderColor="transparent"
            textColor="#ff0000"
            bgHover="#dbdbdb"
            class="flex justify-center items-center text-base w-full mx-2"
            @clickableEvent="showMessage(false)"
          />
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
import Button from "@/components/Buttons/Button";
import axios from "axios";
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
      formStatus: 0,
      typeBtn: "button",
      afterSubmit: false,
      channel: [
        {
          id: Math.floor(Math.random() * 100000),
          name: "Shopee",
          src: require("@/assets/images/channel/shopee.jpg"),
          alt: "Shopee Logo",
        },
        {
          id: Math.floor(Math.random() * 100000),
          name: "Tokopedia",
          src: require("@/assets/images/channel/tokopedia.png"),
          alt: "Tokopedia Logo",
        },
        {
          id: Math.floor(Math.random() * 100000),
          name: "Blibli",
          src: require("@/assets/images/channel/blibli.jpg"),
          alt: "Blibli Logo",
        },
        {
          id: Math.floor(Math.random() * 100000),
          name: "Bukalapak",
          src: require("@/assets/images/channel/bukalapak.jpg"),
          alt: "",
        },
        {
          id: Math.floor(Math.random() * 100000),
          name: "Lazada",
          src: require("@/assets/images/channel/lazada.png"),
          alt: "Lazada Logo",
        },
        {
          id: Math.floor(Math.random() * 100000),
          name: "Zalora",
          src: require("@/assets/images/channel/zalora.png"),
          alt: "Zalora Logo",
        },
        {
          id: Math.floor(Math.random() * 100000),
          name: "Zilingo",
          src: require("@/assets/images/channel/zilingo.png"),
          alt: "Zilingo Logo",
        },
        {
          id: Math.floor(Math.random() * 100000),
          name: "JD.ID",
          src: require("@/assets/images/channel/jdid.png"),
          alt: "JD.ID Logo",
        },
        {
          id: Math.floor(Math.random() * 100000),
          name: "Shopee",
          src: require("@/assets/images/channel/shopee.jpg"),
          alt: "Shopee Logo",
        },
        {
          id: Math.floor(Math.random() * 100000),
          name: "Tokopedia",
          src: require("@/assets/images/channel/tokopedia.png"),
          alt: "Tokopedia Logo",
        },
        {
          id: Math.floor(Math.random() * 100000),
          name: "Shopee",
          src: require("@/assets/images/channel/shopee.jpg"),
          alt: "Shopee Logo",
        },
        {
          id: Math.floor(Math.random() * 100000),
          name: "Blibli",
          src: require("@/assets/images/channel/blibli.jpg"),
          alt: "Blibli Logo",
        },
        {
          id: Math.floor(Math.random() * 100000),
          name: "JD.ID",
          src: require("@/assets/images/channel/jdid.png"),
          alt: "JD.ID Logo",
        },
        {
          id: Math.floor(Math.random() * 100000),
          name: "Blibli",
          src: require("@/assets/images/channel/blibli.jpg"),
          alt: "Blibli Logo",
        },
        {
          id: Math.floor(Math.random() * 100000),
          name: "Tokopedia",
          src: require("@/assets/images/channel/tokopedia.png"),
          alt: "Tokopedia Logo",
        },
      ],
      dataForm: {
        storeName: null,
        urlStore: null,
        clientName: null,
        type: null,
        channel: null,
      },
    };
  },
  computed: {
    ...mapGetters(["modalVisibility"]),
  },
  methods: {
    ...mapActions(["showModal"]),

    nextTab(n) {
      let slides = document.getElementsByClassName("formSlide");

      let form = this.validateForm();

      this.indexTab += n;

      if (this.indexTab < 1) {
        this.showModal(false);
        this.indexTab = 1;
      } else if (this.indexTab == 1) {
        this.formStatus = 0;
      } else if (this.indexTab > 1 && this.indexTab < slides.length) {
        this.formStatus = 1;
      } else if (this.indexTab == slides.length) {
        this.formStatus = 2;
      } else if (this.indexTab > slides.length && form.status) {
        this.onSubmit(event);
        this.indexTab = 1;
        this.showModal(false);
        return true;
      } else {
        this.indexTab -= 1;
      }

      return false;
    },

    selectChannel(id) {
      // Get the container element
      let channel = document.getElementById("channel-" + id);
      let current = document.querySelector(".channel-container.active");

      if (current) {
        current.className = current.className.replace(" active", "");
      }
      channel.classList.add("active");

      let findChannel = this.channel.find((ch) => ch.id == id);
      this.dataForm.channel = findChannel;
    },

    validateForm() {
      let response = {
        status: false,
        message: [],
      };

      if (!this.dataForm.clientName) {
        response.message.push("Please Choose a Client Name");
      } else if (!this.dataForm.channel) {
        response.message.push("Please Choose a Channel");
      } else if (!this.dataForm.storeName) {
        response.message.push("Please Add a Store Name");
      } else if (!this.dataForm.urlStore) {
        response.message.push("Please Add a URL Store");
      } else if (!this.dataForm.type) {
        response.message.push("Please Add a Store Type");
      } else {
        response.status = true;
        response.message = [];
      }

      return response;
    },

    async onSubmit(e) {
      try {
        await axios
          .post(
            "https://626b682ce5274e6664cba68e.mockapi.io/api/v1/store",
            this.dataForm
          )
          .then((response) => {
            this.resetAll();
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        return console.error(error);
      }

      e.preventDefault();
    },

    resetAll() {
      this.showModal(false);
      this.indexTab = 1;
      this.formStatus = 0;
      this.dataForm = {
        storeName: null,
        urlStore: null,
        clientName: null,
        type: null,
        channel: null,
      };

      let current = document.querySelector(".channel-container.active");
      if (current) {
        current.className = current.className.replace(" active", "");
      }

      this.showMessage(true);
    },

    showMessage(state) {
      this.afterSubmit = state;
    },

    createSubHeader() {
      let div = document.createElement("div");
      div.classList.add("subheader", "text-xs", "font-regular", "text-grey");
      div.innerHTML = "Pilih saluran untuk diintegrasikan ke toko Anda";
      document.querySelector("div.ant-modal-header").appendChild(div);
    },
  },
  mounted() {},
};
</script>
<style>
table {
  border-collapse: collapse;
  width: 100%;
}

td {
  height: 40px;
  vertical-align: top;
  padding-right: 5px;
  padding-left: 5px;
  text-align: justify;
}

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

.group {
  margin-bottom: 30px;
}

.channel-group {
  display: grid;
  grid-gap: 25px 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  width: 100%;
  height: 300px;
  overflow-y: scroll;
}

.channel-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  width: 100%;
  background-color: #ebecf0;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  cursor: pointer;
}

.channel-container p {
  width: 100%;
  color: #929292;
  padding: 2px;
  margin-left: 5px;
}

.channel-container .channel-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
}

.channel-container.active {
  background-color: #ff0954;
  border: 2px solid #ff0954;
}

.channel-container.active > p {
  color: white;
}

.channel-container img {
  object-fit: cover;
  overflow-y: hidden;
  height: auto;
  width: 100%;
  margin: auto;
  padding: 10px;
}

/*Styling select input*/
.select-holder,
.input-holder {
  position: relative;
  width: 100%;
}

select,
input {
  height: 40px;
  font-size: 16px;
  padding: 0px 10px;
  border-radius: 4px;
  border: 1px solid #bfbfbf;
  width: 100%;
  outline: none;
}

.placeholder {
  position: absolute;
  top: -10px;
  left: 8px;
  padding: 0 8px;
  background-color: white;
  color: #bfbfbf;
  font-size: 12px;
}

/*Styling radio button*/
.label-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.label-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: #ffffff;
  border: 2px solid #929292;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.label-container:hover input ~ .checkmark {
  background-color: #ff000;
}

/* When the radio button is checked, add a blue background */
.label-container input:checked ~ .checkmark {
  border: 5px solid #ff0000;
}

.mobile {
  display: none;
}

@media only screen and (max-width: 768px) {
  /*Styling radio button*/
  .label-container {
    padding-left: 25px;
    margin-bottom: 12px;
  }

  /* Create a custom radio button */
  .checkmark {
    height: 18px;
    width: 18px;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }
}
</style>
