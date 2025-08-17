import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task-component.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-component',
  imports: [Card, DatePipe],
  templateUrl: './task-component.html',
  styleUrl: './task-component.css',
  standalone: false,
})
export class TaskComponent {
  @Input({required: true}) task!:Task;
  private taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id)
  }

}
