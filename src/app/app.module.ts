import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { LaunchLandingComponent } from './launch-landing/launch-landing.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes= [
  {path: '', component: HomeComponent},
  {path: 'launch', component: LaunchLandingComponent} 
  // {path: 'launch_year', component: LaunchLandingComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LaunchLandingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
