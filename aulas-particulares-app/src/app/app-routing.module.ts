import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PerfilGuard } from './guards/Perfil/perfil.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicial',
    loadChildren: () => import('./inicial/inicial.module').then( m => m.InicialPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'cadastro-professor',
    loadChildren: () => import('./cadastro-professor/cadastro-professor.module').then( m => m.CadastroProfessorPageModule)
  },
  {
    path: 'meus-agendamentos',
    loadChildren: () => import('./meus-agendamentos/meus-agendamentos.module').then( m => m.MeusAgendamentosPageModule)
  },
  {
    path: 'perfil-prof',
    loadChildren: () => import('./perfil-prof/perfil-prof.module').then( m => m.PerfilProfPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'materia',
    loadChildren: () => import('./materia/materia.module').then( m => m.MateriaPageModule)
  },
  //{ path: ‘home’, component: ‘HomePage’ , canActivate: [ClasseDaGuard] }
  {
    path:'tab3', 
    loadChildren: ()=> import('./tab3/tab3.module').then( m => m.Tab3PageModule), canActivate: [PerfilGuard]

  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
