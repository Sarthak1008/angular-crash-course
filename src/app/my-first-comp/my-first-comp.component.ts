import { Component } from '@angular/core';
import { MessageDetailsComponent } from "../message-details/message-details.component";
import { MyFirstService } from '../services/my-first-service.service';

@Component({
    selector: 'app-my-first-comp',
    standalone: true,
    templateUrl: './my-first-comp.component.html',
    styleUrl: './my-first-comp.component.scss',
    imports: [MessageDetailsComponent]
})
export class MyFirstCompComponent {

  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  constructor(
    private service: MyFirstService
  ) {
    this.messages = this.service.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }


  onSubmit() {
      this.isSubmitted = true;
      this.service.insert({
        'name': this.name,
        'email': this.email,
        'message': this.message
      });
      console.log(this.messages);

  }

  deleteMessage(index: number) {
    this.service.deleteMessage(index);
  }
}
