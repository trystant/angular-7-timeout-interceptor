import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { MasterComponent } from "./master/master.component";
import { DiscogsService } from "./discogs.service";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, MasterComponent],
  bootstrap: [AppComponent],
  providers: [DiscogsService]
})
export class AppModule {}
