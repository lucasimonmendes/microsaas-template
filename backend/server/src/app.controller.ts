import { Controller, Get, Redirect, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('docs')
  @Redirect('https://notes.s1m0n.tech', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://blog.s1m0n.tech' };
    }
  }
}
