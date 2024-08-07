<template>
  <button @click="handleClick" :disabled="disabled" class="button">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    label: {
      type: String as PropType<string>,
      required: true,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit('clicked');
      }
    },
  },
});
</script>

<style scoped lang="scss">
.button {
  @apply bg-blue-500 text-white py-2 px-4 rounded;
  &:hover {
    @apply bg-blue-600;
  }
  &:disabled {
    @apply bg-gray-300 cursor-not-allowed;
  }
}
</style>
