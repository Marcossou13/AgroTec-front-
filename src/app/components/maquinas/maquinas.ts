import { Component } from '@angular/core';
import { CardMaquinas } from './card-maquinas/card-maquinas';
import { Maquina } from './card-maquinas/maquina';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maquinas',
  imports: [CardMaquinas,CommonModule],
  templateUrl: './maquinas.html',
  styleUrl: './maquinas.css',
})
export class Maquinas {
  maquinas : Maquina[] = []
  constructor (private http : HttpClient){}
  ngOnInit(): void {
    this.http.get<Maquina[]>("http://localhost:4200/api/maquinas").subscribe((dados) => this.maquinas = dados);
  }
}
