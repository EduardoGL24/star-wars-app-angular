import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StarshipsComponent } from './pages/starships/starships.component';

const routes: Routes = [
  { path: 'films', component: HomeComponent },
  { path: 'starships/:id', component: StarshipsComponent },
  { path: '',   redirectTo: '/films', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
