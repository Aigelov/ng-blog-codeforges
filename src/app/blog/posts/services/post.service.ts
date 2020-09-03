import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostResourceService } from './post-resource.service';
import { CreatePostDto } from './models/create-post-dto';
import { PostDto } from './models/post-dto';
import { EditPostDto } from './models/edit-post-dto';

@Injectable()
export class PostService {

  constructor(
    private postResourceService: PostResourceService
  ) {}

  public getAllPostItems(): Observable<PostDto[]> {
    return this.postResourceService.findAll();
  }

  public createPost(createPostDto: CreatePostDto): Observable<PostDto> {
    return this.postResourceService.create(createPostDto);
  }

  public editPost(editPostDto: EditPostDto): Observable<PostDto> {
    return this.postResourceService.edit(editPostDto);
  }

  public deletePost(postId: number): Observable<void> {
    return this.postResourceService.delete(postId);
  }
}

