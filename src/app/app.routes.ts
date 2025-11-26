import { Routes } from '@angular/router';
import { Maquinas }from './components/maquinas/maquinas';

export const routes: Routes = [
    {
        path: "maquinas",
        component: Maquinas
    },
    {
        path: "",
        component: Maquinas
    }
];
