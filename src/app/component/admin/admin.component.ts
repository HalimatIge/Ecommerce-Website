import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-admin',

  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public service:MyserviceService) { }

  ngOnInit(): void {
  }

 

  list:any=[];


// changes(){
//   this.service.changeMessage('tyukhlj')
// }
}
