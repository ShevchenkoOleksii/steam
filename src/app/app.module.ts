import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AllGamesPageComponent } from './all-games-page/all-games-page.component';
import { GameCardComponent } from './shared/components/game-card/game-card.component';
import {SharedModule} from "./shared/shared.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./shared/auth.interseptor";
import {FilterByPricePipe} from "./admin/shared/pipes/filter-by-price.pipe";

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    AllGamesPageComponent,
    GameCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
