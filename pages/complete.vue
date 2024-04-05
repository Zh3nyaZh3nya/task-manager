<script setup lang="ts">
import { useTasksStore } from "~/store/tasks"
const tasksComplete = useTasksStore().tasksCompleted
</script>

<template>
  <v-main class="mt-4 mb-16 main position-relative complete">
    <v-container>
      <div
          class="d-flex justify-center align-center"
          v-if="!tasksComplete.length"
      >
        <h3 class="text-surface">Нету выполненных задач</h3>
      </div>
      <transition-group name="slide" tag="div">
        <TaskCard
            v-for="task in tasksComplete"
            :key="`task-${task.id}`"
            :task="task"
            class="mb-4"
        />
      </transition-group>

    </v-container>
  </v-main>
</template>

<style lang="scss">
.complete {
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(50px);
    opacity: 0;
  }
}
</style>