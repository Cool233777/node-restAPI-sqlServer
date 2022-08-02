import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAllRoles() {
    return this.http.get(`${this.url}/roles`);
  }

  getRolById(idRol: any) {
    return this.http.get(`${this.url}/roles/${idRol}`);
  }

  createRol(name: string, description: string, status: string){
    const Rol = {
      name: name,
      description: description,
      status: status
    };
    return this.http.post(`${this.url}/roles`, Rol)
  }

  updateRol(idRol: string, name: string, description: string, status: string){
    const User = {
      name: name,
      description: description,
      status: status
    };
    return this.http.put(`${this.url}/roles/${idRol}`, User)
  }

  deleteRol(idRol: any){
    return this.http.delete(`${this.url}/roles/${idRol}`)
  }
}
