import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('send_mail')
  sendMail(data: any) {
    console.log('user->noti', data);
    return this.appService.sendMail(data);
  }
}
