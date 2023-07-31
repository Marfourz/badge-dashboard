<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue";
import NavTop from "@/components/NavTop.vue";
</script>

<template>
  <div class="w-full h-screen overflow-hidden flex">
      <div class="w-1/5">
        <NavBar />
      </div>
      <div class="w-4/5">
        <NavTop class="py-3" />
        <div class="h-full bg-gray-200 overflow-auto p-8 space-y-4">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>


