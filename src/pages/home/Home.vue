<template>
  <main>
    <ProductItem v-for="item in products" :key="item.id" :product="item" />
  </main>
</template>

<script lang="ts">
import ProductItem from '@/components/product-item/ProductItem.vue';
import { products } from '../../../data/Products';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    ProductItem,
  },
  data: () => ({
    products: products,
  }),
});
</script>

<style lang="scss" scoped>
main {
  @apply container mx-auto grid gap-8 grid-cols-3 py-6 min-h-screen;
}
</style>
