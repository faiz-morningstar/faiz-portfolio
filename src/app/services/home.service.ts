import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  public $sidenav = new Subject<string>();

  private loadingStatus = new BehaviorSubject(false);
  loadingState = this.loadingStatus.asObservable();

  constructor() { }

  changeLoading(message:any) {
    this.loadingStatus.next(message)
  }

  setSidenav(data:string){
    this.$sidenav.next(data);
  }
  
}
