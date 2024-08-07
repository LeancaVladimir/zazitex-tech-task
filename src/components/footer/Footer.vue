<template>
  <footer class="footer">
    <div class="footer__content">
      <p>&copy; {{ currentYear }} Vladimir. All rights reserved.</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterComponent',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
});
</script>

<style scoped lang="scss">
.footer {
  @apply bg-gray-800 text-white py-4 sticky bottom-0;

  &__content {
    @apply container mx-auto text-center;
  }
}
</style>
