import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { ConvertToSpacesPipe } from './converte-to-spaces.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FormsModule,
    CommonModule,
    StarComponent,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
