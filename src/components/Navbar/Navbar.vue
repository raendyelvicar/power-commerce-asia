<template>
  <div class="navbar w-full">
    <div class="desktop flex flex-row justify-between items-center">
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="home">
          <router-link to="/">Beranda</router-link>
        </a-menu-item>

        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper"> Produk</span>
          <a-menu-item-group>
            <a-menu-item key="product:1">
              <router-link to="/catalog"
                >Katalog Produk</router-link
              ></a-menu-item
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
    <div class="mobile flex flex-col justify-center items-center">
      <a-icon type="menu" @click="showMenu" style="padding-left: 10px" />
      <div class="menu" :class="[this.menuState ? '' : 'hidden']">
        <a-menu v-model="current" mode="inline">
          <a-menu-item key="home" style="padding-left: 0px" @click="showMenu">
            <router-link to="/">Beranda</router-link>
          </a-menu-item>

          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper"> Produk</span>
            <a-menu-item-group>
              <a-menu-item key="product:1" @click="showMenu">
                <router-link to="/catalog"
                  >Katalog Produk</router-link
                ></a-menu-item
              >
              <a-menu-item key="product:2" @click="showMenu">
                <router-link to="/cart">Keranjang</router-link></a-menu-item
              >
            </a-menu-item-group>
          </a-sub-menu>

          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper"> Transaksi</span>
            <a-menu-item-group>
              <a-menu-item key="transactions:1" @click="showMenu">
                <router-link to="/transactions"
                  >Daftar Transaksi</router-link
                ></a-menu-item
              >
              <a-menu-item key="transactions:2" @click="showMenu">
                <router-link to="/payment-list"
                  >Menunggu Pembayaran</router-link
                ></a-menu-item
              >
              <a-menu-item key="transactions:3" @click="showMenu">
                <router-link to="/how-to-pay">Cara Pembayaran</router-link>
              </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>

          <a-menu-item
            key="channel"
            style="padding-left: 0px"
            @click="showMenu"
          >
            <router-link to="/channel">Channel</router-link>
          </a-menu-item>
        </a-menu>
        <LanguageSwitcher class="w-full" style="margin-left: 0px" />
      </div>
    </div>
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
      menuState: false,
    };
  },
  methods: {
    showMenu() {
      this.menuState = !this.menuState;
    },
  },
};
</script>

<style>
.mobile {
  display: hidden;
}

.menu {
  position: fixed;
  width: 100%;
  margin: 0;
  padding: 10px 20px;
  z-index: 100;
  left: 0;
  background: white;
}

@media (max-width: 425px) {
  .mobile {
    display: block;
  }

  .desktop {
    display: hidden;
  }

  .navbar {
    position: relative;
    z-index: 100;
    top: 0;
    left: 0;
    background: white;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  }
}
</style>
