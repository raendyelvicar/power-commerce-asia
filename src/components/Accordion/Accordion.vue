<template>
  <div class="accordion">
    <a-menu
      style="width: 100%"
      :default-selected-keys="['1']"
      :open-keys.sync="openKeys"
      mode="inline"
      @click="handleClick"
    >
      <a-sub-menu
        key="sub1"
        @titleClick="titleClick"
        style="margin-bottom: 20px"
      >
        <span slot="title" class="flex items-center">
          <img src="@/assets/images/bni-logo.png" />
          <span class="text-base text-black font-bold">BNI Mobile Banking</span>
        </span>
        <a-menu-item-group key="g1">
          <template slot="title">
            <p>lkfndlkfdskfnlfkdfnldksfdlinisnfdlknlfksdnl</p>
          </template>
        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu
        key="sub2"
        @titleClick="titleClick"
        style="margin-bottom: 20px"
      >
        <span slot="title" class="flex items-center">
          <img src="@/assets/images/bni-logo.png" />
          <span class="text-base text-black font-bold">ATM BNI</span>
        </span>
        <a-menu-item-group key="g2">
          <template slot="title">
            <p>lkfndlkfdskfnlfkdfnldksfdlinisnfdlknlfksdnl</p>
          </template>
        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu key="sub3" style="margin-bottom: 20px">
        <span slot="title" class="flex items-center">
          <img src="@/assets/images/bni-logo.png" />
          <span class="text-base text-black font-bold">I-Bank Personal</span>
        </span>
        <a-menu-item-group key="g3">
          <template slot="title">
            <p>lkfndlkfdskfnlfkdfnldksfdlinisnfdlknlfksdnl</p>
          </template>
        </a-menu-item-group>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  name: "Accordion",
  data() {
    return {
      current: ["mail"],
      openKeys: ["sub1"],
    };
  },
  watch: {
    openKeys(val) {
      console.log("openKeys", val);
    },
  },
  methods: {
    handleClick(e) {
      console.log("click", e);
    },
    titleClick(e) {
      console.log("titleClick", e);
    },
  },
};
</script>
<style scoped>
img {
  height: 30px;
  width: auto;
  margin-right: 20px;
}
.ant-menu-submenu-title {
  padding-left: 0px;
}
</style>
