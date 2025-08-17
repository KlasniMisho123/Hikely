import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { UserType } from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
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
