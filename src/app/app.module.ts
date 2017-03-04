import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PlayComponent } from "./play.component";
import { ListComponent } from "./list.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PlayComponent,
    ListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
