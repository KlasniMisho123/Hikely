import { NgModule } from "@angular/core";
import { TaskComponent } from "./task-component/task-component";
import { Task } from "./task";
import { NewTask } from "./new-task/new-task";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TaskComponent, Task, NewTask],
    exports: [Task],
    imports: [SharedModule, CommonModule, FormsModule],
})
export class TasksModule {}