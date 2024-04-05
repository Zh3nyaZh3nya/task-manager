<template>
  <v-app-bar
      app
      :elevation="0"
      :height="40"
      class="d-flex flex-column pt-2 px-4 header"
      color="background-secondary"
  >
    <h3 class="font-weight-medium mb-3">
      Task<label class="text-primary">Manager</label> by <label class="text-primary">Zh3nya!_</label>
    </h3>
  </v-app-bar>
</template>

<style lang="scss">
.header {
  .v-toolbar__content > .v-toolbar-title {
    margin-inline-start: 0px;
  }
  .v-input {
    max-height: 40px;
    .v-field {
      background: #2C2D2E;
      &__input {
        min-height: 40px;
        padding: 0 8px !important;
      }

    }
    input {
      color: #fff;
      opacity: .8;
    }
    input::placeholder {
      color: #fff;
      opacity: .5;
    }
    .mdi-close-circle::before, .mdi-magnify::before{
      color: #fff;
    }
  }
  .v-toolbar__content {
    display: flex;
    flex-direction: column;
    align-items: normal;
  }
}
</style>