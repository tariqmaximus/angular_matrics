import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatricsTableComponent } from './matrics-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatricsTableComponent // ✅ IMPORT instead of DECLARE
  ],
  exports: [MatricsTableComponent]
})
export class MatricsTableModule {}
