import { NgModule } from '@angular/core';
import { PostListModule } from './list/post-list.module';
import { PostService } from './services/post.service';
import { PostResourceService } from './services/post-resource.service';
import { PostDialogComponent } from './dialogs/post-dialog.component';
import { CommonMaterialModule } from '../../common/material/common-material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PostListModule,
    CommonMaterialModule
  ],
  exports: [
    PostListModule
  ],
  declarations: [
    PostDialogComponent
  ],
  entryComponents: [
    PostDialogComponent
  ],
  providers: [
    PostService,
    PostResourceService
  ],
})

export class PostsModule {
}
