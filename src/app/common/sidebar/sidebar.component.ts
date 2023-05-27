import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() onNavigate = new EventEmitter<string>();
  constructor(private router: Router,private homeService:HomeService) { }

  ngOnInit(): void {
  }

  redirect(url:any){
    this.router.navigate([url]);
    this.onNavigate.emit();
    this.homeService.setSidenav('false')
  } 

}
