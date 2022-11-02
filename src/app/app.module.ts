import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeyondLogoComponent } from './beyond-logo/beyond-logo.component';
import { LeftbottomcardComponent } from './leftbottomcard/leftbottomcard.component';
import { CentercardComponent } from './centercard/centercard.component';
import { RightbottomcardComponent } from './rightbottomcard/rightbottomcard.component';

@NgModule({
  declarations: [
    AppComponent,
    BeyondLogoComponent,
    LeftbottomcardComponent,
    CentercardComponent,
    RightbottomcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
