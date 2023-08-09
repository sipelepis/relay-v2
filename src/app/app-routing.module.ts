import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarWrapperComponent } from './navbar-wrapper/navbar-wrapper.component';
import { FooterComponent } from './footer/footer.component';
import { RootComponent } from './root/root.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthNavMenuComponent } from './auth-nav-menu/auth-nav-menu.component';
import { LogInCarRentalComponent } from './log-in-car-rental/log-in-car-rental.component';
import { RegisterCarRentalComponent } from './register-car-rental/register-car-rental.component';
import { LoginRegisterFormComponent } from './login-register-form/login-register-form.component';
import { ChoosepageComponent } from './choosepage/choosepage.component';
import { RegisterFoodDeliveryComponent } from './register-food-delivery/register-food-delivery.component';
import { LoginFoodDeliveryComponent } from './login-food-delivery/login-food-delivery.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FAQsComponent } from './faqs/faqs.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [
  { path: 'home', component: NavbarWrapperComponent },
  { path: 'choose', component: ChoosepageComponent },
  { path: 'registerCarRental', component: RegisterCarRentalComponent },
  { path: 'loginCarRental', component: LogInCarRentalComponent },
  { path: 'registerFoodDelivery', component: RegisterFoodDeliveryComponent },
  { path: 'loginFoodDelivery', component: LoginFoodDeliveryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'FAQs', component: FAQsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: '', redirectTo:"home", pathMatch:"full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
