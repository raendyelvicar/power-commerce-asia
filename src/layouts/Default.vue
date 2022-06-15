<template lang="">
  <div id="layout">
    <Navbar id="nav"> </Navbar>
    <slot />
  </div>
</template>
<script>
import LanguageSwitcher from "@/components/Dropdown/LanguageSwitcher";
import Navbar from "@/components/Navbar/Navbar";

export default {
  components: {
    LanguageSwitcher,
    Navbar,
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
  padding: 20px 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

@media only screen and (max-width: 768px) {
  #layout {
    width: 95%;
  }
}
</style>
