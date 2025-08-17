import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { App } from "./app"; 
import { HeaderComponent } from "./header/header";
import { User } from "./user/user";
import { TaskComponent } from "./task/task-component/task-component";

@NgModule({
    declarations: [App, HeaderComponent, User, TaskComponent],
    bootstrap: [App],
    imports: []
})

export class AppModule {

}