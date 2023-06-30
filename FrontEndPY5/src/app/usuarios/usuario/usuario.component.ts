import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {

  periodoLectivo: Date = new Date();
  fechaCreacionCronograma: Date = new Date();
  responsableCronograma: string = '';

  form: FormGroup;//Reactive For


  constructor(private formBuilder: FormBuilder, private usuariosService: UsuariosService) {
    if (this.usuariosService.seleccionarUsuario) {
      const usuarioSeleccionado = this.usuariosService.seleccionarUsuario;
      this.form = formBuilder.group({
        id: [0],
        periodoLectivo: [usuarioSeleccionado.periodoLectivo],
        fechaCreacionCronograma: [usuarioSeleccionado.fechaCreacionUsuario,],
        responsableCronograma: [usuarioSeleccionado.responsableCronograma, [Validators.required]],
      
      });
    } else {
      this.form = formBuilder.group({
        periodoLectivo: ['', [Validators.required, Validators.minLength(10)]],
        fechaCreacionCronograma: ['', [Validators.required]],
        responsableCronograma: ['', [Validators.required]],
       
      });
    }
  }
  

  onSubmit() {
    if (this.form.valid) {
      this.añadirUsuario();
    } else {
      alert('Formulario No Valido');
    }
  }

  añadirUsuario(){
    this.usuariosService.añadirUsuario(this.form.value);
    console.log(this.usuariosService.usuarios);
  }

  actualizarUsuario() {
    this.usuariosService.actualizarUsuario(this.idField.value, this.form.value);
    console.log(this.usuariosService.usuarios);
  }

  validateForm() {
    if (this.responsableUsuario === '' && this.responsableUsuario.length <= 3) {

    }
  }


  get idField() {
    return this.form.controls['id'];
  }


}
