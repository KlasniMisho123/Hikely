import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) avatar!: string; 
  @Input({required: true}) name!: string; 
  @Input({required: true}) id !: string;
  @Output() select = new EventEmitter();

  get imagePath() {
    return this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
