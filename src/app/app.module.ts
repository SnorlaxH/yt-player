import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PlayComponent } from "./play.component";
import { ListComponent } from "./list.component";
import { FormsModule } from "@angular/forms";
import { drtEnter, drtLast } from './directives/drtEnter';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PlayComponent,
    ListComponent,
    drtEnter,
    drtLast
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
