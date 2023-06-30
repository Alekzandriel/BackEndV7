import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CronogramasService {
 
  cronogramas: any[] = [];
  seleccionarCronograma: any = null;
  httpClient: any;

  constructor() { 
    this.cargarCronogramas();
  }

  private cargarCronogramas() {
    this.cronogramas = [];
    this.cronogramas.push(
      { id: 1, periodoLectivo: '2023', fechaCreacionCronograma: '02-09-2023',  responsableCronograma: 'Pedro'},
      { id: 2, periodoLectivo: '2022', fechaCreacionCronograma: '12-10.2022', responsableCronograma: 'Carlos'}
    );
  }
  
  añadirCronograma(payload: any){
   this.cronogramas.push(payload); 
  }

  actualizarCronograma(id:number, payload:any){
    const index = this.cronogramas.findIndex(cronograma => cronograma.id === id );
    this.cronogramas[index]=payload;
  }
  
  borrarCronograma(id:number){
    const index = this.cronogramas.findIndex(cronograma => cronograma.id === id );
    if(index > -1) {
      this.cronogramas.splice(index, 1);
    }
  }

/*   getAllCronograma() {
    return this.httpClient.get('http://localhost:3000/api/v1/Cronograma');
  } */
}
