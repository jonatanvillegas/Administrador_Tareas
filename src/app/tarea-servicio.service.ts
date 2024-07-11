import { Injectable } from '@angular/core';
import { Tarea } from './model/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaServicioService {
  // nombre del key
  private key = "tareas";

  Tareas: Tarea[] = [];
  
  constructor() { }

  //obtiendo los valores de localstorage
  ObtenerTareas():Tarea[] {
    const tareas = localStorage.getItem(this.key);
    //transformando a json los datos de localStorage si no a []
    return tareas ? JSON.parse(tareas): [];
  }

  //Guardando la tarea en localstorage
  GuardarTare(tareas: Tarea[]): void{
    //guardando los valores en formato String
    localStorage.setItem(this.key, JSON.stringify(tareas));
  }

  //agregando tarea
  AgregarTarea(tarea:Tarea): void{
    const tareas = this.ObtenerTareas();
    tareas.push(tarea);
    this.GuardarTare(tareas);
  }


}
