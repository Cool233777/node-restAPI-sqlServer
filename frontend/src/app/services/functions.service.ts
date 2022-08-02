import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAllFunctions() {
    return this.http.get(`${this.url}/functions`);
  }

  getFunctionById(idFunction: any) {
    return this.http.get(`${this.url}/functions/${idFunction}`);
  }

  createFunction(name: string, description: string, status: string){
    const Function = {
      name: name,
      description: description,
      status: status
    };
    return this.http.post(`${this.url}/functions`, Function)
  }

  updateFunction(idFunction: string, name: string, description: string, status: string){
    const Function = {
      name: name,
      description: description,
      status: status
    };
    return this.http.put(`${this.url}/functions/${idFunction}`, Function)
  }

  deleteFunction(idFunction: any){
    return this.http.delete(`${this.url}/functions/${idFunction}`)
  }
}
