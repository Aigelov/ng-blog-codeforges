import { NgModule } from '@angular/core';
import { PostService } from './services/post.service';
import { PostListModule } from './list/post-list.module';
import { PostResourceService } from './services/post-resource.service';

@NgModule({
  imports: [
    PostListModule
  ],
  exports: [
    PostListModule
  ],
  declarations: [],
  providers: [
    PostService,
    PostResourceService
  ],
})

export class BlogModule {
}
