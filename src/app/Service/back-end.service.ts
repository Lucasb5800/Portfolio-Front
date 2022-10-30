import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private http: HttpClient) { }

  getCompleteName():Observable<any>{
    return new Observable<any>();
    // return this.http.get('');"Lucas Buffa"
  }
  getEducationList():Observable<any>{
    return new Observable<any>();
    // return this.http.get('');
  }
  getExperienceList():Observable<any>{
    return new Observable<any>();
    // return this.http.get('');
  }
  getSkillsList():Observable<any>{
    return new Observable<any>();
    // return this.http.get('');
  }
  getProyectsList():Observable<any>{
    return new Observable<any>();
    // return this.http.get('');
  }
}
