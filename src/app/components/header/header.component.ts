import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:String = 'Task Tracker';
  showAddTask:boolean=false;
  subscription:Subscription;


  constructor( private uiService:UiService, private router:Router ) { 
    this.subscription=this.uiService.onToggle().subscribe(val=>this.showAddTask=val);
  }

  ngOnInit(): void {
  }
  toggleAddTask(){
    this.uiService.toggleAddTask();
    
  }

  hasRoute(route:String):boolean{
    return this.router.url===route;
  }
}
