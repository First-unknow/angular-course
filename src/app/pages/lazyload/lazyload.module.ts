import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadComponent } from './lazyload.component';
import { RouterModule,Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';

const routes:Routes = [ 
  { 
    path: '', component:LazyloadComponent,
    children:[
      { path:'',component:HomeComponent },
      { path: 'page1',component:Page1Component }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyloadComponent,HomeComponent,Page1Component]
})
export class LazyloadModule { }
