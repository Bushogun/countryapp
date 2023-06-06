import { CountriesModule } from './../../countries.module';
import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{
  public country? : Country; // porque al momento de renderizarse el componente es nulo ?
  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router,
    private CountriesService : CountriesService,
    ) {

  }
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.CountriesService.searchCountryByAlphaCode( id )),
    )
    .subscribe ( country => {
      if ( !country ) return this.router.navigateByUrl('');
      console.log('Tenemos un país')
      return this.country = country;
      //console.log({ country })
      //console.log ({ params: id })

      // this.CountriesService.searchCountryByAlphaCode( id )
      // .subscribe( country => {
      //   console.log({ country })
      // });

    });
    //throw new Error('Method not implemented.');
  }

}
