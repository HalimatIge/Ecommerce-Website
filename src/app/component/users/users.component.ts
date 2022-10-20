import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usas:any=[];
    constructor(private service:MyserviceService) { }

  ngOnInit(): void {
    this.usas=this.service.ec[1].users[0].profile
    console.log();

  }

  del(i:any){
    this.usas.splice(i,1)

      localStorage.setItem('cardTable', JSON.stringify(this.service.ec));

       }
}
