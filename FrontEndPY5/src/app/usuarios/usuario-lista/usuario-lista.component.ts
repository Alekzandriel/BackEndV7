import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuario/usuarios.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss']
})
export class UsuarioListaComponent {

  usuarios: any[] = [];
  seleccionarUsuario:any;
  
 
  constructor(private usuariosService:UsuariosService, private router: Router){
   this.usuarios = this.usuariosService.usuarios;
   /* this.getAllUsuarios(); */
   }
 
 
   crearUsuario() {
     this.usuariosService.seleccionarUsuario = null;
     this.router.navigate(['usuario']);
   }
 
   editarUsuario(usuario: any) {
     this.usuariosService.seleccionarUsuario = usuario;
     this.router.navigate(['usuario']);
   }
 
   borrarUsuario(id: number) {
     this.usuariosService.borrarUsuario(id);
     console.log(this.usuariosService.usuarios);
   }
 
  /*  getAllUsuarios() {
     console.log('1');
 
     this.UsuariosService.getAllUsuarios().subscribe(
       (      response: any) => {
         console.log(response);
       }, (error: any) => {
         console.log(error);
       }
     );
 
     console.log('3');
   } */

}
