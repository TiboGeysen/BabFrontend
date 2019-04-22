import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDialogModule
  ],

  exports: [
    MatFormFieldModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
