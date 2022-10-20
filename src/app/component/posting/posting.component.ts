import { Component, OnInit,  OnDestroy } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.scss']
})
export class PostingComponent implements OnInit {

messages='Initial message';
  constructor(public service:MyserviceService) { }
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }
  message2=''


  ngOnInit(): void {


    // this.service.currentMessage.subscribe((message)=>{
    //   if (message) {
    //       this.messages=message
    //       console.log(this.messages );

    //   }
    // }
  }

  message=''
  message1=''
  select=''
  selectAgain=''

  list:any=[];

  post(){
    if (this.image=='' && this.message1=='' && this.message2=='') {
      return;
     }
     else{
      this.list.unshift(
        {name:this.message1,amount:this.message2, done:false, img:this.image, category:this.message, no:1, subtotal:this.message2, clothType:this.selectAgain, cate:this.select}
        )

      if (this.message=='Bag') {
        this.service.ec[0].admin[0].mybag.push(
          {name:this.message1,amount:this.message2, done:false, img:this.image, category:this.message, no:1, subtotal:this.message2, clothType:this.selectAgain, cate:this.select}
        );
        alert('bag')
      }else if(this.message=='Perfume'){
        this.service.ec[0].admin[0].myPerfume.unshift(
          {name:this.message1,amount:this.message2, done:false, img:this.image, category:this.message, no:1, subtotal:this.message2,clothType:this.selectAgain, cate:this.select}
        );
        alert('perfume')
      }
      else if(this.message=='Cloth'){
       console.log( this.service.ec);
        this.service.ec[0].admin[0].myCloth.unshift(
          {name:this.message1,amount:this.message2, done:false, img:this.image, category:this.message, no:1, subtotal:this.message2,clothType:this.selectAgain, cate:this.select}
        );
        alert('cloth')
      }
      else if(this.message=='Accessories'){
        this.service.ec[0].admin[0].myAccessories.unshift(
          {name:this.message1,amount:this.message2, done:false, img:this.image, category:this.message,no:1,subtotal:this.message2, clothType:this.selectAgain, cate:this.select}
        )
        alert('access')
      }
      else if(this.message=='Footwear'){
        this.service.ec[0].admin[0].myFootwear.unshift(
          {name:this.message1,amount:this.message2, done:false, img:this.image, category:this.message, no:1, subtotal:this.message2, clothType:this.selectAgain, cate:this.select}
        )
        alert('foot')
      }
      else{

        alert('select a category')
      }
        console.log(this.service.ec);
      localStorage.setItem('cardTable', JSON.stringify(this.service.ec));
    }
  }

  chang(i:any){
    this.list[i].done? this.list[i].done=false: this.list[i].done=true;
    if (this.message=='Bag') {
      this.service.ec[0].admin[0].myBag=this.list;
    }else if(this.message=='Perfume'){
      this.service.ec[0].admin[0].myPerfume=this.list;
    }
    else if(this.message=='Cloth'){
      this.service.ec[0].admin[0].myCloth=this.list;
    }
    else if(this.message=='Accessories'){
      this.service.ec[0].admin[0].myCloth=this.list;
    }
    else if(this.message=='Footwear'){
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

    // ngOnDestroy(){
    //   this.service.messageSource.unsubscribe()
    // }

}


