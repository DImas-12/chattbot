import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KueBasahComponent } from './basah/basah.component';
import { KueKeringComponent } from './kering/kering.component';

const routes: Routes = [
  {
    path: 'KueKering',
    component: KueKeringComponent,
  },
  {
    path: 'KueBasah',
    component: KueBasahComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class KueRoutingModule {}
