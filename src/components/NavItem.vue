<template>
  <div
    class="items-center flex w-full space-x-4 cursor-pointer text-white"
    :class="{
      'bg-black bg-opacity-40': isActive,
    }"
  >
    <div class="w-1 h-12" :class="{ 'bg-white ': isActive }"></div>
    <div>
      <BaseIcon :name="icon"></BaseIcon>
    </div>
    <div class="">{{ label }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    icon: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
