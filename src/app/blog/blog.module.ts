import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PostsModule } from './posts/posts.module';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog.component';
import { CommonMaterialModule } from '../common/material/common-material.module';

@NgModule({
  imports: [
    HttpClientModule,
    PostsModule,
    CommonMaterialModule
  ],
  exports: [
    PostsModule,
  ],
  declarations: [
    ConfirmationDialogComponent
  ],
  providers: [],
  entryComponents: [
    ConfirmationDialogComponent
  ]
})

export class BlogModule {
}
