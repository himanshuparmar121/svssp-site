import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  latitude = 51.678418;
  longitude = 7.809007;
  zoom = 15;
}
