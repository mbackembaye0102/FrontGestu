import { AuthService } from './../service/auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { error } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public token:any;
  constructor(private auth:AuthService) {}
  user= new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })
  loggin(data){
    console.log(data);
    this.auth.loggin(data).subscribe(
      res=>{console.log(res);
         this.token=res.body
          this.auth.enregistrementToken(this.token.token)
      },
      error=>{
        console.log(error);
        
      }
    )
  }
}
