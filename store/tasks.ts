import { defineStore } from 'pinia';
import type { ITask } from '~/types/card'

// @ts-ignore
export const useTasksStore = defineStore('tasks', {
    state: () => ({
        tasks: [] as ITask[],
        tasks_completed: [] as ITask[],
        total_count_task: 0 as number,
        delete_count_task: 0 as number,
        complete_count_task: 0 as number
    }),
    actions: {
        addTask(task: ITask): void {
            this.total_count_task++
            this.tasks.push(task);
        },
        deleteTask(taskId: number, isCompleteTask: boolean): void {
            this.delete_count_task++
            if(isCompleteTask) {
                const taskIndex = this.tasks_completed.findIndex(task => task.id === taskId);
                if (taskIndex !== -1) {
                    this.tasks_completed.splice(taskIndex, 1);
                }
            } else {
                const taskIndex = this.tasks.findIndex(task => task.id === taskId);
                if (taskIndex !== -1) {
                    this.tasks.splice(taskIndex, 1);
                }
            }
        },
        toggleTaskCompleted(taskId: number | string): void {
            this.complete_count_task++
            const taskIndex = this.tasks.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                const completedTask = { ...this.tasks[taskIndex], completed: true };
                this.tasks.splice(taskIndex, 1);
                this.tasks_completed.push(completedTask);
            }
        },
        refreshTask(taskId: number | string): void {
            this.complete_count_task--
            const taskIndex = this.tasks_completed.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                const completedTask = {...this.tasks_completed[taskIndex], completed: false};
                this.tasks_completed.splice(taskIndex, 1);
                this.tasks.push(completedTask);
            }
        }
    },
    persist: {
        enabled: true,
        paths: [
            'tasks',
            'tasks_completed',
            'total_count_task',
            'delete_count_task',
            'complete_count_task'
        ]
    }

});
