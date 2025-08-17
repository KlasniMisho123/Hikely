import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { UserType } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone: false,
})

export class User {
  @Input({required: true}) user!: UserType;
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
