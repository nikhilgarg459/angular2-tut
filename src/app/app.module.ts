import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service';

@NgModule({
  imports: [BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)] 
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule { }
