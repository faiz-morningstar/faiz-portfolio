import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { HomeService } from './services/home.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  isOpen = false;
  @ViewChild('drawer') public drawer!: MatDrawer;

  constructor(private homeSerivce:HomeService,private router: Router){}

  
  toggleSidebar(drawer:any){
    this.isOpen = !this.isOpen
    drawer.toggle()
  }
  

  
  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if(this.router.url !== "/" && val){
        this.homeSerivce.changeLoading(true); 
        setTimeout(() => {
          this.homeSerivce.changeLoading(false); 
        }, 1700);
      }
    });



  }


}
