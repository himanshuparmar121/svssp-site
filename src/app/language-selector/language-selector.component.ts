import { Component } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent {
  languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'es', label: 'Spanish' },
    { value: 'de', label: 'German' }
  ];

  selectedLanguage: string | undefined;

  constructor() { }
  selectedValue = 'es'
  onSelectOption(value: any) {
    this.selectedLanguage = value;
    // Handle language selection logic here
    console.log('Selected language:', this.selectedLanguage);
  }
}
