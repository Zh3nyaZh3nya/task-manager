<script setup lang="ts">
import { useTasksStore } from "~/store/tasks"
const tasks_from_store = useTasksStore()
</script>

<template>
  <v-main class="mt-4 mb-16 main position-relative">
    <v-container>
      <h3 class="text-primary mb-3">Статистика задач </h3>
      <h4>Общее количество задач: {{ tasks_from_store.total_count_task }}</h4>
      <h4>Количество выполненных задач: {{ tasks_from_store.complete_count_task }}</h4>
      <h4>Количество удаленных задач: {{ tasks_from_store.delete_count_task }}</h4>
    </v-container>
  </v-main>
</template>

<style scoped lang="scss">

</style>