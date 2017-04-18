import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import {FirebaseService} from './services/firebase.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyD0eYNfAQJMYbZ5KDSy3Xo6u5qfssIncMs',
  authDomain: 'otpapp-df1c9.firebaseapp.com',
  databaseURL: 'https://otpapp-df1c9.firebaseio.com',
  storageBucket: 'otpapp-df1c9.appspot.com',
  messagingSenderId: '72829713862'
};


const appRoutes: Routes = [
  {
    path:'',  component:HomeComponent
  },
  {
    path: 'listing/:id', component: ListingComponent
  },
  {
    path:'listings', component: ListingsComponent
  },
  {
    path: 'addListing', component: AddListingComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
