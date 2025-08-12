import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

type UserType = {
  name: string;
  id:string;
  avatar:string;
}

// interface UserType {
//   name: string;
//   id:string;
//   avatar:string;
// }

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class User {
  @Input({required: true}) user!: UserType;
  @Output() select = new EventEmitter();

  get imagePath() {
    return this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
