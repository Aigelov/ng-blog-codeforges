import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PostsModule } from './posts/posts.module';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog.component';
import { CommonMaterialModule } from '../common/material/common-material.module';
import { RouterModule } from '@angular/router';
import { BlogRouting } from './blog-routing';
import { BlogGuard } from './guards/blog.guard';

@NgModule({
  imports: [
    HttpClientModule,
    PostsModule,
    RouterModule.forChild(BlogRouting),
    CommonMaterialModule
  ],
  exports: [
    PostsModule,
  ],
  declarations: [
    ConfirmationDialogComponent
  ],
  providers: [
    BlogGuard
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ]
})

export class BlogModule {
}
