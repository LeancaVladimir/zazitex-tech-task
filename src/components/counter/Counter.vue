<template>
  <div class="counter">
    <button @click="emitCount(-1)">
      <img class="icon" src="../../assets/remove.svg" alt="remove" />
    </button>
    <p>{{ count }}</p>
    <button @click="emitCount(1)">
      <img class="icon" src="../../assets/add.svg" alt="add" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'CounterComponent',
  props: {
    initialCount: {
      type: Number,
      default: 1,
    },
    maxAmount: {
      type: Number,
      default: 100,
    },
  },
  setup(props, { emit }) {
    const count = ref(props.initialCount);

    const emitCount = (value: number) => {
      if (count.value + value >= 0 && count.value + value <= props.maxAmount) {
        count.value += value;
        emit('count', count.value);
      }
    };

    watch(count, (newCount) => {
      if (newCount < 0) {
        count.value = 0; // Prevent negative values
      }
    });

    return {
      count,
      emitCount,
    };
  },
});
</script>

<style scoped lang="scss">
.counter {
  @apply flex justify-evenly;
}
.icon {
  @apply block w-6 h-6;
}
</style>
