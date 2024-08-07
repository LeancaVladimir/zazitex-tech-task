<template>
  <div class="product">
    <img :src="product.image" :alt="product.title + ' ' + product.owner" />
    <div class="info">
      <h3>
        {{ product.title }}
      </h3>
      <ul>
        <li>
          <span>Price:</span>
          <span>{{ product.price }}</span>
        </li>
        <li>
          <span>Amount:</span>
          <span>{{ product.amount }}</span>
        </li>
        <li>
          <span>Owner:</span>
          <span>{{ product.owner }}</span>
        </li>
        <li>
          <span>Rating:</span>
          <span>{{ product.rate }}</span>
        </li>
      </ul>
      <Counter @count="handleCountChange" :initial-count="count" :max-amount="product.amount" />
      <div class="button-container">
        <Button :label="'Add to checkout'" @clicked="handleSubmit" :disabled="isButtonDisabled"></Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { CheckoutProduct, Product } from 'types/type';
import { defineComponent } from 'vue';
import Counter from '../counter/Counter.vue';
import Button from '../button/Button.vue';
import { mapActions, mapGetters, mapState } from 'vuex';

export default defineComponent({
  name: 'ProductItemComponent',
  components: {
    Counter,
    Button,
  },
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
  data: () => ({
    count: 1,
  }),
  computed: {
    ...mapState(['checkout']),
    ...mapGetters(['checkoutData']),
    isButtonDisabled(): boolean {
      const checkoutProduct: CheckoutProduct = this.checkoutData.find((p: CheckoutProduct) => p.id === this.product.id);
      if (!checkoutProduct) return false;

      return checkoutProduct.amount < this.count;
    },
  },
  methods: {
    ...mapActions(['addToCheckout']),
    handleCountChange(newCount: number) {
      this.count = newCount;
    },
    handleSubmit() {
      const productWithCount: CheckoutProduct = { ...this.product, count: this.count };
      this.addToCheckout(productWithCount);
    },
  },
});
</script>
<style lang="scss" scoped>
.product {
  @apply flex flex-col rounded border border-gray-300 max-w-md shadow-lg;
}
img {
  @apply object-cover w-full h-52 border-b-2;
}
.info {
  @apply py-4 px-2;
}
h3 {
  @apply text-xl font-semibold border-b pb-2;
}

ul li {
  @apply flex justify-between items-center;

  span:nth-child(1) {
    @apply text-lg font-medium;
  }
}

.button-container {
  @apply flex mt-4 justify-end w-11/12;
}
</style>
