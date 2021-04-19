import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient,
    public router: Router,) { }
    headers : HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    registerUser(body):Observable<any>{
      return this.http.post<any>(`${environment.api_url}users`,body)
      .pipe(
        catchError(this.handleError),
        map((resp:any)=>resp)
      )
    }
    login(body):Observable<any>{
      return this.http.post<any>(`${environment.api_url}login`,body)
      .pipe(
        catchError(this.handleError),
        map((resp:any)=>resp)
      )
    }
    private handleError(error : HttpErrorResponse){
      console.log(error)
      return throwError('Ha ocurrido un error')
    }
}
