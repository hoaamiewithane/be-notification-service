import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('send_mail')
  sendMail() {
    console.log('vo day');
    return this.appService.sendMail();
  }
  @EventPattern('get_user')
  getUser(data: any) {
    console.log('data', data);
    return 'qwe';
  }
}
