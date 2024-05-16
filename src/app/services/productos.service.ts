import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  private API_PERSONAL = "http://localhost:3000/productos";

  getPersonal(): Observable<any> {
    return this.http.get(this.API_PERSONAL);
  }

  getPersonalUnico(id: any): Observable<any> {
    return this.http.get(`${this.API_PERSONAL}/${id}`);
  }

  // Guardar - POST ////////
  postPersonal(persona: any): Observable<any> {
    return this.http.post(this.API_PERSONAL, persona);
  }
  
  // Eliminar //////
  deletePersonalID(id: any): Observable<any> {
    return this.http.delete(`${this.API_PERSONAL}/${id}`);
  }

  // Editar /////////
  putNosotros(persona: any): Observable<any> {
    return this.http.put(`${this.API_PERSONAL}/${persona.id}`, persona);
  }
}
