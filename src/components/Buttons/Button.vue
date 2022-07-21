<template lang="">
  <button class="button" :type="type" @click="clickableEvent" :style="cssProps">
    <slot name="icon"> </slot>
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
    "type",
  ],
  methods: {
    clickableEvent() {
      this.$emit("clickableEvent");
    },
  },
  computed: {
    cssProps() {
      return {
        "--bg-color": this.bgColor,
        "--text-color": this.textColor,
        "--border-color": this.borderColor,
        "--bg-hover-color": this.bgHover,
      };
    },
  },
};
</script>
<style>
.button {
  color: var(--text-color);
  font-weight: 600;
  padding: 6px 30px;
  border: 1px var(--border-color) solid;
  background-color: var(--bg-color);
  border-radius: 8px;
  cursor: pointer;
}

.button:hover {
  background-color: var(--bg-hover-color);
}

@media only screen and (max-width: 600px) {
  .button {
    padding: 5px 10px;
  }
}
</style>
