import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  // Add a message
  add(message: string) {
    this.messages.push(message);
  }

  // Clear all messages
  clear() {
    this.messages = [];
  }
}