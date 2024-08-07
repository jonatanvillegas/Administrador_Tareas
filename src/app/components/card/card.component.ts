import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/model/tarea';
import { TareaServicioService } from 'src/app/tarea-servicio.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private TareaServicio: TareaServicioService, private router: Router) { }


  AgregarTare(even: Event, nuevaTarea: HTMLInputElement) {
    //previniendo el default del submit
    even.preventDefault();
    const nuevaTareaTexto = nuevaTarea.value.trim();
    if (nuevaTareaTexto !== "") {
      const tarea: Tarea = { nombre: nuevaTareaTexto, completado: false }
      //agregando tarea
      this.TareaServicio.AgregarTarea(tarea);
      //obteniendo tareas del localstorage
      this.TareaServicio.Tareas = this.TareaServicio.ObtenerTareas()
      nuevaTarea.value = ""
      this.router.navigate(['/list'])
    } else {
      alert("tienes que agregar el nombre a la tarea..")
    }
  }
}

