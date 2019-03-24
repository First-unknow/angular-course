import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

import { Service1Service } from '../../providers/service1.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users:any;
  
  constructor(public router:Router,public service:Service1Service) {
    this.service.loaduser().then(data=>{
      this.users =data;
    }).catch(err =>{
      console.log(err);
    });
  }

  goPages1(){
    this.router.navigate(['page1']);
  }
  goPages2(){
    this.router.navigate(['page2']);
  }

  ngOnInit() {
  }

}
