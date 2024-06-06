import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  committeeMembers = [
    { name: 'John Doe', position: 'President', image: 'assets/person.jpg' },
    { name: 'Jane Smith', position: 'Vice President', image: 'assets/person.jpg' },
    { name: 'John Doe', position: 'President', image: 'assets/person.jpg' },
    { name: 'Jane Smith', position: 'Vice President', image: 'assets/person.jpg' },
    
  ];

  trustees = [
    { name: 'John Doe', position: 'President', image: 'assets/person.jpg' },
    { name: 'Jane Smith', position: 'Vice President', image: 'assets/person.jpg' },
    { name: 'John Doe', position: 'President', image: 'assets/person.jpg' },
    { name: 'Jane Smith', position: 'Vice President', image: 'assets/person.jpg' },
   
  ];

  temples = [
    { name: 'Temple One', location: 'City A', image: 'assets/person.jpg' },
    { name: 'Temple Two', location: 'City B', image: 'assets/person.jpg' },
    { name: 'Temple One', location: 'City A', image: 'assets/person.jpg' },
    { name: 'Temple Two', location: 'City B', image: 'assets/person.jpg' },
    
   ];
}
