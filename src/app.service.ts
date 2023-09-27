import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { SocketGateway } from './socket/socket.gateway';
@Injectable()
export class AppService {
  constructor(
    private readonly mailService: MailerService,
    private readonly socketGateway: SocketGateway,
  ) {}

  async sendMail(data: any) {
    try {
      await this.mailService.sendMail({
        to: data.email,
        from: 'hoaforwork@gmail.com',
        subject: 'hello',
        text: 'hello',
        html: '<b>Welcome</b>',
      });
      this.socketGateway.server.emit('onCreateUser', {
        msg: 'New User',
        content: data,
      });
    } catch (err) {
      throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
