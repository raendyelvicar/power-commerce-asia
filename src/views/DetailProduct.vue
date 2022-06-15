<template lang="">
  <div class="detail-product">
    <Slideshow class="slideshow"></Slideshow>

    <div class="product-information flex flex-col">
      <h3 class="product-title text-2xl font-bold" style="margin-bottom: 0">
        iPhone 12 Mini 64 GB - Culpa ea voluptate dolor deserunt ex nostrud
        magna velit consectetur eu amet.
      </h3>

      <div class="line"></div>

      <div class="product-meta flex flex-col">
        <div class="flex flex-row justify-left">
          <p class="text-base font-medium" style="width: 50px">SKU</p>
          <p class="text-base font-medium">GE-701277</p>
        </div>

        <br />

        <div class="flex flex-row justify-left items-center">
          <div
            class="flex justify-left items-center"
            style="width: 50px; height: 30px"
          >
            <WalletStar height="30px" width="30px" color="#015CA1"></WalletStar>
          </div>
          <p class="text-2xl font-bold text-orange">250.000</p>
        </div>
      </div>

      <div class="line"></div>

      <div class="product-description text-sm text-justify font-medium">
        Id officia eu nisi culpa ipsum sint. Id voluptate in cupidatat officia
        eiusmod. Laborum aliquip Lorem et veniam ea qui fugiat quis non nulla
        duis irure ullamco. Commodo sunt proident qui sint sunt qui pariatur est
        excepteur.
      </div>

      <div class="notes text-xs text-justify font-bold">
        Notes: Eu elit non ad et eiusmod enim tempor mollit excepteur tempor
        deserunt ut.
      </div>
    </div>
  </div>
</template>
<script>
import Slideshow from "@/components/Slideshow/Slideshow";
import WalletStar from "@/components/Icons/WalletStar";

export default {
  name: "DetailProduct",
  components: {
    Slideshow,
    WalletStar,
  },
};
</script>
<style>
.detail-product {
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 50px;
}

.line {
  background-color: #d9d9d9;
  width: 100%;
  height: 2px;
  border-radius: 10px;
  margin: 20px 0;
}

.notes {
  padding: 20px;
}

@media only screen and (max-width: 768px) {
  .detail-product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 20px;
  }
}
</style>
