import { Component, OnInit } from '@angular/core';
import {Task} from '../../TASK';
import {TaskService} from '../../services/task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  tasks: Task[]  = [];
  

  constructor(private TaskService: TaskService) {

   }

  ngOnInit(): void {
    this.TaskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(Task:Task):void{
    this.TaskService.deleteTask(Task).subscribe(() => this.tasks= this.tasks.filter(t => t.id !== Task.id));
  }

  addTask(task:any):void{
    console.log('task:',task);
    this.TaskService.addTask(task).subscribe(task => this.tasks.push(task));
  }

  toggleReminder(task:Task):void{
    console.log('toggleReminder');
    task.reminder = !task.reminder;
    this.TaskService.toggleReminder(task).subscribe()
  }

}
