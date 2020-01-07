import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NevigationComponent } from './nevigation/nevigation.component';
import { SocialComponent } from './social/social.component';
import { ConfigService } from './config.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { RouteGaurdService } from './route-gaurd.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {UserDashbordModule} from './user-dashbord/user-dashbord.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ServicesModule } from './services/services.module';
import { GalleryModule } from './gallery/gallery.module';
import { NotFoundModule } from './not-found/not-found.module';
import { ClientModule } from './client/client.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { PricingModule } from './pricing/pricing.module';
import { BlogModule } from './blog/blog.module';
import { ApiCallService } from './api-call.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NevigationComponent,
    SocialComponent,
    SignUpComponent,
    LogInComponent,
    ContactUsComponent,
    NavMenuComponent,
    SubscribeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserDashbordModule,
    HomeModule,
    AboutModule,
    ServicesModule,
    GalleryModule,
    NotFoundModule,
    ClientModule,
    TestimonialsModule,
    PricingModule,
    BlogModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation:false,passThruUnknownUrl: true}
    )
    
  ],
  providers: [ConfigService,RouteGaurdService,ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
