import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IdentityComponent } from './identity/identity.component';
import { IdentityService } from './identity/identity.service';




@NgModule({
  declarations: [
    AppComponent,
    IdentityComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    IdentityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
