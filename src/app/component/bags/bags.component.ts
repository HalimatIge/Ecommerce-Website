import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.scss']
})
export class BagsComponent implements OnInit {

  constructor( public service:MyserviceService,  private route:ActivatedRoute) { }
  message=''

  // bags:any=[];
  baglist:any=[];
  list:any=[];
  index:any;
  cartting:any=[];
wish:any=[]

  ngOnInit(): void {
    console.log(this.baglist);

    this.index=this.route.snapshot.paramMap.get('index')
    this.wish= this.service.ec[1].users[0].profile[this.index].wish;
    this.cartting= this.service.ec[1].users[0].profile[this.index].cart;
    setTimeout(() => {
      this.list=this.service.ec[0].admin[0].mybag;

      for (let index = 0; index < this.list.length; index++) {
        this.baglist.push(this.list[index]);
      }
    }, 100);

  }


    dele(i:any){
      this.baglist.splice(i,1)
      localStorage.setItem('cardTable', JSON.stringify(this.service.ec));
    }

    cart(i:any){
      // alert(this.cartting)
      this.cartting.push(this.list[i])
      localStorage.setItem('cardTable', JSON.stringify(this.service.ec));
      }

    edit(i:any){

      if(this.message=='Cloth'){
        this.service.ec[0].admin[0].myCloth=this.list;
      }
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
