<template>
  <div class="navbar flex flex-row justify-center items-center w-full">
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="home">
        <router-link to="/">Beranda</router-link>
      </a-menu-item>

      <a-menu-item key="catalog">
        <router-link to="/catalog">Katalog</router-link>
      </a-menu-item>

      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"> Transaksi</span>
        <a-menu-item-group>
          <a-menu-item key="setting:1">
            <router-link to="/transactions"
              >Daftar Transaksi</router-link
            ></a-menu-item
          >
          <a-menu-item key="setting:2">
            <router-link to="/payment-list"
              >Menunggu Pembayaran</router-link
            ></a-menu-item
          >
          <a-menu-item key="setting:3">
            <router-link to="/how-to-pay">Cara Pembayaran</router-link>
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
    </a-menu>
    <LanguageSwitcher />
  </div>
</template>
<script>
import LanguageSwitcher from "@/components/Dropdown/LanguageSwitcher";

export default {
  name: "Navbar",
  components: {
    LanguageSwitcher,
  },
  data() {
    return {
      current: ["home"],
    };
  },
};
</script>
