import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ForExampleComponent } from './for-example/for-example.component';
import { SwitchexampleComponent } from './switchexample/switchexample.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    HelloWorldComponent,
    ForExampleComponent,
    SwitchexampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
