import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import {ServicesComponent} from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ModalLogoutComponent } from './modal-logout/modal-logout.component';
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
// MDB Angular Free
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {  AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ModalLogoutComponent,
    LoginComponent,
 
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    MatButtonModule,
    MatDialogModule ,
    BrowserAnimationsModule,
    CarouselModule,
    Ng2CarouselamosModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    HttpClientModule,
  

 
    RouterModule.forRoot([
      {
        path: 'login',
        component:LoginComponent
      },
      {
        path:'home',
        component: HomeComponent,
        // canActivate:[AuthGuard]
      },
      {
        path:'about',
        component: AboutComponent
      },
      {
        path:'services',
        component:ServicesComponent
      },
      {
        path:'contact',
        component:ContactComponent
      }

    ])
    
  ],
  providers: [ AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
