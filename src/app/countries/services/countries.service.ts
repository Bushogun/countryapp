import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs'

import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiURL: string = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) {  }

    searchCountryByAlphaCode ( code : string): Observable<Country | null> {
      const url = `${this.apiURL}/alpha/${code}`;
      return this.http.get<Country[]>(url)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null ),
        catchError ( () => of (null))
      )
    }

    searchCapital( term : string ): Observable<Country[]> {
        const url = `${this.apiURL}/capital/${term}`;//get<country[]> viene a ser el observable
        return this.http.get<Country[]>(url)
        .pipe(
          catchError ( () => of ([])) //of regresa un observable []
          // catchError ( error => {
          //   console.log(error);
          //   return of ([])
          // })
          // tap ( countries => console.log ('tap 1 ', countries ) ),
          // map ( countries => [] ),
          // tap ( countries => console.log ('tap 2 ', countries ) ),
        );
    }
    searchCountry ( term : string ): Observable<Country[]> {
      const url = `${this.apiURL}/name/${term}`;
      return this.http.get<Country[]>(url)
      .pipe(
        catchError ( () => of ([]))
      )
    };

    searchRegion ( term : string ): Observable<Country[]> {
      const url = `${this.apiURL}/region/${term}`;
      return this.http.get<Country[]>(url)
      .pipe(
        catchError ( () => of ([]))
      )
    };

}
