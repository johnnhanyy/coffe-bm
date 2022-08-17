import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartPComponent } from './pages/cart-p/cart-p.component';
import { HotDrinksComponent } from './pages/hot-drinks/hot-drinks.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'crud/main', pathMatch: 'full' },
  { path: 'crud', redirectTo: 'crud/main', pathMatch: 'full' },
  { path: 'crud/main', component: MainComponent },
  { path: 'crud/registration', component: MainComponent },
  { path: 'crud/login', component: MainComponent },
  { path: 'crud/register', component: MainComponent },
  {path:'crud/about',component:AboutComponent},
  {path:'crud/hot-drinks',component:HotDrinksComponent},
  {path:'crud/cart-p', component:CartPComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
