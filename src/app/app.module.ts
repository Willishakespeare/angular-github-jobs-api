import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContainerbodyComponent } from './components/containerbody/containerbody.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { JobdetailComponent } from './pages/jobdetail/jobdetail.component';
import { HomeComponent } from './pages/home/home.component';
import { ContainerjobComponent } from './components/containerjob/containerjob.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContainerbodyComponent,
    DateAgoPipe,
    FilterPipe,
    JobdetailComponent,
    HomeComponent,
    ContainerjobComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
