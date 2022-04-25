import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient: HttpClient) { }

  getRequest(url, username) {
   return this.httpClient.get(url + username);
  }
}
