<template lang="">
  <button class="button" @click="redirectToUrl">
    {{ cta }}
  </button>
</template>
<script>
export default {
  name: "Button",
  props: [
    "cta",
    "url",
    "bgColor",
    "textColor",
    "borderColor",
    "bgHover",
    "icon",
  ],
  methods: {
    redirectToUrl() {
      window.location.href = this.url;
    },
  },
};
</script>
<style>
.button {
  color: #015ca1;
  font-weight: 600;
  margin-top: 20px;
  padding: 5px 30px;
  border: 1px #015ca1 solid;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #b0dfe5;
}

@media only screen and (max-width: 600px) {
  .button {
    padding: 5px 10px;
  }
}
</style>
