import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class TalkService {

    private talkApiURL = '/api/talk';

    constructor(private _http: Http){}

    sendAsk(message: string): Observable<any> {
        return this._http.post(this.talkApiURL,{message:message})
            .map(function(res) {
                return res.json();
            });
    }

}