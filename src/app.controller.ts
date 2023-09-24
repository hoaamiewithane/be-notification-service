import { Controller, OnModuleInit, Inject } from '@nestjs/common';
import {
  ClientKafka,
  EventPattern,
  MessagePattern,
} from '@nestjs/microservices';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    @Inject('NOTI_MICROSERVICE') private readonly kafkaClient: ClientKafka,
  ) {}
  async onModuleInit() {
    await this.kafkaClient.connect();
    this.kafkaClient.subscribeToResponseOf('send_mail_msg');
  }

  @EventPattern('send_mail')
  sendMail(data: any) {
    console.log('user->noti', data);
    // return this.appService.sendMail(data);
  }
  @MessagePattern('send_mail_msg')
  sendMailMsg(data: any) {
    console.log('user->noti123', data);
    return 'hello';
  }
}
