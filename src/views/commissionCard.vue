<template>
    <div class="space-y-6 mb-10">
      <Title>Commission emploi</Title>
      <div class="flex space-x-6 md:flex-row flex-col">
        <Form
          class="bg-white shadow rounded p-6 space-y-4 w-full"
          @submit="onSubmit"
        >
         
          <UploadImage
            customClass="w-[200px] h-[200px]"
            @change="file = $event"
          />
          <div class="grid grid-cols-2 gap-4">
            <BaseInput
            name="numéro"
            label="Numéro de PV"
            v-model="data.pvNumber"
            rules="required"
          ></BaseInput>
          <BaseInput
            name="date pv"
            label="En date de"
            v-model="data.pvDate"
            type="date"
            
          ></BaseInput>
          <BaseInput
            name="nom"
            label="Nom"
            v-model="data.lastname"
            rules="required"
          ></BaseInput>
          <BaseInput
            name="prénom"
            label="Prénom"
            v-model="data.firstname"
            rules="required"
          ></BaseInput>
          <BaseInput
            name="date de naissannce"
            label="Date de naissance"
            type="date"
            v-model="data.birthdate"
          ></BaseInput>
          <BaseInput
            name="lieu de naissance"
            label="Lieu de naissance"
            v-model="data.birthplace"
          ></BaseInput>
         
          </div>
        
        
          <div class="w-full flex justify-end">
            <BaseButton :loading="loading">Soumettre et imprimer</BaseButton>
          </div>
        </Form>
  
       
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Form } from "vee-validate";
  import Title from "../components/Title.vue";
  import BaseButton from "../components/global/BaseButton.vue";
  import UploadImage from "@/components/UploadImage.vue";
  import { ref, reactive,onMounted } from "vue";
  import { useUsersStore } from "../stores/users";
  import { useToast } from "vue-toastification";
  
  const toast = useToast();
  
  const loading = ref(false);
  
  const data = reactive({
    firstname: "",
    lastname: "",
    matricule: "",
    birthdate: "",
    birthplace: "",
    bloodType: "",
    grade: "",
    pvNumber: "",
    printingDate: "",
    pvDate:""
  });
  
  const usersStore = useUsersStore();
  
  const file = ref();
  
  async function onSubmit() {
    loading.value = true;
    try {
      const response = await usersStore.create(data, file.value);
      loading.value = false;
    } catch (error:any) {
      loading.value = false;
      toast.error(error.response.data.message)
    }
  }
  
  onMounted(() => {
    
  })
  
  </script>
  
  <style scoped></style>
  