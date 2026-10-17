import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminClientesComponent } from './pages/admin/admin-clientes/admin-clientes.component';
import { ClienteFormComponent } from './pages/cliente-form/cliente-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin-clientes-listar', component: AdminClientesComponent},
    { path: 'cliente-cadastro', component: ClienteFormComponent },
];
