import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { SocketService } from './socket.service';

@WebSocketGateway(80, { cors: true })
export class SocketGateway implements OnModuleInit {
  constructor(private readonly socketService: SocketService) {}
  @WebSocketServer()
  server: Server;
  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id, ' connected');
    });
  }

  @SubscribeMessage('newUser')
  newUser(@MessageBody() body: any) {
    console.log('newUser event', body);
    this.server.emit('onCreateUser', {
      msg: 'New User',
      content: body,
    });
  }
}
