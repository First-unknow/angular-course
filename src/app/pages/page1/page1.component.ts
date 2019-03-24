import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(public router: Router) { }
  goHome() {
    this.router.navigate(['']);
  }
  goPages2() {
    this.router.navigate(['page2']);
  }

  ngOnInit() {
  }

}
