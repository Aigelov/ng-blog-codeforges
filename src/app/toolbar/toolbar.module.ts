import { NgModule } from '@angular/core';

import { ToolbarComponent } from './toolbar.component';
import { CommonMaterialModule } from '../common/material/common-material.module';

@NgModule({
  imports: [
    CommonMaterialModule
  ],
  exports: [
    ToolbarComponent
  ],
  declarations: [
    ToolbarComponent
  ],
  providers: [],
})
export class ToolbarModule {
}
