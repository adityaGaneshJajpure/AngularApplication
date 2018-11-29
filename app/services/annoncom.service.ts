import {Injectable} from '@angular/core';
import {AnnonCom} from '../shared/annoncom';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {baseURL} from '../shared/baseurl';
import { ProcessHTTPMsgService} from './process-httpmsg.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';


@Injectable()

export class AnnonComService{
    constructor(public http: Http,private processHttpmsgService: ProcessHTTPMsgService) {
      }
    
      getAllComments():Observable<AnnonCom[]>{
        return this.http.get(baseURL + 'annoncom').map(res => {return this.processHttpmsgService.extractData(res)})._catch(error => {return this.processHttpmsgService.handleError(error)});
        ;
      }
    
}