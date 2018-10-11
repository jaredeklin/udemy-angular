import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// import { map } from 'rxjs/operators';
import "rxjs/Rx"
import { Observable } from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://ngpractice-c71e6.firebaseio.com/data.json', servers, {
    //   headers: headers
    // });
    return this.http.put('https://ngpractice-c71e6.firebaseio.com/data.json', servers, {
      headers: headers
    });
  }

  getServers() {
    return this.http.get('https://ngpractice-c71e6.firebaseio.com/data')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch((error: Response) => {
        return Observable.throw('Error! something went wrong');
      });
  }

  getAppName() {
    return this.http.get("https://ngpractice-c71e6.firebaseio.com/appName.json")
      .map((response: Response) => response.json());
  }
}
