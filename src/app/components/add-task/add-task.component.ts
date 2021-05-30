import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Task} from '../../TASK';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  title: string = "";
  body: string = ""; 
  day: string = "";
  reminder: boolean = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(v => this.showAddTask = v);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(!this.title){
          alert('Please add task');
          return;
    }
    
    const newTask = {
      title:this.title,
      day:this.day,
      body:this.body,
      reminder: this.reminder
    }
  
      this.title = '';
      this.day = '';
      this.body = ""
      this.reminder = false;
      
      this.onAddTask.emit(newTask);
  }

}
  
