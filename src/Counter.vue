<script>
import {defineComponent, ref} from 'vue';

export default defineComponent({
  setup() {
    const count = ref(0);

    function increment() {
        count.value++
    }

    return {
      count,
      increment
    }
  }
})
</script>

<template>
  <button @click="increment">
    Count is: {{ count }}
  </button>
</template>