import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  skills:any = [
    {
      id:0,
      name:"HTML",
      color:"",
      position:{x: 0, y: 0}
    },
    {
      id:1,
      name:"CSS",
      color:"",
      position:{x: 0, y: 0}
    },
    {
      id:2,
      name:"JavaScript/TypeScript",
      color:"",
      position:{x: 100, y: 0}
    },
    {
      id:3,
      name:"Bootstrap",
      color:"",
      position:{x: 0, y: 0}
    },
    {
      id:4,
      name:"Material UI",
      color:"",
      position:{x: 250, y:0}
    },
    {
      id:5,
      name:"Angular",
      color:"",
      position:{x: 0, y: 0}
    },
    {
      id:6,
      name:"ReactJS",
      color:"",
      position:{x: 0, y: 0}
    },
    {
      id:7,
      name:"SOAP API",
      color:"",
      position:{x: 0, y: 0}
    },
    {
      id:8,
      name:"NodeJS",
      color:"",
      position:{x: 0, y: 0}
    },
    {
      id:9,
      name:"MongoDB",
      color:"",
      position:{x: 0, y: 0}
    },
    {
      id:10,
      name:"MySQL",
      color:"",
      position:{x: 0, y: 0}
    },
  ]


  colors:any = [
    "#4527a0", 
    "#689f38",
    "#546e7a",
    "#ef6c00",
    "#00695c",
    "#2E2E2E",
    "#3f51b5",
    "#0277bd",
    "#4e342e",
    "#ff4444",
    "#0A400C",
  ]

  constructor(private homeSerivce:HomeService) { 

   }

  ngOnInit(): void {

    this.shuffleArray(this.colors)
    for(let i =0; i<this.skills.length;i++){
      this.skills[i].color = this.colors[i]
      this.skills[i].position.x = Math.floor(Math.random() * (220 - 1 + 1) + 1)
    }

  }

  shuffleArray(array:any) {
    var m = array.length, t, i;
 
    while (m) {    
     i = Math.floor(Math.random() * m--);
     t = array[m];
     array[m] = array[i];
     array[i] = t;
    }
 
   return array;
 }

  // getRandomColor() {
  //   var letters = '0123456789ABCDEF';
  //   var color = '#';
  //   for (var i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color
  // }

}
