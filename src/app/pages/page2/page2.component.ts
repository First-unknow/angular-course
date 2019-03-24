import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(public router: Router) { }
  goHome() {
    this.router.navigate(['']);
  }
  goPages1() {
    this.router.navigate(['page1']);
  }

  ngOnInit() {
  }

}
