import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  value = '';
  constructor(public router: Router,public formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      email:['',[Validators.email,Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]]
    })
   }
   
  onSubmit() {
    if(this.form.valid){
    localStorage.setItem("auth",JSON.stringify({status:true}));
    this.router.navigate(['']);
  }
  else{
    localStorage.setItem("auth",JSON.stringify({status:false}));
    this.router.navigate(['login']);
    }
  }

  ngOnInit(){

  }

}
