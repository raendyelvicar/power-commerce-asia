<template lang="">
  <div id="layout">
    <div id="nav">
      <LanguageSwitcher />
    </div>
    <slot />
  </div>
</template>
<script>
import LanguageSwitcher from "@/components/Dropdown/LanguageSwitcher";

export default {
  components: {
    LanguageSwitcher,
  },
};
</script>
<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  line-height: 1.5;
}

#layout {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  width: 80%;
}

#nav {
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

@media only screen and (max-width: 768px) {
  #layout {
    width: 95%;
  }
}
</style>
