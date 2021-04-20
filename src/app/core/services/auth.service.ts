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

  constructor(private http: HttpClient,
    private router: Router) { }
    headers : HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    registerUser(body):Observable<any>{
      console.log(body)
      return this.http.post<any>(`${environment.api_url}users`,body)
      .pipe(
        catchError(this.handleError),
        map((resp:any)=>  this.router.navigate(['/auth/ingresar']))
      )
    }
    login(body):Observable<any>{
      return this.http.post<any>(`${environment.api_url}login`,body)
      .pipe(
        catchError(this.handleError),
        map((resp:any)=> {
            const response = {
              message:resp.message
            }
            console.log(response)

            return resp.access_token == undefined ?  response : ( this.router.navigate(['/dashboard']),
                                                                     this.setToken(resp.access_token),response)
        
          })
      )
    }
    changePassword(body):Observable<any>{
      return this.http.put<any>(`${environment.api_url}change-password`,body)
      .pipe(
        catchError(this.handleError),
        map((resp:any)=>resp)
      )
    }
    private handleError(error : HttpErrorResponse){
      console.log(error)
      return throwError('Ha ocurrido un error')
    }
    getToken(){

    }
    setToken(token){
      localStorage.setItem('token',token)
      
    }
    getUserLocal(){

    }
    setUser(name){

    }
    setRoleUser(role){

    }
    getRoleUser(){
      
    }
    AuthNavigate(route) {
       if (localStorage.getItem('token') !== null) this.router.navigate(['/'+route])

    }
    logout(){
      localStorage.clear()
      this.router.navigate(['/auth/ingresar'])
    }
    

}
