import { Component } from '@angular/core';

@Component({
  selector: 'app-committee-members',
  templateUrl: './committee-members.component.html',
  styleUrls: ['./committee-members.component.css']
})
export class CommitteeMembersComponent {
  committeeMembers = [
    { name: 'John Doe', position: 'President', image: 'assets/person.jpg' },
    { name: 'Jane Smith', position: 'Vice President', image: 'assets/person.jpg' },
    { name: 'John Doe', position: 'President', image: 'assets/person.jpg' },
    { name: 'Jane Smith', position: 'Vice President', image: 'assets/person.jpg' },
    
  ];
}
