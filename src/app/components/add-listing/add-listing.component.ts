import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  name: any;
  gender: any;
  image: any;

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  onAddSubmit(){
  	let listing = {
  		name: this.name,
  		gender: this.gender,
  		image: this.image,
  	}
    console.log(listing);

  	this.firebaseService.addListing(listing);
 
  	this.router.navigate(['listings']);
  }



}
