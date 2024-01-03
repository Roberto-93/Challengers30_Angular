import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io('http://localhost:3000');

  sendMessage(msg: string) {
    this.socket.emit('chat message', msg);
   
    
  }

  getMessages(): Observable<string> {
    return new Observable(observer => {
      this.socket.on('chat message', (message: string) => {
        observer.next(message);
        
      });
     
      
      // Gestione dell'unsubscribe
      return () => this.socket.off('chat message');
    });
  }
 
  
}
