import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  ///// login - logear
  private API_USERS= 'http://localhost:3000/login'

  postLogin(usuario: JSON):Observable<any>{
    return this.http.post(this.API_USERS, usuario)
  }


  ///// login - registrar
  private API_USERS2= 'http://localhost:3000/users'

  postRegistro( usuario:any): Observable<any>{
  return this.http.post(this.API_USERS2, usuario)
  }
}