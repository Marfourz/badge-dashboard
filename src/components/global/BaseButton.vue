<template>
  <button
    v-bind="$attrs"
    @click="btnClick"
    :disabled="disabled"
    :class="{
      'py-1 px-2 space-x-2': size == 'xsmall',
      'py-2 px-2.5 space-x-3': size == 'small',
      'py-3 px-8 space-x-4': size == 'medium',
      'py-3.5 px-8 space-x-4': size == 'large',
      'md:text-sm text-xs': size == 'small' || size == 'xsmall',
      'md:text-md text-sm': size == 'medium',
      'text-[16px]': size == 'large',
      'bg-danger text-white': type == 'danger',
      'bg-secondary text-white': type == 'secondary',
      'bg-primary text-white': type == 'primary',
      'bg-success text-white': type == 'success',
      'bg-[#F4F6F9] text-[#6D7580]': type == 'success' && disabled,
      'bg-fadeDanger text-white': type == 'danger' && disabled,
      'bg-fadeSecondary text-white': type == 'secondary' && disabled,
      'bg-grey-10 text-success border border-success': type == 'outlineSucces',
      'border bg-white border-borderColor text-grey-80 hover:bg-gray-200 ':
        type == 'outline',
    }"
    class="cursor-pointer md:rounded-lg rounded flex items-center justify-center text-center font-semibold"
  >
    <BaseIcon :icon="icon" v-if="icon" />
    <div v-if="loading == false"><slot></slot></div>
    <BaseIcon name="laoder" v-else></BaseIcon>
    <!-- <img src="@/assets/images/loader.gif" alt="" class="w-6 h-6" > -->
    <BaseIcon :icon="iconEnd" v-if="iconEnd" />
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      type: {
        type: String as () =>
          | 'primary'
          | 'secondary'
          | 'success'
          | 'danger'
          | 'outline'
          | 'outlineSucces',
        default: 'success',
      },
      size: {
        type: String as () => 'xsmall' | 'small' | 'medium' | 'large',
        default: 'medium',
      },
      icon: {
        type: String,
      },
      iconEnd: {
        type: String,
      },
      loading: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      function btnClick(event: any) {
        if (props.loading) event.preventDefault();
      }
      return {
        btnClick,
      };
    },
  });
</script>

<style lang="scss" scoped></style>
