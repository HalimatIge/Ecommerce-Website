import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
i: any;

  constructor(public service:MyserviceService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.i = this.route.snapshot.paramMap.get('index')
    this.wish= this.service.ec[1].users[0].profile[this.i].wish;
    console.log(this.wish);
  }
 wish:any=[];
 list:any=[];

 chang(i:any){
  this.list[i].done? this.list[i].done=false : this.list[i].done=true ;

  // this.list[i].done? ((this.list[i].done=false), this.cart[i].splice(i,1) ): this.list[i].done=true , this.cart[i].push();
  }




  filedata:any;
  image:any;

  fileEvent(e:any){
 this.filedata=e.target.files[0];
 let reader=new FileReader();
 reader.readAsDataURL(this.filedata);
 setTimeout(() => {
this.image=reader.result;
 }, 2000);
 console.log(e);

  }

}
