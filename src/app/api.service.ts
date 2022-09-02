import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// observable added to use get request for httpclient
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Blog } from './interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(private httpClient:HttpClient) { }

    getItems() : Observable<Blog>{
      var returnVar = this.httpClient.get<Blog>(environment.apiEndpoint, 
                          { headers: {'apiKey' : 'value'}, params: {'a' : 'b'} });

      return returnVar;
    }
}