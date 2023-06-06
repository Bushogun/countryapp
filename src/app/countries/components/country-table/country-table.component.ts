import { NgModule, Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img { width: 25px; } `
  ]
})

export class CountryTableComponent implements OnInit {

  @Input()
  public countries: Country[] = [];

  constructor() { }

  ngOnInit() {
  }

  getCountryFlagEmoji(country: Country): string {
    const countryCode = country.flag;
    const emojiCode = countryCode.replace(/./g, char => '&#' + char.codePointAt(0) + ';');
    return emojiCode;
  }
}
