<template>
  <div class="h-screen w-full bg-[#318F60] flex flex-col space-y-8 py-8">
    <div class="flex items-center justify-center w-full">
      <Logo class="w-[267px] cursor-pointer" @click="goToHome" />
    </div>
    <div class="space-y-4">
      <NavItem
        :icon="menu.icon"
        :label="menu.title"
        :key="menu.title"
        :isActive="activeRouteName == menu.route"
        v-for="menu in menus"
        @click="changeMenu(menu)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref,computed } from "vue";
import Logo from "./Logo.vue";
import NavItem from "./NavItem.vue";

import { useRouter } from "vue-router";
import { useRoute } from "vue-router";


export default defineComponent({
  components: {
    Logo,
    NavItem,
   
  },
  setup() {
    const router = useRouter();
    const route = useRoute()
    const activeMenu = ref("Accueil");
    const menus = [
    {
        title: "Utilisateurs",
        icon: "user",
        route: "dashboard",
        path:'/',
      },
      {
        title: "Cartes profesionnelles",
        icon: "card",
        route: "professionalCard",
        path:'cartes-professionnelles',
      },

      {
        title: "Commission d'emploi",
        icon: "card",
        route: "otherCard",
        path:'comission-emploi',
      },
      
    ];
    function changeMenu(menu: any) {
      activeMenu.value = menu.title;
      router.push({ name: menu.route });
    }
    const activeRouteName = computed(() => {
      const actualRoute = route.path.split("/")[1];
      const menu: any = menus.find((value: any) => {
        if( value?.path){
            const valuePath: string | null = value?.path.split("/")[0];
            console.log("eee", valuePath)
            return valuePath == actualRoute;
        }
        else
            return false
       
      });

      if (menu) return menu.route;
      return null;
    });

    function goToHome() {
      router.push({
        name: "publications",
      });
    }
    return {
      menus,
      activeMenu,
      changeMenu,
      goToHome,activeRouteName
    };
  },
});
</script>

<style scoped></style>
