import { NgModule } from "@angular/core";
import { App } from "./app"; 
import { HeaderComponent } from "./header/header";
import { User } from "./user/user";
import { TaskComponent } from "./task/task-component/task-component";

@NgModule({
    declarations: [App],
    bootstrap: [App],
    imports: [HeaderComponent, User, TaskComponent],
})

export class AppModule {

}