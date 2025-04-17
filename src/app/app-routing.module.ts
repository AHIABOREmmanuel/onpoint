import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';
import { ServicesComponent } from './components/services/services.component';
import { PacksComponent } from './components/packs/packs.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  {path: "", component:MainComponent},
  {path: "about", component:AboutComponent},
  {path: "service", component:ServicesComponent},
  {path: "pack", component:PacksComponent},
  {path: "portfolio", component:PortfolioComponent},
  {path: "blog", component:BlogsComponent},
  {path: "contact", component:ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
