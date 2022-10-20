import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
i:any;
  constructor( public service: MyserviceService,  private route:ActivatedRoute) { }
put:any=1
sub= ''
  ngOnInit(): void {
    this.i = this.route.snapshot.paramMap.get('index')
    this.cartting=this.service.ec[1].users[0].profile[this.i].cart;
    this.grandTot();

    // this.put= this.cartting[0].numberx
    // console.log( this.cartting[i].subtotal );
    // console.log( this.cartting[i].amount);
    // console.log( this.cartting[i].number);
  }
list:any=[];
grand=0;
  cartting:any=[]
trash(i:any){
this.cartting.splice(i,1);
this.grandTot();
localStorage.setItem('cardTable', JSON.stringify(this.service.ec))
}
  filedata:any;
  image:any;
// goods:any=1;
  fileEvent(e:any){
 this.filedata=e.target.files[0];
 let reader=new FileReader();
 reader.readAsDataURL(this.filedata);
 setTimeout(() => {
this.image=reader.result;
 }, 2000);

  }

check:any=[]

    grandTot(){
      for (let index = 0; index < this.cartting.length; index++) {
          // this.grand=Number(this.cartting[index].subtotal);
          console.log(this.cartting[index].subtotal);

        this.check.push(Number(this.cartting[index].subtotal))
      console.log(this.check);


      this.grand = this.check.reduce((acc:any,red:any)=>{
        return acc+ red
          })

      }
      console.log(this.check);
      this.check=[]

    }


  plus(i:any){
    let b=this.cartting[i].no = this.cartting[i].no+1 ;
    console.log(b);

    this.cartting[i].subtotal=(this.cartting[i].amount*b)
  //  this.cartting[i].no= this.cartting[i].no+1
this.grandTot()

    // localStorage.setItem('cardTable', JSON.stringify(this.service.ec))

  }
  minus(i:any){
    if ((this.cartting[i].no)>1) {
      let b=this.cartting[i].no--;
      this.cartting[i].subtotal=(this.cartting[i].amount*b)-(this.cartting[i].amount)
      console.log( this.cartting[i].subtotal);

    this.grandTot();
      // localStorage.setItem('cardTable', JSON.stringify(this.service.ec))
    }

  }


}
   //application programming interphase- use can use another app on your own app- intermediary btw your app and another --API
//     function loading(params) {
//         load.classList.toggle('d-none')
//         let p=new Promise ((resolve, reject)=>{

//             setTimeout(() => {
//            return reject(new Error ('something went wrong'))
//         }, 5000);
//         })
//         let b=p.then (function (res) {
//          console.log(res); },
//         ).catch(function (er) {
//           console.log(er);
//         }).finally (()=> load.classList.toggle('d-none'))

//     }


//     fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => console.log(json))
