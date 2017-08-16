import { Component, ElementRef, ViewChild, Inject } from '@angular/core';
import { TalkService } from './talk.service';
import { TalkModel } from './talk/talk.model';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TalkService]
})
export class AppComponent {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  public talk:Array<TalkModel> = new Array();
  public message:string;
  

  constructor(private _talkService: TalkService, @Inject(DOCUMENT) private document: Document){}

  public sendMessage(event: any) {
    this.message = event.target.value;
    this.createUserMessage();
    this._talkService.sendAsk(this.message).subscribe(res => this.setNewMessageToHistory(res));
    this.message = "";
    this.scrollToBottom();

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
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
        this.document.body.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

}
