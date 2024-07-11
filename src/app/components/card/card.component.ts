import { Component } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareaServicioService } from 'src/app/tarea-servicio.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  Tareas: Tarea[] = [];

  constructor(private TareaServicio: TareaServicioService) { }

  //se ejecuta una ves que el componente es renderizado es como useEffect
  ngOnInit(): void {
    this.Tareas = this.TareaServicio.ObtenerTareas();
  }

AgregarTare(even: Event, nuevaTarea: HTMLInputElement) {
    //previniendo el default del submit
    even.preventDefault();
    const nuevaTareaTexto = nuevaTarea.value.trim();
    if (nuevaTareaTexto !== "") {
      const tarea: Tarea = { nombre: nuevaTareaTexto, completado: false }
      //agregando tarea
      this.TareaServicio.AgregarTarea(tarea);
      //obteniendo tareas del localstorage
      this.Tareas = this.TareaServicio.ObtenerTareas()
      nuevaTarea.value = ""
    } else {
      alert("tienes que agregar el nombre a la tarea..")
    }
  }
}

