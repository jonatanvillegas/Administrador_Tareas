import { Component } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 Tareas:Tarea[] = [];
 nuevaTarea:String = "";

  AgregarTare(even:Event){
    //previniendo el default del submit
    even.preventDefault();
    if (this.nuevaTarea.trim() !== "") {
      const tarea: Tarea = {nombre: this.nuevaTarea, completado: false}
      this.Tareas.push(tarea)
      this.nuevaTarea = ""
    }else{
      alert("tienes que agregar el nombre a la tarea..")
    }

  }
}

