import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private route: Router, private serv: MyserviceService) { }
 formData=this.fb.group({
  email:['',[Validators.required, Validators.email]],
  password:['',[Validators.required, Validators.pattern('^[A-Za-z0-9]{8,16}$')]]
 })
// list:any=[]
 type=''
 setIndex =''
 incorrect=false;

 submitted=false;
  ngOnInit(): void {
  }
  get email(){
    return this.formData.get('email')
   }

   get password(){
    return this.formData.get('password')
   }

  submit(){
    this.submitted= true
    let { email , password} = this.formData.value

    let finding;

    if (this.email && this.password) {

      finding=(this.serv.ec[1].users[0].profile).find((ele:any , i:any) =>{
        this.setIndex = i
        return ele.mail==email && ele.password==password && ele.who =='User';

      });

      if (finding) {

        this.serv.guard = true
        this.serv.who = 'User'
            setTimeout(() => {
              this.submitted=false;
               this.route.navigate(['dash', this.setIndex ])
              }, 500);

        } else{
          let adm
            setTimeout(() => {
              adm=(this.serv.ec[0].admin[0].details).find((ele:any) =>{
                return ele.mail==email && ele.password==password && ele.who =='Admin';

              });
              if (adm) {
                this.serv.guard = true;
                this.serv.who="Admin"
                setTimeout(() => {
                  this.submitted=false;
                   this.route.navigate(['/'])
                  }, 500);
              }else{
         this.incorrect=true
                setTimeout(() => {
                  this.submitted= false
                  this.incorrect=false;
                  }, 2000);
              }
            }, 500);
        };

    };





  }

  change(){
this.type=='password'?this.type='text':this.type='password'
  }

}
