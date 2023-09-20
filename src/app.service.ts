import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class AppService {
  constructor(private readonly mailService: MailerService) {}
  getHello(): string {
    return 'Hello World!';
  }
  sendMail() {
    this.mailService.sendMail({
      to: 'nguyendanghoaa@gmail.com',
      from: 'hoaforwork@gmail.com',
      subject: 'hello',
      text: 'hello',
      html: '<b>Welcome</b>',
    });
  }
}
