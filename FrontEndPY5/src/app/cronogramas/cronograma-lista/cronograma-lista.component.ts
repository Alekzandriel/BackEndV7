import { Component } from '@angular/core';
import { CronogramasService } from '../cronograma/cronogramas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cronograma-lista',
  templateUrl: './cronograma-lista.component.html',
  styleUrls: ['./cronograma-lista.component.scss']
})
export class CronogramaListaComponent {

  cronogramas: any[] = [];
  seleccionarCronograma:any;

 constructor(private cronogramasService:CronogramasService, private router: Router){
  this.cronogramas = this.cronogramasService.cronogramas;
  this.getAllCronograma();
  }

  crearCronograma() {
    this.cronogramasService.seleccionarCronograma= null;
    this.router.navigate(['cronograma']);
  }

  actualizarCronograma(cronograma: any) {
    this.cronogramasService.seleccionarCronograma = cronograma;
    this.router.navigate(['cronograma']);
  }

  borrarCronograma(id: number) {
    this.cronogramasService.borrarCronograma(id);
    console.log(this.cronogramasService.cronogramas);
  }

  getAllCronograma() {
    console.log('1');

    this.cronogramasService.getAllCronograma().subscribe(
      (      response: any) => {
        console.log(response);
      }, (error: any) => {
        console.log(error);
      }
    );

    console.log('3');
  }

}
