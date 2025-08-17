import { Component, Input } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  standalone: false,
})

export class Task {
  @Input({required:true}) userId!: string;
  @Input({required:true}) name!: string;
  isAddingTask = false;

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseTask() {
    this.isAddingTask = false;
  }

}
