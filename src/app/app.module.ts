import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotificationService} from './services/notification/notification.service';
import {TranslatePipe} from './pipes/translate/translate.pipe';
import {TranslateService, TRANSLATION_PROVIDERS} from './services/translate';
import {AuthService} from './services/auth/auth.service';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { LoginLayoutComponent } from './shared/layouts/login-layout/login-layout.component';
import { DashboardLayoutComponent } from './shared/layouts/dashboard-layout/dashboard-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {SidebarModule} from 'ng-sidebar';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    LoginComponent,
    LoginLayoutComponent,
    DashboardLayoutComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SidebarModule.forRoot(),
    FormsModule
  ],
  providers: [AuthService, NotificationService, TranslatePipe, TranslateService, TRANSLATION_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
}
