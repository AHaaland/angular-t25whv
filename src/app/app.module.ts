import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PageComponent } from './page/page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule,MatButtonModule,MatToolbarModule, MatCardModule ],
  declarations: [ AppComponent, HelloComponent, PageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
