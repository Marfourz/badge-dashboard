<template>
    <div class="space-y-6"> 
        <Title>Liste des employés</Title>

        <BaseTable :data="users" :titles="titles"> 
            <template #image="{element}">
                
                <div>
                    <img :src="usersStore.getFileLink(element.image)" alt="" class="w-16 h-16">
                </div>
            </template>
            <template #action="{element}">
                <BaseButton>Voir détail</BaseButton>
            </template>
        
        </BaseTable>

      
    </div>
</template>

<script setup lang="ts">

import {onMounted, reactive, ref} from "vue"

import Title from '../components/Title.vue';
import { useUsersStore } from "../stores/users";
import { useToast } from "vue-toastification";
import BaseButton from "../components/global/BaseButton.vue";

const titles = ref([
{
        title: "",
        name: "image",
      },
    {
        title: "Matricule",
        name: "matricule",
      },
     {
        title: "Nom",
        name: "lastname",
      },
      {
        title: "Prénom",
        name: "firstname",
      },
      {
        title: "Grade",
        name: "grade",
      },
      {
        title: "",
        name: "action",
      },
])

const toast = useToast()

const usersStore = useUsersStore()
const users = ref([])

const params = reactive({
    skip : 0,
    take : 10,
})

const loading = ref(false)

onMounted(async () => {
    loading.value = true
    try{
        users.value =  await usersStore.findAll()
        loading.value = false
    }
    catch(error : any){
        toast.error(error.response.data)
    }
})
</script>

<style scoped>

</style>