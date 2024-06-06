import { Component } from '@angular/core';

@Component({
  selector: 'app-google-ad',
  template: `
    <div class="ad-container">
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-xxxxxxxxxxxxxxx"
           data-ad-slot="xxxxxxxxxx"
           data-ad-format="auto"></ins>
    </div>
  `,
  styles: [
    `
      .ad-container {
        margin: 20px 0;
      }
    `
  ]
})
export class GoogleAdComponent {
  ngOnInit(): void {
    // (adsbygoogle = window.adsbygoogle || []).push({});
  }

}
