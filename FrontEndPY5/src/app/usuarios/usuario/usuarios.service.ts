import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: any[] = [];
  seleccionarCronograma: any = null;
  httpClient: any;

  constructor() { 
    this.cargarUsuarios();
  }

  private cargarUsuarios() {
    this.usuarios = [];
    this.usuarios.push(
      { id: 1, periodoLectivo: '2023', fechaCreacionCronograma: '02-09-2023',  responsableCronograma: 'Pedro'},
      { id: 2, periodoLectivo: '2022', fechaCreacionCronograma: '12-10.2022', responsableCronograma: 'Carlos'}
    );
  }
  
  añadirUsuario(payload: any){
   this.usuarios.push(payload); 
  }

  actualizarUsuario(id:number, payload:any){
    const index = this.usuarios.findIndex(usuario => usuario.id === id );
    this.usuarios[index]=payload;
  }
  
  borrarUsuario(id:number){
    const index = this.usuarios.findIndex(usuario => usuario.id === id );
    if(index > -1) {
      this.usuarios.splice(index, 1);
    }
  }

 /*  getAllUsuario() {
    return this.httpClient.get('http://localhost:3000/api/v1/Usuarios');
  } */
}
