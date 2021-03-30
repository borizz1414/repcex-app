import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    MatExpansionModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatBadgeModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatSlideToggleModule

  ],exports:[
    MatButtonModule,
    MatStepperModule,
    MatExpansionModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatBadgeModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
