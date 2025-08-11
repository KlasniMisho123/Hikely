import { Component, computed, Input, input } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  //  @Input({required: true}) avatar!: String; 
  //  @Input({required: true}) name!: String; 
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return this.avatar();
  }) 
    

  onSelectUser() {}
}
