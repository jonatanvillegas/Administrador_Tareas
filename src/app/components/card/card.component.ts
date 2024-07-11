import { Component } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  Tareas: Tarea[] = [];


AgregarTare(even: Event, nuevaTarea: HTMLInputElement) {
    //previniendo el default del submit
    even.preventDefault();
    const nuevaTareaTexto = nuevaTarea.value.trim();
    if (nuevaTareaTexto !== "") {
      const tarea: Tarea = { nombre: nuevaTareaTexto, completado: false }
      this.Tareas.push(tarea)
      nuevaTarea.value = ""
    } else {
      alert("tienes que agregar el nombre a la tarea..")
    }

  }
}

