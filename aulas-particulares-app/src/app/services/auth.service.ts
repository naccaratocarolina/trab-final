import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token;
  //token = localStorage.getItem('token');

  // A URL da API
  apiUrl: string = "http://localhost:8000/api/";

  httpHeaders: object = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '
    }
  }

  // As headers da requisição

  // Construtor
  constructor( public http: HttpClient ) {}

  // Registro de usuário
  registrarUsuario(form): Observable<any> {
    return this.http.post( this.apiUrl + 'register', form, this.httpHeaders );
  }
  //Get usuario
  pegaUsuario(): Observable<any> {
    this.httpHeaders['headers']["Authorization"] = 'Bearer ' + localStorage.getItem('token');

    return this.http.get( this.apiUrl + 'getuser', this.httpHeaders);
  }
  // Login de Usuario
  loginUsuario(form): Observable<any> {
    return this.http.post( this.apiUrl + 'login', form, this.httpHeaders );
  }
  //
  estaLogado() {
    return localStorage.getItem('token');
  }

  //deslogaUsuario
  deslogaUsuario(): Observable<any> {
    this.httpHeaders['headers']["Authorization"] = 'Bearer ' + localStorage.getItem('token');

    return this.http.get(this.apiUrl + 'logout', this.httpHeaders);
  }
}
