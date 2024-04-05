<script setup lang="ts">
import { ref } from "vue";
import { useTasksStore } from "~/store/tasks"
const task_store = useTasksStore()

const titleCard = ref<string>('')
const hours = ref<string>('');
const isActive = ref<boolean>(false);

function addTask<T>(validForm: boolean, data: Record<string, T>) {
  if(validForm) {

    task_store.addTask({
      id: new Date().getTime(),
      title: data.title as string,
      completed: false,
      timer: data.timer as string  + ':00',
      initialTimer: data.timer as string + ':00',
    })

    isActive.value = false;
  }
}

function generateTimeSlots() {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 5) {
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      slots.push(`${formattedHour}:${formattedMinute}`);
    }
  }
  slots.pop();
  return slots;
}

const timeSlots = generateTimeSlots();
</script>

<template>
  <v-dialog max-width="500" v-model="isActive">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
          v-bind="activatorProps"
          class="button-open-dialog"
          color="primary"
          rounded="circle"
          icon="mdi-plus"
          size="large"
      ></v-btn>
    </template>

    <template v-slot:default>
      <v-card class="pa-4">
        <v-card-title class="px-2">Добавить задачу</v-card-title>
        <v-form
            ref="form"
            @submit.prevent="addTask($refs.form.isValid,{ title: titleCard , timer: hours })"
        >
          <v-text-field
              label="Заголовок"
              clearable
              v-model="titleCard"
              variant="solo"
              class="mb-3"
              required
              :rules="[
                u => !!u || 'Заголовок обязателен',
                u => !u || u.length <= 20 || 'Имя не должно быть длиннее 50 символов'
              ]"
          />
          <v-select
              label="Время на задачу"
              clearable
              :items="timeSlots"
              v-model="hours"
              variant="solo"
              :rules="[
                u => !!u || 'Время обязательно',
              ]"
              class="mb-2"
          />
          <v-card-actions class="d-flex justify-end px-0">
            <v-btn
                text="Добавить"
                class="bg-background"
                type="submit"
            />
            <v-btn
                text="Закрыть"
                class="bg-background"
                @click="isActive = false"
            />
          </v-card-actions>
        </v-form>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped lang="scss">
.button-open-dialog {
  position: fixed;
  bottom: 80px;
  right: 20px;
}
</style>