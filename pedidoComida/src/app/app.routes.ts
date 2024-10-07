import { Routes } from '@angular/router';
import path from 'path';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RubroComponent } from './pages/rubro/rubro.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: "carrito",
        component: CarritoComponent
    },
    {
        path: "articulo",
        component: ArticuloComponent
    },
    {
        path: "busqueda",
        component: BusquedaComponent
    },
    {
        path: "perfil",
        component: PerfilComponent
    },
    {
        path: "rubro",
        component: RubroComponent
    },{
        path: "",
        component: HomeComponent
    },
];
