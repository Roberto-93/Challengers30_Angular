import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages: string[] = [];
  newMessage: string = '';

  constructor(private chatService: ChatService) {
    this.chatService.getMessages().subscribe((msg: string) => {
      this.messages.push(msg);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
   
    
  }
}
