import { Component, Input } from '@angular/core';
import { Task } from './task-component.model';

@Component({
  selector: 'app-task-component',
  imports: [],
  templateUrl: './task-component.html',
  styleUrl: './task-component.css'
})
export class TaskComponent {
  @Input({required: true}) task!:Task;
}
