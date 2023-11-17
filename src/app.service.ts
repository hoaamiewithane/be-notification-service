import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SocketGateway } from './socket/socket.gateway';

@Injectable()
export class AppService {
  constructor(
    private readonly mailService: MailerService,
    private readonly socketGateway: SocketGateway,
  ) {}

  async sendMail({ email }: { email: string }) {
    try {
      await this.mailService.sendMail({
        to: email,
        from: 'hoaforwork@gmail.com',
        subject: 'hello',
        text: 'hello',
        html: `<b>Welcome ${email} to our service</b>`,
      });
      this.socketGateway.server.emit('onCreateUser', { email });
    } catch (err) {
      throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
