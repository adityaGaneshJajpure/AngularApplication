import {Injectable} from '@angular/core';
import {News} from '../shared/news';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {baseURL} from '../shared/baseurl';
import { ProcessHTTPMsgService} from './process-httpmsg.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';


@Injectable()

export class NewsService{
    constructor(public http: Http,private processHttpmsgService: ProcessHTTPMsgService) {
      }
    
      getAllNews():Observable<News[]>{
        return this.http.get(baseURL + 'news').map(res => {return this.processHttpmsgService.extractData(res)})._catch(error => {return this.processHttpmsgService.handleError(error)});
        ;
      }
    
      getNews(id:number):Observable<News>{
        return this.http.get(baseURL + 'news/'+id).map(res => {return this.processHttpmsgService.extractData(res)})._catch(error => {return this.processHttpmsgService.handleError(error)});
        ;
      }
}