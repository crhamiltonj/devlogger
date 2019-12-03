import { Injectable } from '@angular/core';
import { Log } from '../models/Log';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[]

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null})
  selectedLog = this.logSource.asObservable()

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date('12/26/2017')},
      {id: '1', text: 'Add bootstrap', date: new Date('01/13/2018')},
      {id: '1', text: 'Added logs', date: new Date('06/06/2018')},
    ]
   }

   getLogs(): Observable<Log[]>{
     return of(this.logs)
   }

   setFormLog(log: Log) {
     this.logSource.next(log)
   }
}
