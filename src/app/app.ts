import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header";
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Task } from "./task/task";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hikely');
  users = DUMMY_USERS

  onSelectUser(id:string ) {
    console.log('Selected user ID:', id);
  }
}
