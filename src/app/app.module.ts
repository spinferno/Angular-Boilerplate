// all angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import 'hammerjs';

// all app modules
import { MaterialModule, CrudModule } from './_modules/index';
import { routing } from './app-routing.module';

// all guards
import { AuthGuard } from './_guards/auth.guard';

// all intercepters
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

// all services
import { AuthenticationService, DummyService, FileService, SessionsService } from './_services/index';

// all components
import { AppComponent } from './_components/app.component';
import { LoginComponent, RegisterComponent, ForgotPasswordComponent, ResetPasswordComponent } from './_components/auth/index';
import { NavigationComponent } from './_components/navigation/navigation.component';
import { HomeComponent } from './_components/home/home.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { MemberBadgeComponent } from './_components/member-badge/member-badge.component';
import { GoogleAuthComponent } from './_components/auth/googleauth/googleauth.component';
import { PostLoginComponent } from './_components/auth/postlogin/postlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    NavigationComponent,
    HomeComponent,
    DashboardComponent,
    MemberBadgeComponent,
    GoogleAuthComponent,
    PostLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    LayoutModule,
    MaterialModule,
    CrudModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard,
    AuthenticationService,
    DummyService,
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
