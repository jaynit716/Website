import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGaurdService } from './route-gaurd.service';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserDashbordModule } from './user-dashbord/user-dashbord.module';
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


const routes: Routes = [
  {path:'', redirectTo:'/Home', pathMatch:'full'},
  {path:'Home',loadChildren:()=>HomeModule},
  {path:'About',loadChildren:()=>AboutModule},
  {path:'LogIn',component:LogInComponent},
  {path:'SignUp',component:SignUpComponent},
  {path:'ContactUs',component:ContactUsComponent,outlet:'popup'},
  {path:'Gallery',loadChildren:()=>GalleryModule},
  {path:'Services',loadChildren:()=>ServicesModule},
  {path:'Testimonials',loadChildren:()=>TestimonialsModule},
  {path:'Clients',loadChildren:()=>ClientModule},
  {path:'Pricing',loadChildren:()=>PricingModule},
  {path:'Subscribe',component:SubscribeComponent,outlet:'popup'},
  {path:'Dashbord',loadChildren:()=>UserDashbordModule,canActivate:[RouteGaurdService]},
  {path:'Blog',loadChildren:()=>BlogModule},
  {path:'**', redirectTo:'/404', pathMatch:'full'},
  {path:'404',loadChildren:()=>NotFoundModule}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
