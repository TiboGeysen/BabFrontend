import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule
  ],

  exports: [
    MatFormFieldModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
