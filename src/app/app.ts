import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Maquinas }from './components/maquinas/maquinas';
import { CardMaquinas }from './components/maquinas/card-maquinas/card-maquinas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Maquinas,CardMaquinas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AgroTec');
}
