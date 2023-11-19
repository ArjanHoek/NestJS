import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Country } from './models/country.model';

@Controller('countries') // Using a path prefix in a @Controller() decorator allows us to easily group a set of related routes
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all')
  getCountires(): Country[] {
    return this.appService.getCountries();
  }
}
