import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable()
export class Service1Service {
  api = 'http://raw.githubusercontent.com/topseom/data/master/users.json';

  constructor(public http: HttpClient) { }
  loaduser():Promise<any>{
    return new Promise((resolve, reject)=>{
      this.http.get(this.api).subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      })
    })
  }
}
