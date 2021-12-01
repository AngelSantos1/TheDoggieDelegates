import { Injectable } from '@angular/core';
import { Client } from '@petfinder/petfinder-js';
import { Animal, dogSearchRoot } from '../dog-search/dog-search-model';

const client = new Client({apiKey: "JfKma1OQsJw2IJLGLGSCOBh7thEcY0et3ajRAWxthCL2qWqCqd", secret: "tOkMyd3qr3Ui7V4c2HWMBZN6cDQPtLaD7prWHKSM"})


@Injectable({
  providedIn: 'root'
})
export class DogSearchService {

  constructor() { }

  dogSearch(zipCode: number) {

    return client.animal.search({
      type: "Dog",
      page: 1,
      limit: 100,
      location: zipCode
    })
  }
}
