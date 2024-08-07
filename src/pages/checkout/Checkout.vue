<template>
  <main class="checkout">
    <div v-if="checkout.length">
      <h2 class="title">Your Cart</h2>
      <ul class="cart-list">
        <li v-for="item in checkout" :key="item.title" class="cart-item">
          <img :src="item.image" :alt="item.title" class="cart-image" />
          <div class="cart-details">
            <h3>{{ item.title }}</h3>
            <p>Price: ${{ item.price }}</p>
            <p>Quantity in stock: {{ item.amount }}</p>
            <p>Total: ${{ item.price * item.count }}</p>
            {{ item.id }}
          </div>
          <div class="counter">
            <Counter
              :initialCount="item.count"
              :max-amount="getProductAmount(item.id)"
              @count="(newCount: number) => handleCountChange(item, newCount)"
            />
          </div>
          <button @click="removeItem(item)" class="remove-button">Remove</button>
        </li>
      </ul>
      <div class="summary">
        <h3>Total Price: ${{ totalPrice }}</h3>
        <Button label="Proceed to Checkout" @clicked="proceedToCheckout"></Button>
      </div>
    </div>
    <CheckoutEmpty v-else />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapGetters, mapMutations } from 'vuex';
import Counter from '@/components/counter/Counter.vue';
import { CheckoutProduct, Product } from 'types/type';
import CheckoutEmpty from '@/components/empty/CheckoutEmpty.vue';
import Button from '@/components/button/Button.vue';
import { products } from '../../../data/Products';

export default defineComponent({
  name: 'CheckoutPage',
  components: {
    Counter,
    Button,
    CheckoutEmpty,
  },
  data: () => ({
    // for initial amount
    products: products,
  }),
  computed: {
    ...mapState(['checkout']),
    ...mapGetters(['totalPrice']),
    getProductAmount() {
      return (id: number): number => {
        // Assuming you have a Vuex store module that maintains products
        const product = this.products.find((item: Product) => item.id === id);
        return product ? product.amount : 0;
      };
    },
  },
  methods: {
    ...mapMutations(['updateCheckoutItemCount', 'removeFromCheckout']),
    handleCountChange(item: CheckoutProduct, newCount: number) {
      this.updateCheckoutItemCount({ item, newCount });
    },
    removeItem(item: CheckoutProduct) {
      this.removeFromCheckout(item);
    },
    proceedToCheckout() {
      alert('Proceeding to checkout...');
    },
  },
});
</script>

<style lang="scss" scoped>
.checkout {
  @apply py-6 container mx-auto min-h-screen;
}
.title {
  @apply text-2xl font-semibold mb-4;
}
.cart-list {
  @apply list-none p-0;
}
.cart-item {
  @apply flex items-center mb-4 p-4 border border-gray-300 rounded shadow-lg;
}
.cart-image {
  @apply w-24 h-24 object-cover mr-4;
}
.cart-details {
  @apply flex-1;
}
.cart-details h3 {
  @apply text-xl font-semibold mb-2;
}
.cart-details p {
  @apply mb-1;
}
.summary {
  @apply mt-6 text-right;
}
.checkout-button {
  @apply bg-blue-500 text-white py-2 px-4 rounded;
  &:hover {
    @apply bg-blue-600;
  }
}
.counter {
  @apply w-24;
}
.remove-button {
  @apply bg-red-500 text-white py-1 px-2 rounded;
  &:hover {
    @apply bg-red-600;
  }
}
</style>
