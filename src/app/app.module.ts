import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { App } from "./app"; 
import { HeaderComponent } from "./header/header";
import { User } from "./user/user";
import { TaskComponent } from "./task/task-component/task-component";
import { Card } from "./shared/card/card";

@NgModule({
    declarations: [App, HeaderComponent, User, Card ,TaskComponent],
    bootstrap: [App],
    imports: []
})

export class AppModule {

}