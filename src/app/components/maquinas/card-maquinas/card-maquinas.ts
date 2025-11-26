import { Component, Input } from '@angular/core';
import { Maquina } from './maquina';

@Component({
  selector: 'app-card-maquinas',
  imports: [],
  templateUrl: './card-maquinas.html',
  styleUrl: './card-maquinas.css',
})
export class CardMaquinas {
  @Input()
  maquina : Maquina = {
    Id: 0,
    Nome: '',
    DataCadastro: new Date(""),
    Status: false
  }
}
