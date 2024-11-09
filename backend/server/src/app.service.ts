import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHomeInfos(): object {
    return {
      name: 's1m0n',
      email: 'lucasimonmendes@hotmail.com',
      site: 'https://s1m0n.tech',
    };
  }
}
