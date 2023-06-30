import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AprobacionService } from '../aprobar/aprobacion.service';

@Component({
  selector: 'app-aprobar-lista',
  templateUrl: './aprobar-lista.component.html',
  styleUrls: ['./aprobar-lista.component.scss']
})
export class AprobarListaComponent {
 aprobacion: any[] = [];
 seleccionarAprobar:any;

 constructor(private aprobacionService:AprobacionService, private router: Router){
  this.aprobacion = this.aprobacionService.aprobacion;
  this.getAllAprobaciones();
  }

  crearAprobar() {
    this.aprobacionService.seleccionarAprobar = null;
    this.router.navigate(['aprobar']);
  }

  editarAprobar(aprobar: any) {
    this.aprobacionService.seleccionarAprobar = aprobar;
    this.router.navigate(['aprobar']);
  }

  borrarAprobar(id: number) {
    this.aprobacionService.borrarAprobar(id);
    console.log(this.aprobacionService.aprobacion);
  }

  getAllAprobaciones() {
    console.log('1');

    this.aprobacionService.getAllAprobaciones().subscribe(
      (      response: any) => {
        console.log(response);
      }, (error: any) => {
        console.log(error);
      }
    );

    console.log('3');
  }

}