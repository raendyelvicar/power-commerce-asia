<template lang="">
  <svg
    viewBox="64 64 896 896"
    data-icon="plus"
    :width="width"
    :height="height"
    :fill="color"
    aria-hidden="true"
    focusable="false"
    class=""
  >
    <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
    <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
  </svg>
</template>
<script>
export default {
  name: "Plus",
  props: ["color", "height", "width"],
};
</script>
<style lang=""></style>
