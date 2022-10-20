import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-navhome',
  templateUrl: './navhome.component.html',
  styleUrls: ['./navhome.component.scss']
})
export class NavhomeComponent implements OnInit {

  constructor(public service: MyserviceService, private route:ActivatedRoute) { }
  status= ''
  guard:any=''
  ngOnInit(): void {
    this.guard = this.service.guard
    this.status = this.service.ec[0].admin[0].details[0].status
  }

  search(){

  }

  press=false;

  show(){
    this.press?this.press=false:this.press=true;
  }
  chil(){
    if (this.status =='admin') {
      alert('admin link')
    } else{
      alert('userlink ')
    }
  }
  check(){

  }

}
