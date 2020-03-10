import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'crisis-center', component: CrisisListComponent},
  {path: 'heroes', component: HeroListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}), // only for demo
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
