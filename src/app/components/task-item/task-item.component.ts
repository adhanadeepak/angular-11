import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Task} from '../../TASK'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task> = new EventEmitter();

  constructor() {
    this.task = {id: "", title: "",body: "", day: "", reminder: false}
   }

  ngOnInit(): void {
    
  }

  deleteTask(Task:Task):void{
    this.onDeleteTask.emit(Task);
  }

  toggleReminder(task:Task):void{
    this.onToggleReminder.emit(task);
  }


}
