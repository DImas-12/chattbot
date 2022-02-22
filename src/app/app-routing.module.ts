import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KueBasahComponent } from './kue/basah/basah.component';
import { KueKeringComponent } from './kue/kering/kering.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'home',
    },
  },
  {
    path: 'KueKering',
    component: KueKeringComponent,
    data: {
      title: 'Kue Kering',
    },
  },
  {
    path: 'KueBasah',
    component: KueBasahComponent,
    data: {
      title: 'Kue basah',
    },
  },

  // {
  //   path: '/Kue',
  //   loadChildren: () => import('./kue/kue.module').then((m) => m.KueModule),
  //   data: {
  //     title: 'Kue',
  //   },
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
