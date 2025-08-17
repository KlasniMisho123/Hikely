import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  standalone: false,
})
export class NewTask {
  @Input({required: true}) userId!:string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private taskService = inject(TaskService)

  onCloseTask() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);
    this.close.emit();
  }
}
