<template>
  <v-app app>
    <Header />
    <transition name="page" mode="out-in">
      <router-view class="view h-100"></router-view>
    </transition>
    <Footer />
  </v-app>
</template>

<style lang="scss">
@keyframes slide-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.page-enter-active, .page-leave-active {
  transition: transform 300ms ease;
}

.page-enter, .page-leave-to {
  position: absolute;
  width: 100%;
}

.page-enter-active {
  animation: slide-in 300ms forwards;
}

.page-leave-active {
  animation: slide-out 300ms forwards;
}
</style>