import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesComponent } from './main/services/services.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { ContactComponent } from './main/contact/contact.component';
import { AboutComponent } from './main/about/about.component';
import { HeroComponent } from './hero/hero.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home",component:HeroComponent},
  {path:"",component:HeroComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"portfolio",component:PortfolioComponent},
  {path:"services",component:ServicesComponent},
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
