import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class AppService {
  constructor(private readonly mailService: MailerService) {}

  sendMail(data: any) {
    console.log({ send_mail: data });
    this.mailService.sendMail({
      to: data.email,
      from: 'hoaforwork@gmail.com',
      subject: 'hello',
      text: 'hello',
      html: '<b>Welcome</b>',
    });
  }
}
