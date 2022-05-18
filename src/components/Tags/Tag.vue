<template lang="">
  <button class="tag">{{ name }}</button>
</template>
<script>
export default {
  name: "Tag",
  props: ["name"],
};
</script>
<style>
.tag {
  padding: 8px 12px;
  border-radius: 10px;
}
</style>
