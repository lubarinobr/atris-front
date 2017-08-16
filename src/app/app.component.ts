import { Component } from '@angular/core';
import { TalkService } from './talk.service';
import { TalkModel } from './talk/talk.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TalkService]
})
export class AppComponent {

  public talk:Array<TalkModel> = new Array();
  public message:string;

  constructor(private _talkService: TalkService){}

  public sendMessage(event: any) {
    this.message = event.target.value;
    this.createUserMessage();
    this._talkService.sendAsk(this.message).subscribe(res => this.setNewMessageToHistory(res));
    this.message = "";

  }

  private createUserMessage() {
    let currentTalk = new TalkModel();
    currentTalk.message = this.message;
    currentTalk.name = "Matheus Lubarino";
    currentTalk.dateTime = new Date();
    currentTalk.id = 1;
    currentTalk.cssClass = "self";
    this.talk.push(currentTalk);
  }

  private setNewMessageToHistory(newMessage: TalkModel) {
    this.talk.push(newMessage);
  }

}
