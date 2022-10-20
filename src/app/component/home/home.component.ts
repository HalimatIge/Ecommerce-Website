import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
guard:any=''
  constructor(public serv:MyserviceService) { }

  ngOnInit(): void {
    this.guard = this.serv.guard
  }

}
