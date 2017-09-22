import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { InfoBarComponent } from './info-bar/info-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageTitleComponent,
    LoginComponent,
    FooterComponent,
    InfoBarComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
