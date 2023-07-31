<template>
  <div >
    <input
      type="file"
      ref="file"
      class="hidden"
      @input="uploadFile"
      multiple
      accept="image/png, image/jpeg, video/mp3, video/mp4"
    />
    <div
      class="flex flex-col items-center space-y-2 justify-center "
      v-if="!selectedFile.file && !onlineFile.link"
      @click="onSelectFile"
    >
      <div>
        <img src="@/assets/images/upload.png" alt="" class="w-[250px] h-[200px]" />
      </div>
      <div class="text-center">Joindre l'image</div>
    </div>


    <div class="flex flex-col space-y-4 h-full" v-else v-bind="$attrs">
     
     
      <div class="rounded" :class="[customClass]">
        
        <img :src="fileStore.getFileLink(onlineFile.link)" alt="" class="rounded w-full h-full object-cover" v-if="onlineFile && !selectedFile.link">
        <img :src="selectedFile.link" alt="" class="rounded w-full h-full object-cover" v-else>
      </div>

      <BaseButton  type="outline" @click.stop.prevent="onSelectFile">Changer l'image</BaseButton>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import { useFileStore } from "@/stores/files";

export default defineComponent({

  

  props:{
    onlineFile : {
      type : Object,
      default : {}
    },
    customClass : {
        type: String
      }
  },

  setup(props, context) {
    const file = ref();

    const fileStore = useFileStore()
    
    const selectedFile = ref({
      file: null,
      link: "",
    });


    async function uploadFile(event: any) {
        
      selectedFile.value.file = file?.value?.files[0];

      const pickReader = new FileReader();

      pickReader.addEventListener("load", function (event) {
       
        const picFile = event.target;
        console.log('files', picFile?.result)
        selectedFile.value.link = picFile?.result as any;
        context.emit("change", selectedFile.value.file);
      });
      pickReader.readAsDataURL(selectedFile.value.file as any);
    }

    function onSelectFile() {
      file.value.click();
    }

   

    return {
      uploadFile,
      selectedFile,
      onSelectFile,
      file,
      fileStore
    };
  },
});
</script>

<style scoped></style>
