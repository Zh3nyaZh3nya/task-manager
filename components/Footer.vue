<script setup lang="ts">

</script>

<template>
  <v-footer class="d-flex justify-space-around py-3">
    <nuxt-link to="/" class="text-white bg-secondary rounded-lg pa-2" exact-active-class="text-primary">
      <v-icon icon="mdi-format-list-bulleted "></v-icon>
    </nuxt-link>
    <nuxt-link to="/complete" class="text-white bg-secondary rounded-lg pa-2" exact-active-class="text-primary">
      <v-icon icon="mdi-check-all"></v-icon>
    </nuxt-link>
  </v-footer>
</template>

<style lang="scss">
.v-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  .text-white.bg-secondary {
    transition: color 0.2s ease;

    .v-icon {

      transition: color 0.2s ease;

    }

    &.text-primary .v-icon {
      color: var(--v-primary-base);
    }
  }
}
</style>
