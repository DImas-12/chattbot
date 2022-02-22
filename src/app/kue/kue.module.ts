import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KueBasahComponent } from './basah/basah.component';
import { KueKeringComponent } from './kering/kering.component';
import { KueRoutingModule } from './kue-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [KueBasahComponent, KueKeringComponent],
  imports: [CommonModule, KueRoutingModule, MatButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class KueModule {}
