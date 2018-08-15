import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ExampleModalComponent } from './example-modal/example-modal.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ModalModule.forRoot() ],
  declarations: [ AppComponent, ExampleModalComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ ExampleModalComponent ]
})
export class AppModule { }
