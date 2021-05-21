import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {EmiCalculatorComponent} from './emi-calculator.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  declarations: [EmiCalculatorComponent],
  exports: [EmiCalculatorComponent]
})
export class EmiCalculatorComponentModule { }
