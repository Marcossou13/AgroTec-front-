
import { CardMaquinas } from './card-maquinas/card-maquinas';
import { Maquina } from './card-maquinas/maquina';
import { Component, OnInit } from '@angular/core';
import { MaquinaService } from '../../services/maquina';
import {NgForOf} from '@angular/common';


@Component({
  selector: 'app-maquinas',
  imports: [CardMaquinas,NgForOf],
  templateUrl: './maquinas.html',
  styleUrl: './maquinas.css',
})
export class Maquinas implements OnInit {

  maquinas: any[] = [];

  constructor(private maquinaService: MaquinaService) { }

  ngOnInit(): void {
    this.maquinaService.getMaquinas().subscribe({
      next: (data) => {
        this.maquinas = data;
      },
      error: (err) => {
        console.error('Erro ao buscar máquinas:', err);
      }
    });
  }
}
