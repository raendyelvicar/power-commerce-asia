<template>
  <div class="navbar flex flex-row justify-center items-center w-full">
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="home">
        <router-link to="/">Beranda</router-link>
      </a-menu-item>

      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"> Produk</span>
        <a-menu-item-group>
          <a-menu-item key="product:1">
            <router-link to="/catalog">Katalog Produk</router-link></a-menu-item
          >
          <a-menu-item key="product:2">
            <router-link to="/cart">Keranjang</router-link></a-menu-item
          >
        </a-menu-item-group>
      </a-sub-menu>

      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"> Transaksi</span>
        <a-menu-item-group>
          <a-menu-item key="transactions:1">
            <router-link to="/transactions"
              >Daftar Transaksi</router-link
            ></a-menu-item
          >
          <a-menu-item key="transactions:2">
            <router-link to="/payment-list"
              >Menunggu Pembayaran</router-link
            ></a-menu-item
          >
          <a-menu-item key="transactions:3">
            <router-link to="/how-to-pay">Cara Pembayaran</router-link>
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>

      <a-menu-item key="channel">
        <router-link to="/channel">Channel</router-link>
      </a-menu-item>
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
