import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    MatExpansionModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule

  ],exports:[
    MatButtonModule,
    MatStepperModule,
    MatExpansionModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
