import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarWrapperComponent } from './navbar-wrapper/navbar-wrapper.component';
import { FooterComponent } from './footer/footer.component';
import { RootComponent } from './root/root.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthNavMenuComponent } from './auth-nav-menu/auth-nav-menu.component';
import { LogInCarRentalComponent } from './log-in-car-rental/log-in-car-rental.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RegisterCarRentalComponent } from './register-car-rental/register-car-rental.component';
import { LoginRegisterFormComponent } from './login-register-form/login-register-form.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home/home1/home1.component';
import { Home2Component } from './home/home2/home2.component';
import { ChoosepageComponent } from './choosepage/choosepage.component';
import { RegisterFoodDeliveryComponent } from './register-food-delivery/register-food-delivery.component';
import { LoginFoodDeliveryComponent } from './login-food-delivery/login-food-delivery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsHomeFormComponent } from './contact-us/contact-us-home-form/contact-us-home-form.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FAQsComponent } from './faqs/faqs.component';
import { BlogComponent } from './blog/blog.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    NavbarWrapperComponent,
    FooterComponent,
    RootComponent,
    AuthNavMenuComponent,
    LogInCarRentalComponent,
    RegisterCarRentalComponent,
    LoginRegisterFormComponent,
    HomeComponent,
    Home1Component,
    Home2Component,
    ChoosepageComponent,
    RegisterFoodDeliveryComponent,
    LoginFoodDeliveryComponent,
    ContactUsComponent,
    ContactUsHomeFormComponent,
    AboutComponent,
    ServicesComponent,
    FAQsComponent,
    BlogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    AppRoutingModule,CarouselModule,
// MDBBootstrapModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
