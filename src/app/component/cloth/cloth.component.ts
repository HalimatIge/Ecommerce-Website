import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';


@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.scss']
})
export class ClothComponent implements OnInit {
name=''
user=false;
admin=false;
femalelist:any=[];
malelist:any=[];
coperate:any=[]
casualF:any=[];
casualM:any=[];
gown:any=[];
topsF:any=[];
trouserF:any=[];
skirt:any=[];
shirt:any=[];
deminF:any=[];
deminM:any=[];
pantF:any=[];
pantM:any=[];
dinnergown:any=[];


list:any=[];
cartting:any=[];
wish:any=[]
message=''
message1=''
message2=''

ladies=false;
  index:any;

  constructor(public dialog: MatDialog, public service:MyserviceService,  private route:ActivatedRoute) { }
seen=false;
wishpush=false;
  ngOnInit(): void {
    this.index=this.route.snapshot.paramMap.get('index')

    this.wish= this.service.ec[1].users[0].profile[this.index].wish;
    this.cartting= this.service.ec[1].users[0].profile[0].cart;

  setTimeout(() => {
   this.list=this.service.ec[0].admin[0].myCloth;


  for (let index = 0; index < this.list.length; index++) {
      if (this.list[index].cate=='female') {
        this.femalelist.push(this.list[index]);

        for (let i = 0; i < this.femalelist.length; i++) {
if (i==this.femalelist.length-1 && this.femalelist[i].clothType=='dinner') {
  this.dinnergown.push(this.femalelist[i]);

   this.seen=true;
   setTimeout(() => {
this.seen=false
   }, 1000);
}
else if (i==this.femalelist.length-1 && this.femalelist[i].clothType=='casual') {
  this.casualF.push(this.femalelist[i]);

}
else if (i==this.femalelist.length-1 && this.femalelist[i].clothType=='tops') {
  this.topsF.push(this.femalelist[i]);
}
else if (i==this.femalelist.length-1 && this.femalelist[i].clothType=='fpant') {
  this.pantF.push(this.femalelist[i]);
}
else if (i==this.femalelist.length-1 && this.femalelist[i].clothType=='skirt') {
  this.skirt.push(this.femalelist[i]);
}
else if (i==this.femalelist.length-1 && this.femalelist[i].clothType=='demin') {
  this.deminF.push(this.femalelist[i]);
}
        }

}
      else if (this.list[index].cate=='male') {
     this.malelist.push(this.list[index]);



     for (let j = 0; j < this.malelist.length; j++) {
      if (j==this.malelist.length-1 && this.malelist[j].clothType=='coperate') {
        this.coperate.push(this.malelist[j]);
        this.seen=true;
        setTimeout(() => {
     this.seen=false
        }, 1000);


      }
      else if(j==this.malelist.length-1 && this.malelist[j].clothType=='casual'){
        this.casualM.push(this.malelist[j]);
      }
      else if(j==this.malelist.length-1 && this.malelist[j].clothType=='shirt'){
        this.shirt.push(this.malelist[j]);
      }
      else if(j==this.malelist.length-1 && this.malelist[j].clothType=='pant'){
        this.pantM.push(this.malelist[j]);
      }
      else if(j==this.malelist.length-1 && this.malelist[j].clothType=='demin'){
        this.deminM.push(this.malelist[j]);
      }
     }
   }
  //  this.list[index].name=='Men'?this.malelist.push(this.list[index]:
  }
    }, 500);

  }



  chang(i:any){
    alert(this.wish)

  if (this.list[i].done) {
    this.list[i].done=false
    this.wish.splice(i,1)

    localStorage.setItem('cardTable', JSON.stringify(this.service.ec));

  }
  else{
    this.list[i].done=true;
    this.wish.push(this.list[i])

   localStorage.setItem('cardTable', JSON.stringify(this.service.ec));
  }
    }

    cart(i:any){
alert(this.cartting)
this.cartting.push(this.list[i])
localStorage.setItem('cardTable', JSON.stringify(this.service.ec));
    }

    dele(i:any){
      this.list.splice(i,1)
      if(this.message=='Cloth'){
        this.service.ec[0].admin[0].myCloth=this.list;
      }

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


    }

}
