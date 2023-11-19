import { Injectable } from '@nestjs/common';
import { Country } from './models/country.model';

@Injectable()
export class AppService {
  getCountries(): Country[] {
    return [
      {
        name: 'Austria',
      },
      {
        name: 'Japan',
      },
      {
        name: 'New Zealand',
      },
      {
        name: 'Canada',
      },
    ];
  }
}
