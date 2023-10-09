import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
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
  );
  await app.listen().then(() => {
    console.log('Noti-service started');
  });
}

bootstrap();
