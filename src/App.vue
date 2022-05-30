<template>
  <div id="app font-open-sans">
    <div id="nav">
      <LanguageSwitcher />
    </div>

    <router-view />
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
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
