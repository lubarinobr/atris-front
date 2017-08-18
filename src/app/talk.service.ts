import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { TalkModel } from './talk/talk.model';
import { TalkHistory } from './talk/talkHistory.model';


@Injectable()
export class TalkService {

    private talkApiURL = '/api/talk';

    constructor(private _http: Http){}

    sendAsk(historys: TalkModel[],message: string): Observable<any> {
        let history = JSON.stringify(historys);
        
        return this._http.post(this.talkApiURL,{history})
            .map(function(res) {
                return res.json();
            });
    }

}