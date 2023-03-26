import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  constructor(private http: HttpClient, private router: Router) { }

  public urlLocal: string = "https://us-east4.gcp.data.mongodb-api.com/app/application-1-xayjl/endpoint"

  POST(url: string, data: {}) {
    let promise = new Promise((resolve, reject) => {
      this.http.post(url, data)
        .toPromise()
        .then((res: any) => {
          if (res.redireccion == true) {
            this.router.navigate(['/'])
          }
          resolve(res)
        })
    })
    return promise
  }

  GET(url: string) {
    let promise = new Promise((resolve, reject) => {
      this.http.get(url)
        .toPromise()
        .then((res: any) => {
          if (res.redireccion == true) {
            this.router.navigate(['/'])
          }
          resolve(res)
        })
    })
    return promise
  }
}
