import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { TalkModel } from './talk/talk.model';
import { TalkHistory } from './talk/talkHistory.model';


@Injectable()
export class TalkService {

    private talkApiURL = '/api/talk';
    private talkApiHello = '/api/hello';

    constructor(private _http: Http){}

    sendAsk(historys: TalkModel[],message: string): Observable<any> {
        let history = JSON.stringify(historys);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.talkApiURL,history, options)
            .map(function(res) {
                return res.json();
            });
    }

    getApresentation(): Observable<any> 
    {
        return this._http.post(this.talkApiHello, null)
            .map(function(res){
                return res.json();
            });
    }

}