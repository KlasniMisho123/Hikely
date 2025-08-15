import { Component, Input } from '@angular/core';
import { TaskComponent } from './task-component/task-component';
import { NewTask } from './new-task/new-task';
import { type NewTaskData } from './task-component/task-component.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  imports: [TaskComponent, NewTask],
  templateUrl: './task.html',
  styleUrl: './task.css'
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
