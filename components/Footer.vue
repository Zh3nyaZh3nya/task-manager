<script setup lang="ts">
const footerNav = [
  {
    id: 0,
    link: '/',
    icon: 'mdi-format-list-bulleted '
  },
  {
    id: 1,
    link: '/complete',
    icon: 'mdi-check-all'
  },
  {
    id: 2,
    link: '/profile',
    icon: 'mdi-account-cog'
  },
]
</script>

<template>
  <v-footer class="d-flex justify-space-around py-3">
    <nuxt-link
        v-for="link in footerNav"
        :key="link.id"
        :to="link.link"
        class="text-white bg-secondary rounded-lg pa-2"
        exact-active-class="text-primary"
    >
      <v-icon :icon="link.icon"></v-icon>
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
