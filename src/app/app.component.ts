import { Component, OnInit} from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project';

  constructor(public serv:MyserviceService) { }

  ngOnInit(): void {
   if (localStorage.getItem('cardTable')) {
    let a:any=localStorage.getItem('cardTable');
    this.serv.ec=JSON.parse(a);
   }
   else{
    this.serv.ec=this.serv.ec
   }
  }
}
