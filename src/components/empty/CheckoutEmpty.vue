<template>
  <div class="checkout-empty">
    <h2 class="title">Your Cart is Empty</h2>
    <div class="message">
      <p>It looks like you don't have any items in your cart yet.</p>
      <p>Start shopping now to add items to your cart.</p>
    </div>
    <RouterLink to="/">
      <Button label="Go to shopping"></Button>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/components/button/Button.vue';
export default defineComponent({
  name: 'CheckoutEmptyComponent',
  components: {
    Button,
  },
});
</script>

<style lang="scss" scoped>
.checkout-empty {
  @apply flex flex-col items-center justify-center min-h-screen bg-red-500 text-white text-center p-8;
}
.title {
  @apply text-3xl font-bold mb-4;
}
.message {
  @apply mb-6;
}
.shop-button {
  @apply bg-blue-500 text-white py-2 px-6 rounded shadow-lg text-lg;

  &:hover {
    @apply bg-blue-600;
  }
}
</style>
