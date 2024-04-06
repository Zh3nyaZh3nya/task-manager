<script setup lang="ts">
import { useTasksStore } from "~/store/tasks"
const tasks_from_store = useTasksStore().tasks
</script>

<template>
  <v-main class="mt-4 mb-16 main position-relative">
    <v-container>
      <div
          class="d-flex justify-center align-center mb-4"
          v-if="!tasks_from_store.length"
      >
        <h3 class="text-surface">Нету активных задач</h3>
      </div>
      <transition-group name="slide" tag="div">
        <TaskCard
            v-show="tasks_from_store.length > 0"
            v-for="task in tasks_from_store"
            :key="`task-${task.id}`"
            :task="task"
            class="mb-4"
        />
      </transition-group>
      <Popup />
    </v-container>
  </v-main>
</template>

<style lang="scss">
.main {
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(50px);
    opacity: 0;
  }
}
</style>