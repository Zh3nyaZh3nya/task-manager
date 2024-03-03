<script setup lang="ts">

</script>

<template>
  <v-app-bar
      app
      :elevation="0"
      :height="100"
      class="d-flex flex-column px-2"
  >
    <v-toolbar-title class="font-weight-medium">
      Task<label class="text-primary">Manager</label>
    </v-toolbar-title>
    <v-text-field
      variant="solo"
      clearable
      placeholder="Поиск"
      :hide-details="true"
      class="mx-2"
    />
  </v-app-bar>
</template>

<style scoped>
.v-toolbar__content, .v-toolbar__extension {
  flex-direction: column;
  align-items: normal;
}
</style>