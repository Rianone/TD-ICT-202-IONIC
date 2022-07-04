import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'informations',
    loadChildren: () => import('./pages/informations/informations.module').then( m => m.InformationsPageModule)
  },
  {
    path: 'login',
    component: LoginComponent 
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'education',
    loadChildren: () => import('./pages/education/education.module').then( m => m.EducationPageModule)
  },
  {
    path: 'experience',
    loadChildren: () => import('./pages/experience/experience.module').then( m => m.ExperiencePageModule)
  },
  {
    path: 'competence',
    loadChildren: () => import('./pages/competence/competence.module').then( m => m.CompetencePageModule)
  },
  {
    path: 'langues',
    loadChildren: () => import('./pages/langues/langues.module').then( m => m.LanguesPageModule)
  },
  {
    path: 'loisirs',
    loadChildren: () => import('./pages/loisirs/loisirs.module').then( m => m.LoisirsPageModule)
  },
  {
    path: 'imprimer',
    loadChildren: () => import('./pages/imprimer/imprimer.module').then( m => m.ImprimerPageModule)
  },
  {
    path: 'realisation',
    loadChildren: () => import('./pages/realisation/realisation.module').then( m => m.RealisationPageModule)
  },
  {
    path: 'certification',
    loadChildren: () => import('./pages/certification/certification.module').then( m => m.CertificationPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
