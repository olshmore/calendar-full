<template>
    <v-app>
        <Navbar/>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>
<script>
  import { mapGetters } from "vuex";
  import Navbar from "@/components/Navbar";
  import Errors from "@/components/Errors";
  export default {
    name: 'App',
    components: {
      Navbar,
      Errors
    },
    computed: {
      ...mapGetters(["error"])
    }
  };
</script>
<style>
</style>
