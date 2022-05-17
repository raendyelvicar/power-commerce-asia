<template lang="">
  <button class="button">
    {{ cta }}
  </button>
</template>
<script>
export default {
  name: "Button",
  props: ["cta"],
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
</style>
