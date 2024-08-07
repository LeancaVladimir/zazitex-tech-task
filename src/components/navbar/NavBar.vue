<template>
  <div class="nav">
    <div class="nav__content">
      <router-link to="/">
        <img class="logo" src="../../assets/logo.svg" alt="Eco Products" />
      </router-link>
      <router-link to="/checkout">
        <div class="basket">
          <img class="basket__logo" src="../../assets/shopping-basket.svg" alt="Shopping basket" />
          <div v-if="checkout.length" class="basket__badge">{{ checkout.length }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'NavBarComponent',
  computed: {
    ...mapState(['checkout']),
  },
});
</script>

<style scoped lang="scss">
.logo {
  @apply flex items-center w-28;
}

.basket {
  @apply relative;

  &__logo {
    @apply flex items-center w-12 h-12;
  }

  &__badge {
    @apply absolute top-0 right-0 w-6 h-6 border-2 border-white flex items-center bg-rose-500 justify-center rounded-full text-white text-xs font-bold;

    transform: translate(50%, -50%);
  }
}

.nav {
  @apply border-b border-gray-400 shadow-md sticky top-0 bg-white;

  &__content {
    @apply container mx-auto flex justify-between items-center;
  }
}
</style>
