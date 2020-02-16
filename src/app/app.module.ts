import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotificationService} from './services/notification/notification.service';
import {TranslatePipe} from './pipes/translate/translate.pipe';
import {TranslateService, TRANSLATION_PROVIDERS} from './services/translate';
import {AuthService} from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, NotificationService, TranslatePipe, TranslateService, TRANSLATION_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
}
