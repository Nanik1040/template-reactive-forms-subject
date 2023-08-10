import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteCompComponent } from './route-comp/route-comp.component';
import { AppComponent } from './app.component';
import { LazyModule } from './lazy-load/lazy-load.module';
const Route: Routes = [
  { path: 'RouteComp', component: RouteCompComponent },
  {
    path: 'LazyComp',
    loadChildren: () => LazyModule,
  },
  { path: '', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(Route)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
