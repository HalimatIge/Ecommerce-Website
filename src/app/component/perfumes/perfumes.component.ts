import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-perfumes',
  templateUrl: './perfumes.component.html',
  styleUrls: ['./perfumes.component.scss']
})
export class PerfumesComponent implements OnInit {

  constructor(public service:MyserviceService,  private route:ActivatedRoute) { }
  message=''


  perfumelist:any=[];
  list:any=[];
  index:any;
  cartting:any=[];
wish:any=[]

  ngOnInit(): void {
    this.index=this.route.snapshot.paramMap.get('index')
    this.wish= this.service.ec[1].users[0].profile[this.index].wish;
    this.cartting= this.service.ec[1].users[0].profile[0].cart;
    setTimeout(() => {
      this.list=this.service.ec[0].admin[0].myPerfume;

      for (let index = 0; index < this.list.length; index++) {
        this.perfumelist.push(this.list[index]);
      }
    }, 100);
  }
  dele(i:any){
    this.perfumelist.splice(i,1)
    localStorage.setItem('cardTable', JSON.stringify(this.service.ec));
  }

  cart(i:any){
    alert(this.cartting)
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
