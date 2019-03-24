import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component'
import { Page3Component } from './pages/page3/page3.component'
import { Subpage1Component } from './pages/page1/subpage1/subpage1.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guard/auth.guard'
import { NotfoundComponent } from './pages/notfound/notfound.component';

import { RouterModule, Routes} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { Service1Service } from './providers/service1.service';
import { ButtonTestComponent } from './components/button-test/button-test.component';

const routes:Routes = [
  { path: '',component:HomeComponent,pathMatch:'full',canActivate:[AuthGuard]},
  { path: 'page1', component: Page1Component, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'page1/subpage1', component: Subpage1Component, canActivate: [AuthGuard]},
  { path: 'page2', component: Page2Component, canActivate: [AuthGuard]},
  { path: 'page3/:id', component: Page3Component, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'lazyload', loadChildren:'./pages/lazyload/lazyload.module#LazyloadModule'},
  { path: '**', component: NotfoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Subpage1Component,
    NotfoundComponent,
    LoginComponent,
    ButtonTestComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Service1Service, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
