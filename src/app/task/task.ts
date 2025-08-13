import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from './task-component/task-component';
@Component({
  selector: 'app-task',
  imports: [TaskComponent],
  templateUrl: './task.html',
  styleUrl: './task.css'
})

export class Task {
  @Input() name?: string;
}
