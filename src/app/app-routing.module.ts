import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ComputersComponent} from "./computers/computers.component";
import {LaptopsComponent} from "./laptops/laptops.component";
import {GamingLaptopsComponent} from "./gaming-laptops/gaming-laptops.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'computers', component: ComputersComponent},
  {path: 'laptops', component: LaptopsComponent},
  {path: 'gaming-laptops', component: GamingLaptopsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
