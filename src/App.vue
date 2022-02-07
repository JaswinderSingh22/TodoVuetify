<template>
  <v-app class="grey">
    <nav>
    <v-toolbar flat app >
      <v-toolbar-title class="text-uppercase grey--text mx-5 " >
        <span class="font-weight-light" >ToDo</span>
        <span>App</span>
      </v-toolbar-title>
    </v-toolbar>
    </nav>

    <v-content align="center">
      <ToDo />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import ToDo from "./components/ToDo.vue";

export default Vue.extend({
  name: "App",
  components: {
    ToDo,
  },
});
</script>