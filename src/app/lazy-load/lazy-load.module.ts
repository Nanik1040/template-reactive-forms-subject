import { LazyLoadComponent } from './lazy-load.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const lazyRoute: Routes = [{ path: '', component: LazyLoadComponent }];
@NgModule({
  declarations: [LazyLoadComponent],
  imports: [RouterModule.forChild(lazyRoute)],
})
export class LazyModule {}
