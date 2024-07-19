import { Routes } from '@angular/router';
import { HOmeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';

export const routes: Routes = [
    { path: "home", component: HOmeComponent },
    { path: "cliente", component: ClienteComponent }
];
