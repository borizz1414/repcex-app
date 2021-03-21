import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    MatExpansionModule,
    MatDividerModule

  ],exports:[
    MatButtonModule,
    MatStepperModule,
    MatExpansionModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
