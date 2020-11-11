import { Injectable } from '@angular/core';
import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket;
  constructor() {   }
  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }
  sendComment(data){
    this.socket.emit('my message', data);
  }
  someoneTypingEvent(){
    this.socket.on('broadcast',(data) => {
      this.socket.emit('my message', "Co thang nao do dang comment ne");
    });
  }
}
export const environment = {
  production: false,
  SOCKET_ENDPOINT: 'http://localhost:4000'
};