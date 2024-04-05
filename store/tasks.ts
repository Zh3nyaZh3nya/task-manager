import { defineStore } from 'pinia';
import type { ITask } from '~/types/card'

// @ts-ignore
export const useTasksStore = defineStore('tasks', {
    state: () => ({
        tasks: [] as ITask[],
        tasksCompleted: [] as ITask[],
    }),
    actions: {
        addTask(task: ITask): void {
            this.tasks.push(task);
        },
        deleteTask(taskId: number, isCompleteTask: boolean): void {
            if(isCompleteTask) {
                const taskIndex = this.tasksCompleted.findIndex(task => task.id === taskId);
                if (taskIndex !== -1) {
                    this.tasksCompleted.splice(taskIndex, 1);
                }
            } else {
                const taskIndex = this.tasks.findIndex(task => task.id === taskId);
                if (taskIndex !== -1) {
                    this.tasks.splice(taskIndex, 1);
                }
            }
        },
        toggleTaskCompleted(taskId: number | string): void {
            const taskIndex = this.tasks.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                const completedTask = { ...this.tasks[taskIndex], completed: true };
                this.tasks.splice(taskIndex, 1);
                this.tasksCompleted.push(completedTask);
            }
        },
    },
    persist: {
        enabled: true,
        paths: [
            'tasks',
            'tasksCompleted'
        ]
    }

});
