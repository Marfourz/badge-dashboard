<template>
    <div :class="['w-full flex', inline ? 'flex-col md:flex-row': 'flex-col']">
      <div :class="['text-gray-80 font-semibold  text-xs md:text-sm', inline ? 'mr-2': '']" v-html="label"></div>
  
      <div class="text-xs md:text-sm">
        <slot >
          <div class="text-grey-70" v-html="value" @click="action"></div>
        </slot>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    value: {
      type: [String, Number]
    },
    action:{
      type : Function
    }
  }
}
</script>