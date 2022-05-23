<template>
  <a-dropdown>
    <a-menu slot="overlay" @click="handleMenuClick">
      <a-menu-item
        key="1"
        @click="setLocale('en')"
        style="display: flex; justify-content: space-between"
      >
        <span style="font-weight: 600; margin-right: 5px; text-align: center"
          >EN</span
        >
        English
      </a-menu-item>
      <a-menu-item
        key="2"
        @click="setLocale('id')"
        style="display: flex; justify-content: space-between; margin: auto"
      >
        <span style="font-weight: 600; margin-right: 5px; text-align: center"
          >ID</span
        >
        Bahasa
      </a-menu-item>
    </a-menu>
    <a-button style="margin-left: 8px">
      {{ title }} <a-icon type="down" />
    </a-button>
  </a-dropdown>
</template>

<script>
export default {
  data() {
    return {
      title: this.$i18n.locale.toUpperCase(),
    };
  },
  methods: {
    handleMenuClick(e) {
      console.log("click", e);
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });

      this.title = locale.toUpperCase();
    },
  },
};
</script>
