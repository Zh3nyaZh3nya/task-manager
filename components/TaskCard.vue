<script setup lang="ts">
import { ref, watch } from "vue"
import { useTasksStore } from "~/store/tasks"
import type { ITask } from "~/types/card";

const tasks_from_store = useTasksStore()
const timerId = ref<number | null>(null);
const timerActive = ref<boolean>(false)

const props = defineProps({
  task: Object as PropType<ITask>,
})

const startTimer = () => {
  if (timerId.value !== null) return;

  timerActive.value = true;
  timerId.value = setInterval(() => {
    let [hours, minutes, seconds] = props.task.timer.split(':').map(Number);
    seconds--;
    if (seconds < 0) {
      minutes--;
      seconds = 59;
    }
    if (minutes < 0) {
      hours--;
      minutes = 59;
    }
    if (hours < 0) {
      stopTimer();
      timerActive.value = false;
      hours = 0;
      minutes = 0;
      seconds = 0;
    }

    props.task.timer = [hours, minutes, seconds].map(unit => unit.toString().padStart(2, '0')).join(':');
  }, 1000);
};

const stopTimer = () => {
  if (timerId.value !== null) {
    clearInterval(timerId.value);
    timerId.value = null;
    timerActive.value = false;
  }
};

watch(timerActive, (newVal) => {
  if (newVal) {
    startTimer();
  } else {
    stopTimer();
  }
});

interface TimeParts {
  hours: number;
  minutes: number;
  seconds: number;
}

const timeToSeconds = (time: string): number => {
  const [hours, minutes, seconds] = time.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
};

const secondsToHMS = (seconds: number): TimeParts => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return { hours: h, minutes: m, seconds: s };
};

const computeTimeDifference = (initialTimer: string, timer: string): TimeParts => {
  const initialSeconds = timeToSeconds(initialTimer);
  const currentSeconds = timeToSeconds(timer);
  const differenceInSeconds = initialSeconds - currentSeconds;
  return secondsToHMS(differenceInSeconds);
};

const timeSpent = computed((): string => {
  const { hours, minutes, seconds } = computeTimeDifference(props.task.initialTimer, props.task.timer);

  let timeString = '';
  if (hours > 0) {
    timeString += `${hours} час(ов) `;
  }
  if (minutes > 0 || hours > 0) {
    timeString += `${minutes} минут(ы) `;
  }
  timeString += `${seconds} секунд(ы)`;

  return timeString.trim();
});
</script>

<template>
  <v-sheet class="d-flex flex-column pa-4 card" rounded="lg">
    <div class="d-flex align-center justify-space-between mb-3">
      <h4 class="card-title text-primary font-weight-medium">{{ task.title }}</h4>
      <div class="card__icons d-flex">
        <div
            class="bg-secondary rounded-lg card-icon cursor-pointer"
            @click="tasks_from_store.deleteTask(task.id, task.completed)"
        >
          <v-icon color="delete" icon="mdi-delete" />
        </div>
        <div
            class="bg-secondary rounded-lg card-icon cursor-pointer"
            @click="tasks_from_store.toggleTaskCompleted(task.id)"
            v-if="!task.completed"
        >
          <v-icon color="complete" icon="mdi-check" />

        </div>
        <div
            class="bg-secondary rounded-lg card-icon cursor-pointer"
            v-if="!timerActive && !task.completed"
            @click="timerActive = !timerActive"
        >
          <v-icon color="play" icon="mdi-play" />
        </div>
        <div
            class="bg-secondary rounded-lg card-icon cursor-pointer"
            v-else-if="timerActive && !task.completed"
            @click="timerActive = !timerActive"
        >
          <v-icon color="stop" icon="mdi-pause" />
        </div>
        <div
            class="bg-secondary rounded-lg card-icon cursor-pointer"
            @click="tasks_from_store.refreshTask(task.id)"
            v-if="task.completed"
        >
          <v-icon color="refresh" icon="mdi-refresh" />
        </div>
      </div>
    </div>
    <div>
      <div v-if="task.completed">
        <p class="mb-1">Время, затраченное на задачу: </p>
        <p class="text-primary mb-1">{{ timeSpent }}</p>
      </div>
      <p class="mb-1">
        {{ task.timer }} <label for="" v-if="task.completed"> / {{ task.initialTimer }} </label>
      </p>
    </div>
  </v-sheet>
</template>

<style scoped lang="scss">
.card {
  &-title {
    max-width: 150px;
    word-break: break-word;
  }
  &__icons {
    column-gap: 8px;
  }
  &-icon {
    padding: 8px;
  }
}
</style>