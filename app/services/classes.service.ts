import {Injectable} from '@angular/core';
import {Students} from '../shared/students';
import {Classes} from '../shared/classes';
import {Attendence} from '../shared/attendence';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {baseURL} from '../shared/baseurl';
import { ProcessHTTPMsgService} from './process-httpmsg.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';


@Injectable()

export class ClassesService{
    constructor(public http: Http,private processHttpmsgService: ProcessHTTPMsgService) {
      }
    
      getAllClasses():Observable<Classes[]>{
        return this.http.get(baseURL + 'classes').map(res => {return this.processHttpmsgService.extractData(res)})._catch(error => {return this.processHttpmsgService.handleError(error)});
        ;
      }
    
      getClass(id:number):Observable<Classes>{
        return this.http.get(baseURL + 'classes/'+id).map(res => {return this.processHttpmsgService.extractData(res)})._catch(error => {return this.processHttpmsgService.handleError(error)});
        ;
      }

      getStudents(id:number):Observable<Students>{
        return this.http.get(baseURL + 'classes/'+id).map(res => {return this.processHttpmsgService.extractData(res)})._catch(error => {return this.processHttpmsgService.handleError(error)});
        ;
      }
}