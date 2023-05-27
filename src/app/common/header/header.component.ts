import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {

  @Output() slideNav = new EventEmitter<string>();
  toggler:string = 'false'
  menuHover:boolean = false
  @Input() item = '';
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
		this.homeService.$sidenav.subscribe(data =>   {
        this.toggler = data
		});
		
  }

  ngOnChanges(changes: SimpleChanges) {
		//changes.prop contains the old and the new value...
	}

  toggleSidenav(){
    this.toggler = (this.toggler == 'true') ? 'false' : 'true';
    this.slideNav.emit()
		this.homeService.setSidenav(this.toggler);
  }



  // $('.bar, nav').hover(
	// 	function() {
        // to show nav
	// 		$('nav').addClass('hovered');

        // to blur background
	// 		$('.page').addClass('filter');

        // animate menu icon
	// 		$('.bar').addClass('b-open');
	// 	},
	// 	function() {
        // to hide nav
	// 		$('nav').removeClass('hovered');

        // to unblur background
	// 		$('.page').removeClass('filter');

        // animate menu icon
	// 		$('.bar').removeClass('b-open');
	// 	}
	// );



}
