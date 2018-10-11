import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    return this.http.post('https://ngpractice-c71e6.firebaseio.com/data.json', servers);
  }
}
