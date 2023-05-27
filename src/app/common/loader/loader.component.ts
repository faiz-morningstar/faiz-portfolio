import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  isloading:boolean = false;
  eyeLoading:boolean = false;


  constructor(private homeSerivce:HomeService) {
   }

  ngOnInit(): void {
    this.homeSerivce.loadingState.subscribe(loading => loading ? this.load() : this.unload())
  }

  load(){
    this.isloading = true
    setTimeout(() => {
      this.eyeLoading = true
    }, 700);
  }

  unload(){
    this.isloading = false
    this.eyeLoading = false
  }
 

}
