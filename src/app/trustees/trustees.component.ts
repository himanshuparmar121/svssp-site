import { Component } from '@angular/core';

@Component({
  selector: 'app-trustees',
  templateUrl: './trustees.component.html',
  styleUrls: ['./trustees.component.css']
})
export class TrusteesComponent {
  committeeMembers = [
    { name: 'John Doe', position: 'President', image: 'assets/person.jpg' },
    { name: 'Jane Smith', position: 'Vice President', image: 'assets/person.jpg' },
    { name: 'John Doe', position: 'President', image: 'assets/person.jpg' },
    { name: 'Jane Smith', position: 'Vice President', image: 'assets/person.jpg' },
    
  ];
}
