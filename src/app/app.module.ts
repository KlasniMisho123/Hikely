import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { App } from "./app"; 
import { HeaderComponent } from "./header/header";
import { User } from "./user/user";
import { TaskComponent } from "./task/task-component/task-component";
import { Card } from "./shared/card/card";
import { DatePipe } from "@angular/common";
import { Task } from "./task/task";
import { NewTask } from "./task/new-task/new-task";

@NgModule({
    declarations: [
        App,
        HeaderComponent,
        User,
        Card,
        TaskComponent,
        DatePipe,
        Task,
        NewTask,
    ],
    bootstrap: [App],
})

export class AppModule {

}