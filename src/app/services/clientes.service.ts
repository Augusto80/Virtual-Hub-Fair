import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  URL = "http://localhost/virtualhub/";

  constructor(private http: HttpClient) { }

  obtenerClientes() {
    return this.http.get(`${this.URL}ObtenerClientes.php`);
  }

  altaClientes(cliente) {
    return this.http.post(`${this.URL}AltaClientes.php`, JSON.stringify(cliente));
  }

}
