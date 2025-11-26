import { Component } from '@angular/core';
import { CardMaquinas } from './card-maquinas/card-maquinas';
import { Maquina } from './card-maquinas/maquina';
// import { NgFor } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-maquinas',
  imports: [CardMaquinas],
  templateUrl: './maquinas.html',
  styleUrl: './maquinas.css',
})
export class Maquinas {
  maquinas : Maquina[] = [
  {
    Id: 1,
    Nome: 'Roberto',
    DataCadastro: new Date("14-03-2007"),
    Status: false
  },
  {
    Id: 2,
    Nome: 'Cleberson',
    DataCadastro: new Date("16-07-2013"),
    Status: true
  }       
  ]
}
