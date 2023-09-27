import { Injectable } from '@nestjs/common';

@Injectable()
export class SocketService {
  create() {
    return 'This action adds a new socket';
  }

  remove(id: number) {
    return `This action removes a #${id} socket`;
  }
}
