import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgmatricTableComponent } from './ng-matric-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgmatricTableComponent // ✅ IMPORT instead of DECLARE
  ],
  exports: [NgmatricTableComponent]
})
export class NgmatricTableModule {}
