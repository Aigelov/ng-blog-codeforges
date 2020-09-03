import { NgModule } from '@angular/core';
import { PostListComponent } from './post-list.component';
import { CommonModule } from '@angular/common';
import { CommonMaterialModule } from '../../../common/material/common-material.module';

@NgModule({
  imports: [
    CommonModule,
    CommonMaterialModule
  ],
  exports: [
    PostListComponent
  ],
  declarations: [
    PostListComponent
  ],
  providers: [],
})

export class PostListModule {
}
