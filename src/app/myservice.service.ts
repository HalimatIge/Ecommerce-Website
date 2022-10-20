import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {


  ec:any= [
    {
      admin:[
      {
        mybag:[],
        myCloth:[],
        myPerfume:[],
        myAccessories:[],
        myFootwear:[],
        myProfile:[],
        myusers:[],
       details:[
        {name: "Ige Halimat", phone: "08156550086", mail: "halimatyetundeige@gmail.com", password: "12345678" ,who:'Admin'}

      ]
     }

    ]
  },
  {
    users:[
      {
        profile:[],
        }
      ]
    },
  ]

 who:any=''
 guard=true






  // myPerfume:any=[];
  myAccessories:any=[];
  myFootwear:any=[];


// messageSource=new BehaviorSubject('First messsage');
// currentMessage=this.messageSource.asObservable()
//   constructor() { }

//   changeMessage(message:any){
//     this.messageSource.next(message)
//   }

}
