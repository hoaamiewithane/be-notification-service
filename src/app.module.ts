import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'hoaforwork@gmail.com',
          pass: 'qlyi erld qema hyxl',
        },
      },
    }),
    ClientsModule.register([
      {
        name: 'NOTI_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'noti-service',
            brokers: [`localhost:9092`],
          },
          consumer: {
            groupId: 'noti-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
