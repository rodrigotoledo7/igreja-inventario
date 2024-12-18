import { Routes } from '@angular/router';
import { ListarBensComponent } from './view/listar-bens/listar-bens.component';
import { CadastrarBensComponent } from './view/cadastrar-bens/cadastrar-bens.component';
import { ListarLocaisComponent } from './view/listar-locais/listar-locais.component';
import { CadastrarLocaisComponent } from './view/cadastrar-locais/cadastrar-locais.component';

export const routes: Routes = [
  {
    path: 'bens',
    children: [
      { path: 'listar', component: ListarBensComponent },
      { path: 'cadastrar', component: CadastrarBensComponent }
    ]
  },
  {
    path: 'locais',
    children: [
      { path: 'listar', component: ListarLocaisComponent },
      { path: 'cadastrar', component: CadastrarLocaisComponent }
    ]
  },
  { path: '', redirectTo: '/bens/listar', pathMatch: 'full' }
];
