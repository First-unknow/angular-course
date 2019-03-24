import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username:String;
  password:String;
  show:String;
  variable1 = "item 1";
  title = 'app';

  form: FormGroup;

  constructor(public formBuilder :FormBuilder){
    this.form = this.formBuilder.group({
      email: ['',[Validators.email]],
      password: ['',[Validators.minLength(6)]]
    });
  }

  onClick(){
    this.variable1="clicked!";
  }

  onSubmit(){
    console.log(this.form.value);
  }

  resetForm(event:Event, form){
    event.preventDefault();
    // console.log(form);
    form.resetFrom();
  }
}
