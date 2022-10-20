import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public service:MyserviceService ,private route:ActivatedRoute) { }
  name:any =''
  index:any=''
  ngOnInit(): void {
    this.index= Number(this.route.snapshot.paramMap.get('index'))
    this.name= this.service.ec[1].users[0].profile[this.index].name;
  }

}
