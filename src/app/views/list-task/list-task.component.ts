import { Component, Input } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareaServicioService } from 'src/app/tarea-servicio.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent {
  constructor(private TareaServicio: TareaServicioService) {

  }
  //instancia del arreglo
  Tareas: Tarea[] = []

  //se ejecuta una ves que el componente es renderizado es como useEffect
  ngOnInit(): void {
    this.Tareas = this.TareaServicio.ObtenerTareas();
  }
}
