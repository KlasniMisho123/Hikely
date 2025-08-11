import { Component, Input,  } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
   @Input() avatar!: String; 
   @Input() name!: String; 

  get imagePath() {
    return this.avatar;
  }

  onSelectUser() {}
}
