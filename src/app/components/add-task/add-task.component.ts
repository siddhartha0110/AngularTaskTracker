import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text:String;
  day:String;
  reminder:boolean=false;
   showAddTask:boolean=false;
  subscription:Subscription;

  @Output() onAddTask:EventEmitter<Task>= new EventEmitter();

  constructor(private uiService:UiService) {
    this.subscription=this.uiService.onToggle().subscribe(val=>this.showAddTask=val);
   }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text){
      alert("Task cannot be empty");
      return; 
    }
    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text="";
    this.day="";
    this.reminder=false;

  }

}
