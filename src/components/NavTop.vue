<template>
  <div
    class="bg-white w-full flex items-center justify-between px-4 shadow-5xl h-20"
  >
    <div></div>
  
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRouter } from "vue-router";


export default defineComponent({
  setup() {
    const show = ref(false)
 
    const router = useRouter()
  

    return {
    
    };
  },
});
</script>

<style scoped></style>
